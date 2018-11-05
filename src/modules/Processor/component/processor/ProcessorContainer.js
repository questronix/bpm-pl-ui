import React, { Component } from 'react';
import CsaClient from './CsaClient';
import PrescreeningInfo from './PreScreening';
import CardTable from '../../../../shared/component/table/Table';
import TaskCounter from '../../../../shared/component/Widgets/TaskCounter';
import CardImg from '../../../../shared/component/Widgets/CardImg';
import { FileNetService } from '../../services/';

class ProcessorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'sample',
      doc: '',
    };
  }

  componentDidMount() {
    this.getApplicationDocs("12345678");
  }

  getApplicationDocs(appNo) {
    FileNetService.getDocs().then((res) => {
      console.log(res);
      this.setState({
        doc: res.data
      })
    }).finally(() => {

    });
  }

  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col xl-2 l-2 m-2 s-hide xs-hide invisible">
          made by questronix
        </div>
        <div className="col xl-10 l-10 m-10 s-11 xs-11 ">
          <h1 className="font-prulife flex s-f-center xs-f-center">Prescreening Information</h1>
          <CardImg class="xl-4" docsId={1} docs={this.state.doc} docLabel="Application Document" docDate="01-01-01"></CardImg>
          <div className="flex-container flex-wrap">
            <div className="col">
              <div className="tabs col xl-12 l-12 m-12 s-12 xs-12">
                <div className="tab-container flex-container no-padding col xl-12">
                  <div className="tab-title col xl-2 l-2 m-2 s-4 xs-7 tab-active">
                    Insured Information
                    </div>
                  <div className="tab-title col xl-2 l-2 m-2 s-4 xs-7 ">
                    Owner Information
                    </div>
                </div>
                <div className="">
                  <div className="header">
                    <h3 className="font-prulife">
                      Policy
                    </h3>
                  </div>
                  <div className="test">
                  <PrescreeningInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-prulife flex s-f-center xs-f-center">Processor Information</h1>
        <CsaClient />
        {/* <CsaPolicy /> */}
        {/* <CsaClient sampleData={this.state.sample}/> */}
        {/* <CProcessorPolicy /> */}
        {/* <CProcessorClient /> */}
        {/* <CardTable/> */}
        {/* <TaskCounter/> */}
      </div>
    );
  }
}

export default ProcessorContainer;

