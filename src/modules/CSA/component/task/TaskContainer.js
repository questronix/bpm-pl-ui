import React, { Component } from 'react';
import { TaskService } from '../../services';
import TaskList from './TaskList';
import MyModal from '../../../../shared/component/modal/Modal';
import ModalTrigger from '../../../../shared/component/modal/ModalTrigger';
import PolicyInformation from '../policy/PolicyInformation';
import Input from '../../../../shared/component/input/Input';

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskHistory: [],
    }
    this.createTask = this.createTask.bind(this);
  }

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
          <div className="col xl-12">
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
            <div className=" col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="Agent Code"
              inputPlaceholder="007115122"
              inputClass="col xl-3 input-container" />
            <Input
              inputLabel="Agent Name"
              inputPlaceholder="First name Last name"
              inputClass="col xl-6 input-container" />
            <Input
              inputLabel="Agent Status"
              inputPlaceholder="Status"
              inputClass="col xl-3 input-container" />
            <Input
              inputLabel="Branch"
              inputPlaceholder="Branch Name"
              inputClass="col xl-8 input-container" />
            <Input
              inputLabel="NMA"
              inputPlaceholder="NMA"
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Plan Description"
              inputPlaceholder="Plan Description"
              inputClass="col xl-8 input-container" />
            <Input
              inputLabel="Plan Currency"
              inputPlaceholder="NMA"
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Current Premium"
              inputPlaceholder="Current Premium"
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Required Premium"
              inputPlaceholder="Required Premium"
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Premium Status"
              inputPlaceholder="Status"
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Sum Assured:"
              inputPlaceholder="100,000"
              inputClass="col xl-8 input-container" />
            <Input
              inputLabel="Risk Commencement Date:              "
              inputPlaceholder="mm/dd/yyyy"
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="First Issue Date:"
              inputPlaceholder="mm/dd/yyyy"
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Paid to Date:"
              inputPlaceholder="mm/dd/yyyy"
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Date of Signing:              "
              inputPlaceholder="mm/dd/yyyy"
              inputClass="col xl-4 input-container" />
            </div>
          <div className="col xl-12 modal-footer flex-container flex-wrap">
            <div className="col xl-11">
            </div>
            <a
              href="#"
              className ="btn prulife"
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
      </div>
    );
  }
}

export default TaskContainer;