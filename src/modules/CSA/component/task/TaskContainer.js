import React, { Component } from 'react';
import TaskList from './TaskList';
import MyModal from '../../../../shared/component/modal/Modal';
import PolicyInformationNew from '../policy/PolicyInformationNew';
import { PolicyService, TaskService } from '../../services';
import AgentinformationNew from '../policy/AgentinformationNew';
import ModalAlert from '../../../../shared/component/alerts/ModalAlert';
import OnIt from '../../../../shared/component/loading/onIt';


class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskHistory: [],
      policyNumber: '', //00043256
      policy: {},
      client: {},
      transactionId: '',
      Tabs: 0,
      isSearching: false,
      openSearchModal: false,
      openTransactionModal: false,
      modalAlert: false,
    };
    this.searchPolicy = this.searchPolicy.bind(this);
    this.createTask = this.createTask.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handlemodalAlert = this.handlemodalAlert.bind(this);
  }

  componentDidMount() {
    TaskService.getAllTasks()
      .then(res => {
        console.log(res.data);
        if (!res.data.error) {
          this.setState({
            tasks: res.data.result
          });
        }
      })
      .finally(() => { });

    TaskService.getAllTaskHistory()
      .then(res => {
        console.log(res.data);
        if (!res.data.error) {
          this.setState({
            taskHistory: res.data
          });
        }
      })
      .finally(() => { });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.searchPolicy(this.state.policyNumber);
  }

  handleItemClick(url) {
    window.location.href = url;
  }

  handleInputChange(event) {
    const value = event.target.value;

    this.setState({
      policyNumber: value
    });
  }

  handleTabClick() {
    if (this.state.Tabs == 3) {
      this.setState({
        Tabs: 3
      });
    } else {
      this.setState({
        Tabs: this.state.Tabs + 1
      });
    }
    if (this.state.Tabs == 0) {
      this.getClientInfo(12345);
    }
  }

  handleModalToggle() {
    console.log('TOGGLE_MODAL')
    if(!this.state.openSearchModal){
      this.setState({
        policy : {
          status: false
        }
      });
    }
    this.setState({ openSearchModal: !this.state.openSearchModal });
  }

  handlemodalAlert(){
    this.setState({
      modalAlert: !this.state.modalAlert
    });
  }

  searchPolicy(policyNumber) {
    this.setState({
      policyNumberSearch: policyNumber,
      isSearching: true,
      isError: false,
      policy: {}
    });
    PolicyService.getPolicyInformationByID(policyNumber)
      .then(res => {
        if (res.status == 200) {
          this.setState({
            policy: res.data.result,
            showComponent: true
          });
        }
        else if (res.status == 404) {
          alert('Policy not found.');
        }
        // else if (res.data.status == "fail") {
        //   alert(res.data.message);
        // } 
        else {
          console.log('Error: ', res.data);
          // if (window.confirm('No Results Found')){
          //  this.setState({
          //    policy: "",
          //    showComponent: false
          //  })
          // }   
        }
      })
      .finally(() => {
        this.setState({
          isSearching: false,
          // isError: true
        });
      });
  }

  renderReturn() {
    this.setState({
      showComponent: true
    });
  }

  decrement() {
    this.setState({
      Tabs: this.state.Tabs - 1
    });
  }

  getClientInfo(id) {
    PolicyService.getClientIformationByid(id)
      .then(res => {
        if (res.data.data.result.data) {
          
          // this.setState({
          //   client: res.data.data.result.data
          // });
          if(res.data.data.result.data.status == "0"){
            console.log("Error processing in Life Asia");
          }
          else {
            this.setState({
              client: res.data.data.result.data
            });
          }
        }
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  decrement() {
    this.setState({
      Tabs: this.state.Tabs - 1
    });
  }
  // End of test
  createredirect() {
    this.createTask(1);
  }

  createTask() {
    TaskService.createNewTask({ policy: this.state.policy })
      .then(res => {
        console.log(res.data);
        // const t = JSON.parse(JSON.stringify(res.data.variables.policy));
        // localStorage.setItem("transactionNumber", t.transactionNo);
        // localStorage.setItem("policy", JSON.stringify(this.state.policy));
        this.props.history.push(`/tasks/edit?id=${res.data.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { policy, isSearching } = this.state;
    const role = JSON.parse(sessionStorage.getItem('user_info')).Role_Description;

    return (
      <div className="flex-container flex-wrap margin-top-70">
        {/* THIS WILL BE ADDED IF THE AUTHORITY CAN APPROVE */}
        {/* <ModalAlert>
          <div className="flex f-center f-column big-container">
            <span className="fa fa-users-cog big-font font-gray big-container"></span>
            <p className="text-center">
            This transaction fall into your limitation.
              Want to proceed to approved this transaction?
            </p>
          </div>
      </ModalAlert> */}
      <ModalAlert mHeader="Confirmation" modalalert={this.handlemodalAlert} modalState={this.state.modalAlert} confirm={this.createTask}>
          <div className="flex f-center f-column">

            <h3 className="text-center">
              Are you sure you want to Proceed?
            </h3>
          </div>
        </ModalAlert>
        <div className="col no-padding ghost-sidebar" />
        <MyModal modalId="1" modalLabel="Add New Transaction" isOpen={this.state.openSearchModal} onToggle={this.handleModalToggle}>
          <div className="col no-padding xl-12 mb ml-0 mr-0 border-bottom border-gray">
            <form>
              <div className="xl-12 flex f-justify-space-between ">
                <div className="xl-11 search-container bg-lightgray no-border">
                  <input
                    className="search bg-lightgray no-border"
                    type="text"
                    placeholder="Search..."
                    value={this.state.policyNumber}
                    onChange={this.handleInputChange}
                    autoFocus
                  />
                </div>
                <button
                  className="btn prulife flex f-center"
                  onClick={this.handleSubmit}
                >
                  <span className="fa fa-search font-white" /> &nbsp;
                    <span>SEARCH</span>
                </button>
              </div>
            </form>
            <br />
          </div>
          {isSearching &&
            // <div className="no-search-result flex f-center modal-body loading">
            //       <span className="spinner atom"></span>
            //       <br />
            //       <p className="font-white">Im on it!</p>
            // </div>
           <OnIt/>
          }
          {policy.status && (
            <div>
              <div className=" col xl-12 flex-container flex-wrap modal-body no-padding ">
                <div className="xl-12">
                  <h2 className="font-prulife text-red mb-sm mt-0">Policy Information</h2>
                </div>
                <div className="xl-12">
                  <h4 className="mb-sm mt-0">
                    Policy Number: {this.state.policy.policyNo}
                  </h4>
                </div>
                <PolicyInformationNew policy={this.state.policy} />
                <div className="xl-12">
                  <h2 className="font-prulife text-red mb-sm mt-0">Agent Information</h2>
                </div>
                <div className="xl-12">
                  <h4 className="mb-sm mt-0">
                    Agent Code: {this.state.policy.agentCode}
                  </h4>
                </div>
                <AgentinformationNew policy={this.state.policy} />
              </div>
              <div className="col xl-12 modal-footer flex-container flex-wrap">
                {this.state.policy.policyStatus != "LA" && <div className="col xl-10"><p className="">Sorry, y ou can't proceed. Invalid policy status.</p></div>}
                {this.state.policy.policyStatus == "LA" && <div className="xl-10"></div>}
                <button
                  className="btn prulife"
                  onClick={this.handlemodalAlert}
                  disabled={this.state.policy.policyStatus != "LA" ? true : false}
                >
                  Proceed &nbsp;&nbsp;&nbsp;
                  <span className="fa fa-chevron-right font-white" />
                </button>
              </div>
            </div>
          )}
          {!policy.status && (
            <div className="no-search-result flex f-center">
              <span className="fa fa-search" />
              <br />
              <p>No record/s found</p>
            </div>
          )}
        </MyModal>

        <div className="col margin-left-250 p-x2">
          <div className="">
            <h1 className="flex s-f-center xs-f-center text-darkgray larger normal">Tasks</h1>
            <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between mb">
              <div className=" xl-5 flex f-justify-space-between">
                <div className="search-container no-border">
                  {/* <FilterButton/> */}
                  <select>
                    <option value="Policy Number">Policy Number</option>
                    <option value="Policy Owner">Policy Owner</option>
                    <option value="Insured Name">Insured Name</option>
                    <option value="Policy">Policy</option>
                  </select>
                  <input className="search" placeholder="Search Policy Number" />
                </div>
                <a href="#" className="btn prulife flex f-center">
                  <span className="fa fa-search font-white" /> &nbsp;
                  <span>SEARCH</span>
                </a>
              </div>
             {role == "CSA" && (
                <div className="flex f-row">
                <button className="btn prulife" onClick={this.handleModalToggle} accessKey="s">
                  <span className="fa fa-plus"></span> &nbsp;  ADD NEW TRANSACTION
                </button>
              </div>
             )}
            </div>
            <div className="col no-padding xl-12 f-center f-start flex">
              <p className="text-bold font-sm">FILTERS :</p>
              <a className="btn-sm bright-blue ml">All task</a>
              <a className="btn-sm alt ml">Recently Updated</a>
            </div>
            <TaskList tasks={this.state.tasks} history={this.props.history}/>
            {/* <h1>Task History</h1>  */}
            {/* <TaskList tasks={this.state.taskHistory}/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskContainer;
