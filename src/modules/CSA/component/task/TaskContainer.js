import React, { Component } from 'react';
import TaskList from './TaskList';
import MyModal from '../../../../shared/component/modal/Modal';
import ModalTrigger from '../../../../shared/component/modal/ModalTrigger';
import PolicyInformation from '../policy/PolicyInformation';
import Input from '../../../../shared/component/input/Input';
import PolicyInformationNew from '../policy/PolicyInformationNew';
import TabHeader from '../policy/TabHeader';
import TransactionNew from '../policy/TransactionNew';
import Fatca from '../policy/Fatca';
import FatcaNew from '../policy/FatcaNew';
import InsuredinformationNew from '../policy/InsuredinformationNew';
import OwnerinformationNew from '../policy/OwnerinformationNew';
import Footer from '../../../../shared/component/footer/Footer';
import { PolicyService, TaskService } from '../../services';
import AgentinformationNew from '../policy/AgentinformationNew';


class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskHistory: [],
      policyNumber: '',
      policy: {},
      client:{},
      
      

      Tabs: 0,
      

    }
    this.handlePolicySearchSubmit = this.handlePolicySearchSubmit.bind(this)
    this.createTask = this.createTask.bind(this);
        // Test
        this.handleTabClick = this.handleTabClick.bind(this);
        this.decrement = this.decrement.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    this.handlePolicySearchSubmit(this.state.policyNumber);
  }

  handleItemClick(url) {
    window.location.href = url;
  }

  handleInputChange(event) {
    const value = event.target.value;

    this.setState({
      policyNumber: value
    })
  }


  handlePolicySearchSubmit(policyNumber) {

    this.setState({
      policyNumberSearch: policyNumber,
      isSearching: true,
      isError: false,
    });
    PolicyService.getPolicyInformationByID(policyNumber).then((res) => {
      console.log(res.data.data.result.data);
      if (res.data.data.result.data) {
        this.setState({
          policy: res.data.data.result.data
        })
      } 

    }).catch((err) => {
      this.setState({
        isSearching: false,
        isError: true,
      });
      console.log('Error: ', err);
    });

  }
  // Test
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
    if(this.state.Tabs==0){
      this.getClientInfo(12345);
    }
  }
  // Test
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
  }

  decrement() {
    this.setState({
      Tabs: this.state.Tabs - 1
    });
  }
  // End of test


  getClientInfo(id){
    PolicyService.getClientIformationByid(id).then((res) => {
      if (res.data.data.result.data) {
        this.setState({
          client: res.data.data.result.data
        })
      } 
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  

  decrement() {
    this.setState({
      Tabs: this.state.Tabs - 1
    });
  }
  // End of test
createredirect(){
  this.createTask()
  this.handleItemClick(`/tasks/edit?id=${tasks.id}`)
}

  createTask(id) {
    TaskService.createNewTask(id).then((res) => {
      window.location.href = `/tasks`;
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    TaskService.getAllTasks().then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {

    });

    TaskService.getAllTaskHistory().then((res) => {
      console.log(res.data);
      this.setState({
        taskHistory: res.data
      })
    }).finally(() => {

    });
  }

  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col no-padding xl-2 l-2 m-3 s-3 xs-4"></div>
        <MyModal
          modalId="1"
          modalLabel="New Transaction">
          <div className="col xl-12">
            <div className="xl-12 flex f-justify-space-between">
              <div className="xl-11 search-container">
                <input className="search" type="text" placeholder="Search..."  value={this.state.policyNumber}
                onChange={this.handleInputChange}
                />
              </div>
              <a href="#" className="btn prulife flex f-center" onClick ={this.handleSubmit}>
                <span className="fa fa-search font-white"></span> &nbsp;
                <span>
                  SEARCH
                </span>
              </a>
            </div>
            <br/>
            <hr/>
          </div>
          <div className=" col xl-12 flex-container flex-wrap modal-body no-padding ">
            <div className="col xl-12">
              <h2 className="font-prulife no-margin">
                Policy Information
              </h2>
            </div>
            <div className="xl-12">
              <h3 className=" container">
                Policy Number: {this.state.policyNumber}
              </h3>
            </div>
            <PolicyInformationNew  policy={this.state.policy} />
            <div className="col xl-12">
              <h2 className="font-prulife no-margin">
                Agent Information
              </h2>
            </div>
            <div className="xl-12">
              <h3 className=" container">
                Agent Code: {this.state.policyNumber}
              </h3>
            </div>
            <AgentinformationNew  policy={this.state.policy}/>
          </div>
          <div className="col xl-12 modal-footer flex-container flex-wrap">
            <div className="col xl-10">
            </div>
            <a
              href="#"
              className="btn prulife"
              onClick={() => { if (window.confirm('Are you sure you want to Proceed')) this.createredirect() }}
              // onClick={this.createTask}
              >
              Proceed
              &nbsp;&nbsp;&nbsp;
              <span className="fa fa-chevron-right font-white"></span>
            </a>
          </div>
        </MyModal>
        
        <div className="col xl-10 l-10 m-9 s-9 xs-8">
          <div className="">
            <h1 className="flex s-f-center xs-f-center">My tasks</h1>
            <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
              <div className=" xl-5 flex f-justify-space-between">
                <div className="search-container">
                  {/* <FilterButton/> */}
                  <select>
                    <option value="Policy Number">Policy Number</option>
                    <option value="Policy Owner">Policy Owner</option>
                    <option value="Insured Name">Insured Name</option>
                    <option value="Policy">Policy</option>
                  </select>
                  <input className="search" placeholder="Search..." />
                </div>
                <a href="#" className="btn prulife flex f-center">
                  <span className="fa fa-search font-white"></span> &nbsp;
                <span>
                    SEARCH
                </span>
                </a>
              </div>
              <div className="flex f-row">
                <a
                  href="#"
                  className="btn prulife"
                // onClick={this.createTask}
                >
                  <ModalTrigger>
                    <label for="1">
                      <span className="fa fa-plus"></span> &nbsp;
                      CREATE NEW TRANSACTION
                  </label>
                  </ModalTrigger>
                </a>
              </div>
            </div>
            <TaskList tasks={this.state.tasks} policy={this.state.policy} />
            <h1>Task History</h1>
            {/* <TaskList tasks={this.state.taskHistory} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskContainer;