import React, { Component } from 'react';
import CsaClient from './CsaClient';
import PrescreeningInfo from './adminTable';
import CardTable from '../../../../shared/component/table/Table';
import TaskCounter from '../../../../shared/component/Widgets/TaskCounter';

class ProcessorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'sample',
    };
  }

  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col xl-2 l-2 m-2 s-hide xs-hide invisible">
          made by questronix
        </div>
        <div className="col no-paddding xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <h1 className="font-prulife flex s-f-center xs-f-center">Task List</h1>
          {/* <TaskCounter
          overallTask="400"
          taskDone="250"/> */}
          <div className="col xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
            <div className="">
              <input className="input-search" placeholder="Search task..."/>
                <span className="fa fa-search input-icon"></span>
              <button className="btn bright-blue">
                Search
              </button>
            </div>
            <div className="tooltip">
            <span className="tooltip-text">
            Add a task
            </span>
            <button className="round-btn grass-green" onClick={this.createTask}><span className="fa fa-plus"></span></button>
            </div>
          </div>
          <CardTable/>
          {/* <h1 className="font-prulife flex s-f-center xs-f-center">Processor Information</h1>
          <CsaClient/> */}
          {/* <CsaPolicy /> */}
          {/* <CsaClient sampleData={this.state.sample}/> */}
          {/* <CProcessorPolicy /> */}
          {/* <CProcessorClient /> */}
          {/* <CardTable/> */}
          {/* <TaskCounter/> */}
        </div>
      </div>
    );
  }
}

export default ProcessorContainer;

