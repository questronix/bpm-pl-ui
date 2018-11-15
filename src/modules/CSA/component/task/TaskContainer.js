import React, { Component } from 'react';
import TaskList from './TaskList';
import MyModal from '../../../../shared/component/modal/Modal';
import PolicyInformationNew from '../policy/PolicyInformationNew';
import { PolicyService, TaskService } from '../../services';
import AgentinformationNew from '../policy/AgentinformationNew';
import ModalAlert from '../../../../shared/component/alerts/ModalAlert';

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskHistory: [],
      policyNumber: '',
      policy: {},
      client: {},
      transactionId: '',
      Tabs: 0,
      isSearching: false,
      openSearchModal: false,
      openTransactionModal: false,
    };
    this.searchPolicy = this.searchPolicy.bind(this);
    this.createTask = this.createTask.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalToggle = this.handleModalToggle.bind(this);
  }

  componentDidMount() {
    TaskService.getAllTasks()
      .then(res => {
        console.log(res.data);
        if (!res.data.error) {
          this.setState({
            tasks: res.data
          });
        }
      })
      .finally(() => {});

    TaskService.getAllTaskHistory()
      .then(res => {
        console.log(res.data);
        if (!res.data.error) {
          this.setState({
            taskHistory: res.data
          });
        }
      })
      .finally(() => {});
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
    this.setState({ openSearchModal:  !this.state.openSearchModal });
  }

  searchPolicy(policyNumber) {
    this.setState({
      policyNumberSearch: policyNumber,
      isSearching: true,
      isError: false
    });
    PolicyService.getPolicyInformationByID(policyNumber)
      .then(res => {
        console.log(res.data.result);
        if (res.data.result) {
          this.setState({
            policy: res.data.result,
            showComponent: true
          });
        } else {
          console.log('Error: ', res.data);
          alert(res.data.message);
        }
      })
      .finally(() => {
        this.setState({
          isSearching: false,
          isError: true
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
          this.setState({
            client: res.data.data.result.data
          });
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
    TaskService.createNewTask({"info": JSON.stringify(this.state.policy)})
      .then(res => {
        console.log(res.data);
        const t = JSON.parse(JSON.stringify(res.data.variables.policy));
        localStorage.setItem("transactionNumber", t.transactionNo);
        localStorage.setItem("policy", JSON.stringify(this.state.policy));
        this.props.history.push(`/tasks/edit?id=${res.data.id}`);
      })
      .catch(err => {
        console.log(err);
      });
    // window.location.href = "/tasks/edit"
  }

  render() {
    const { policy, isSearching } = this.state;

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
      <ModalAlert mHeader="Confirmation" show={this.state.openTransactionModal}>
          <div className="flex f-center f-column">

            <h3 className="text-center">
              Are you sure you want to Proceed?
            </h3>
          </div>
      </ModalAlert> 
        <div className="col no-padding xl-2 l-2 m-3 s-3 xs-4" />
        <MyModal modalId="1" modalLabel="New Transaction" isOpen={this.state.openSearchModal} onToggle={this.handleModalToggle}>
          <div className="col xl-12">
              <form>
                <div className="xl-12 flex f-justify-space-between">
                  <div className="xl-11 search-container bg-lightgray no-border">
                    <input
                      className="search bg-lightgray no-border"
                      type="text"
                      placeholder="Search..."
                      value={this.state.policyNumber}
                      onChange={this.handleInputChange}
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
            <hr />
          </div>
          {isSearching && <div>Searching Policy</div>}
          {policy.status && (
            <div>
              <div className=" col xl-12 flex-container flex-wrap modal-body no-padding ">
                <div className="col xl-12">
                  <h2 className="font-prulife no-margin">Policy Information</h2>
                </div>
                <div className="xl-12">
                  <h3 className=" container">
                    Policy Number: {this.state.policy.policyNo}
                  </h3>
                </div>
                <PolicyInformationNew policy={this.state.policy} />
                <div className="col xl-12">
                  <h2 className="font-prulife no-margin">Agent Information</h2>
                </div>
                <div className="xl-12">
                  <h3 className=" container">
                    Agent Code: {this.state.policy.agentCode}
                  </h3>
                </div>
                <AgentinformationNew policy={this.state.policy} />
              </div>
              <div className="col xl-12 modal-footer flex-container flex-wrap">
                <div className="col xl-10" />
                <a
                  className="btn prulife"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to Proceed'))
                      this.createredirect();
                  }}
                >
                  Proceed &nbsp;&nbsp;&nbsp;
                  <span className="fa fa-chevron-right font-white" />
                </a>
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

        <div className="col xl-10 l-10 m-9 s-9 xs-8">
          <div className="">
            <h1 className="flex s-f-center xs-f-center">Tasks</h1>
            <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
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
              <div className="flex f-row">
                <button className="btn prulife" onClick={this.handleModalToggle} accessKey="s">
                  <span className="fa fa-plus"></span> &nbsp; CREATE NEW TRANSACTION 
                </button>
              </div>
            </div>
            <div className="col no-padding xl-12 f-center f-start flex ">
              <p className="text-bold">FILTERS :</p>
              <a className="btn-sm  bright-blue">All task</a>
              <a className="btn-sm alt">Recently Updated</a>
            </div>
            <TaskList tasks={this.state.tasks} policy={this.state.policy} />
            {/* <h1>Task History</h1>  */}
            {/* <TaskList tasks={this.state.taskHistory}/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskContainer;
