import React, { Component } from 'react';
import { TaskService } from '../../services';
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

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskHistory: [],
      // Test
      Tabs: 0,
    }
    this.createTask = this.createTask.bind(this);
    // Test
    this.handleTabClick = this.handleTabClick.bind(this);
    this.decrement = this.decrement.bind(this);
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


  createTask() {
    TaskService.createNewTask().then((res) => {
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
      <div>
        <MyModal
          modalId="1"
          modalLabel="New Transaction">
          <div className="col xl-12 modal-header">
            <div className="xl-4 l-4 flex f-justify-space-between">
              <div className="search-container">
                <input className="search" placeholder="Search..." />
              </div>
              <a href="#" className="btn prulife flex f-center">
                <span className="fa fa-search font-white"></span> &nbsp;
                <span>
                  SEARCH
                </span>
              </a>
            </div>
          </div>
          <div className=" col xl-12 flex-container flex-wrap modal-body">
            <div className="xl-12 modal-header">
              <h2 className="font-prulife container">
                Policy Information
              </h2>
            </div>
            <div className="xl-12">
              <h2 className=" container">
                Policy Number: 001011111
              </h2>
            </div>
            <PolicyInformationNew />
          </div>
          <div className="col xl-12 modal-footer flex-container flex-wrap">
            <div className="col xl-11">
            </div>
            <a
              href="#"
              className="btn prulife"
              onClick={this.createTask}>
              Proceed
            </a>
          </div>
        </MyModal>
        
        <div className="flex-container flex-wrap flex f-center">
          <div className="col xl-10 l-10 m-10 s-11 xs-11">
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
            <TaskList tasks={this.state.tasks} />
            <h1>Task History</h1>
            {/* <TaskList tasks={this.state.taskHistory} /> */}
          </div>
        </div>
        <div className="box">

          <div className="tab-title-container">
            <div className={this.state.Tabs == 0 ? "tab-title active" : "tab-title"}>
              <h4 className="circle">
                1
                </h4>
              <a onClick={() => { this.handleTabClick(0) }}>
                <h4>
                  Transaction Selection
                  </h4>
              </a>
              <span class="white"></span><span class="gray"></span>
            </div>
            <div className={this.state.Tabs == 1 ? "tab-title active" : "tab-title"}>
              <h4 className="circle">
                2
                </h4>
              <a onClick={() => { this.handleTabClick(1) }}>
                <h4>
                  Additional Prolicy info
                  </h4>
              </a>
              <span class="white"></span><span class="gray"></span>
            </div>
            <div className={this.state.Tabs == 2 ? "tab-title active" : "tab-title"}>
              <h4 className="circle">
                3
                </h4>
              <a onClick={() => { this.handleTabClick(2) }}>
                <h4>
                  Insured Details
                  </h4>
              </a>
              <span class="white"></span><span class="gray"></span>
            </div>
            <div className={this.state.Tabs == 3 ? "tab-title active" : "tab-title"}>
              <h4 className="circle">
                4
                </h4>
              <a onClick={() => { this.handleTabClick(3) }}>
                <h4>
                  Owner Details
                  </h4>
              </a>
            </div>
          </div>
          <TabHeader />
          <div className="box-body">

            {/* this is for tab1 */}
            {this.state.Tabs == 0 ?
              <div>
                <TransactionNew />
                <div className="flex f-end container">
                  <a href="#" className="btn purple" onClick={this.handleTabClick}>
                    Additional Policy Information
                      </a>
                </div>
              </div>
              : ""}
            {/* this is for tab2 */}
            {this.state.Tabs == 1 ?
              <div>
                <div className="flex f-center">
                  {/* <FatcaNew/> */}
                </div>
                <div className="flex f-justify-space-between container">
                  <a href="#" className="btn bright-blue" onClick={this.decrement}>
                    Transaction Selection
                   </a>
                  <a href="#" className="btn grass-green" onClick={this.handleTabClick}>
                    Insured Details
                   </a>
                </div>
              </div> : ""}

            {/* this is for tab3 */}
            {this.state.Tabs == 2 ?
              <div>
                <InsuredinformationNew/>
                <div className="flex f-justify-space-between container">
                  <a href="#" className="btn purple" onClick={this.decrement}>
                    Additional Policy Info
                   </a>
                  <a href="#" className="btn prulife" onClick={this.handleTabClick}>
                    Owner Details
                   </a>
                </div>
              </div> : ""}
            {/* this is for tab4 */}
            {this.state.Tabs == 3 ?
              <div>
                <OwnerinformationNew/>
                <div className="flex f-justify-space-between container">
                  <a href="#" className="btn grass-green" onClick={this.decrement}>
                    Insured Details
                   </a>
                  <a href="#" className="btn prulife" onClick={this.handleTabClick}>
                    Submit
                   </a>
                </div>
              </div> : ""}

          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default TaskContainer;