import React, { Component } from 'react';
import CsaClient from './CsaClient';

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
          <h1 className="font-prulife flex s-f-center xs-f-center">Policy Information</h1>
          {/* <CsaPolicy /> */}
          <CsaClient sampleData={this.state.sample}/>
          {/* <CProcessorPolicy /> */}
          {/* <CProcessorClient /> */}
        </div>
      </div>
    );
  }
}

export default ProcessorContainer;

