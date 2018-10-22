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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.getApplicationDocs("12345678");

    const user = JSON.parse(sessionStorage.getItem('user_info'));
    this.getTaskInfo(user.id);
  }

  getQueryStringValue (key) {  
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
    FileNetService.getDocs().then((res) => {
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
        "type":"processor",
        "action": "complete"
    }

    const user = JSON.parse(sessionStorage.getItem('user_info'));
    TaskService.submitTask(this.getQueryStringValue("id"), user.id, formData).then((res) => {
      console.log(res.data.error);
      if (!res.data.error) {
        alert('Task Successfully Submitted!');
        window.location.href="/processor"; 
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
          <CardImg class="xl-4" docsId={1} docs={this.state.doc} docLabel="Application Document" docDate="01-01-01"></CardImg>
          <PrescreeningInfo insuredInfo={this.state.insuredInfo} />
          <h1 className="font-prulife flex s-f-center xs-f-center">Processor Information</h1>
          <CsaClient processInfo={this.state.processInfo}/>
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

