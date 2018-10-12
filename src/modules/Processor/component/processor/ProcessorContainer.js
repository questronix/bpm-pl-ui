import React, { Component } from 'react';
import CsaClient from './CsaClient';
import PrescreeningInfo from './PreScreening';
import CardTable from '../../../../shared/component/table/Table';
import TaskCounter from '../../../../shared/component/widgets/TaskStatus';

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
        <div className="col xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <h1 className="font-prulife flex s-f-center xs-f-center">Prescreening Information</h1>
          <PrescreeningInfo/>
          <h1 className="font-prulife flex s-f-center xs-f-center">Processor Information</h1>
          <CsaClient/>
          {/* <CsaPolicy /> */}
          {/* <CsaClient sampleData={this.state.sample}/> */}
          {/* <CProcessorPolicy /> */}
          {/* <CProcessorClient /> */}
          <CardTable/>
          <TaskCounter/>
        </div>
      </div>
    );
  }
}

export default ProcessorContainer;

