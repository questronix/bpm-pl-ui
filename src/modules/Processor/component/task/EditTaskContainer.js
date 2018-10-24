import React, { Component } from 'react';
import CsaClient from '../processor/CsaClient';
import PrescreeningInfo from '../processor/PreScreening';
import CardImg from '../../../../shared/component/Widgets/CardImg';
import { FileNetService } from '../../services/';
import { TaskService } from '../../../../services/index';

class EditTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPage: 0,
      // taskId: null,
      sample: 'sample',
      doc: '',
      task: {},
      insuredInfo: {
        policy: {
          number: '00000001',
          sumAssured: '1,000,000.00',
          productType: 'type',
          fatca: false,
        },
        client: {
          type: 'type',
          clientTagging: 'tagging',
          attainedAge: 45,
          soi: 'yeah',
          mid: false,
          dowJones: false
        }
      },
      processInfo: {
        policy: {
          reinsurance: '00000001',
          amountInSuspense: '1',
          currentRating: 'type',
          ntuValidation: 'a',
          claimHistory: false
        },
        client: {
          crcScoring: 'type',
          backPremiums: 'tagging',
          premiums: 23,
        }
      },
    };
    this.handleClick = this.handleClick.bind(this);

      
  }

  handleClick(e){
    this.setState({
      tabPage: e
    });
    this.props.onTabClick(e);
  }

  componentDidMount() {
    console.log('sample')
    this.getApplicationDocs("181234567");

    const user = JSON.parse(sessionStorage.getItem('user_info'));
    this.getTaskInfo(user.id);
  }

  getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

  getTaskInfo(userId) {
    TaskService.getTaskDetails(this.getQueryStringValue("id"), userId).then((res) => {
      console.log(res.data);
      // const variables = res.data.variables;
      this.setState({
        task: res.data
      });
    }).catch((err) => {
      console.log('CREATE TASK ERROR:', err);
    });
  }

  getApplicationDocs(appNo) {
    const d = {
      "result": {
        "data": {
          "applicationNumber": `${appNo}`,
          "docId": "2"
        }
      }
    };

    FileNetService.getDocs(d).then((res) => {
      console.log(res);
      this.setState({
        doc: res.data
      })
    }).finally(() => {

    });
  }

  handleSubmit() {
    const formData = {
      "input": {
        "dowjones": true,
        "mid": true,
        "fatca": true,
        "claimhistory": true,
        "processorInfo": JSON.stringify(this.state.processInfo)
      },
      "hit": true,
      "beyondAuthority": true,
      "type": "processor",
      "action": "complete"
    }

    const user = JSON.parse(sessionStorage.getItem('user_info'));
    TaskService.submitTask(this.getQueryStringValue("id"), user.id, formData).then((res) => {
      console.log(res.data.error);
      if (!res.data.error) {
        alert('Task Successfully Submitted!');
        window.location.href = "/processor";
      }
      else {
        alert(res.data.error);
      }
      console.log(res.data);
    }).finally(() => {
      // console.log('CREATE TASK ERROR:', err);
    });
  }


  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col xl-2 l-2 m-2 s-hide xs-hide invisible">
          made by questronix
        </div>
        <div className="col xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <h1 className="font-prulife flex s-f-center xs-f-center">Prescreening Information</h1>
          <div className="flex-container flex-wrap">
            <div className="col">
              <div className="tabs col xl-12 l-12 m-12 s-12 xs-12">
                <div className="tab-container flex-container no-padding col xl-12">
                
                <div className={this.state.tabPage == 0 ? "tab-title col xl-2 l-2 m-2 s-4 xs-7 tab-active" : "tab-title col xl-2 l-2 m-2 s-4 xs-7"}>
                      <a name = "insured info" onClick={()=>{this.handleClick(0)}}>
                      Insured Information</a>
                    </div>
                    <div className={this.state.tabPage == 1 ? "tab-title col xl-2 l-2 m-2 s-4 xs-7 tab-active" :"tab-title col xl-2 l-2 m-2 s-4 xs-7 "}>
                      <a name = "owner info" onClick={()=>{this.handleClick(1)}}>
                      Owner Information</a>
                    </div>
                    <div className={this.state.tabPage == 2 ? "tab-title col xl-2 l-2 m-2 s-4 xs-7 tab-active" : "tab-title col xl-2 l-2 m-2 s-4 xs-7"}>
                      <a name = "owner info" onClick={()=>{this.handleClick(2)}}>
                      Document</a>
                    </div>
                </div>
                <div className="">
                  <div className="header">
                    <h3 className="font-prulife">
                      Policy
                    </h3>
                  </div>
                  <PrescreeningInfo insuredInfo={this.state.insuredInfo} />
                  {this.state.doc ? (<CardImg class="xl-4" docsId={1} docs={this.state.doc} docLabel="Application Document" docDate="01-01-01"/>) :'Getting application documents..'}
                </div>
              </div>
            </div>
          </div>
          <h1 className="font-prulife flex s-f-center xs-f-center">Processor Information</h1>
          <CsaClient processInfo={this.state.processInfo} />
          <div className="col xl-12 flex f-end">
            <button className="btn prulife" onClick={this.handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTaskContainer;

