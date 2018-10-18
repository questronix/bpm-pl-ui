import React, { Component, Fragment } from 'react'
import SearchPolicyForm from './SearchPolicyForm';
import PolicyInformation from './PolicyInformation';
import Fatca from './Fatca';
import Transaction from './Transaction';
import ErrorAlert from '../../../../shared/component/alerts/Error';
import PageLoading from '../../../../shared/component/loadings/PageLoading';
import { PolicyService, TaskService } from '../../services';

class Policy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyNumberSearch: '',
      polId: '',
      polNumber: '',
      isCompleteAndValid: false,
      type: 'csa',
      action: 'complete',
      info: {},
      policy: {
        "id": '',
        "number": '',
        "status": '',
        "agentCode": '',
        "agentName": '',
        "branch": '',
        "nma": '',
        "planDesc": '',
        "planCurrency": '',
        "contractStatus": '',
        "premiumStatus": '',
        "sumAssured": 0,
        "rcd": '',
        "firstIssueDate": '',
        "salutation": '',
        "firstName": '',
        "lastName": '',
        "gender": '',
        "occupation": '',
        "hrc": '',
        "vip": '',
        "str": '',
        "nationality": '',
        "dateOfBirth": '',
        "attainedAge": '',
        "civilStatus": '',
        "telNumber": '',
        "mobileNumber": '',
        "tinOrSss": '',
        "email": '',
      },
      insured: {},
      selectedTransaction: '',
      transactionCheckList: [],
      statementOfInsurability: false,
      isSearching: false,
      isError: false,
      isSubmitting: false,
      isSubmitError: false,
      taskId: '',
    }
    this.handleTransactionChange = this.handleTransactionChange.bind(this);
    this.handlePolicySearchSubmit = this.handlePolicySearchSubmit.bind(this);
    this.handleTransactionCheckList = this.handleTransactionCheckList.bind(this);
    this.handleNewTaskSubmit = this.handleNewTaskSubmit.bind(this);
  }

  componentDidMount() {
    // Init default values to Transaction on page load.
    

    this.setState({
      taskId: this.getQueryStringValue("id")
    });

    const user = JSON.parse(sessionStorage.getItem('user_info'));
    console.log(this.state.taskId);
    TaskService.getTaskDetails(this.getQueryStringValue("id"), user.id).then((res) => {
      // console.log(res.data);
      // console.log(res.data.id);
      // this.setState({
        // policy: res.data.policy
        // let toupdate = Object.keys(res.data.policy);
        // let policy = this.state.policy;
        // toupdate.forEach(elem=>{
        //   if(typeof toupdate[elem] != "undefined"){
        //     policy[elem] = toupdate[elem];
        //   }
        // }); 
        console.log(res.data);
        console.log(variables);
        const variables = res.data.variables;
        this.setState({
          policy : res.data.variables,
          polId: variables.policy.id,
          polNumber: variables.policy.number,
        });
      // });
    }).catch((err) => {
      console.log('CREATE TASK ERROR:', err);
    });

    // TODO: REST call here
    this.setState({
      selectedTransaction: '1',
      transactionCheckList: [
        {
          id: 1,
          isChecked: false,
          label: 'Health Statement Form (HSF)',
        },
        {
          id: 2,
          isChecked: false,
          label: 'U/W routine requirements',
        },
        {
          id: 3,
          isChecked: false,
          label: 'Payment of Premium Arrears',
        },
        {
          id: 4,
          isChecked: false,
          label: 'Specimen Signature Form (if applicable)',
        },
        {
          id: 5,
          isChecked: false,
          label: 'Valid Government Issued ID (if applicable)',
        },
        {
          id: 6,
          isChecked: false,
          label: 'Valid Non-Government Issued ID (if applicable)',
        },
      ]
    });
  }

  getQueryStringValue (key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }  

  handleNewTaskSubmit() {

    let policy = this.state.policy;
    let policyKeys = Object.keys(this.state.policy);

    // Filtering out number, id, appNo, status, createdBy and info field
    // let infoKeys = policyKeys.filter(info => info != 'number' && 
    //   info != 'id' && 
    //   info != 'appNo' && 
    //   info != 'status' && 
    //   info !='createdBy' && 
    //   info != 'info');
    // let info = {};
    // infoKeys.forEach(elem=> {
    //   info[elem] = policy[elem];
    // })

    // const formData = {
    //   id: this.state.policy.id,
    //   number: this.state.policy.number,
    //   appNo: this.state.policy.appNo,
    //   createdBy: this.state.policy.createdBy,
    //   status: false, // temporary
    //   info: JSON.stringify(info)
    // }
    const formData = {
      policy: {
        id: this.state.polId,
        number: this.state.polNumber,
        info: JSON.stringify(this.state.info)
      },
      isCompleteAndValid: true,
      type: 'csa',
      action: 'complete',
      
    }

    // console.log('policyKeys', policyKeys);
    // console.log('infoKeys', infoKeys);
    // console.log('info', info);
    console.log('formData', formData);

    const user = JSON.parse(sessionStorage.getItem('user_info'));
    TaskService.submitTask(this.getQueryStringValue("id"), user.id, formData).then((res) => {
      console.log(res.data.error);
      if (!res.data.error) {
        alert('Task Submitted!');
        window.location.href="/tasks"; 
      }
      else {
        alert(res.data.error);
      }
      console.log(res.data);
    }).finally(() => {
      // console.log('CREATE TASK ERROR:', err);
    });
  }

  handlePolicySearchSubmit(policyNumber) {

    this.setState({
      policyNumberSearch: policyNumber,
      isSearching: true,
      isError: false,
    });
    PolicyService.getPolicyInformationByID({ policyNumber }).then((res) => {
      
      let policy = this.state.policy;
      console.log('before', policy);
      let rp = res.data.data.policy;
      let toupdate = Object.keys(rp);
      toupdate.forEach(elem=>{
        if(typeof rp[elem] != "undefined"){
          policy[elem] = rp[elem];
        }
      });
      console.log('after', policy);
      this.setState({
        policy: policy,
        insured: res.data.data.insured,
        isSearching: false,
        polNumber: policy.number,
        info: { policy: res.data.data.policy, insured: res.data.data.insured },
      });
      console.log('SEARCH INFO: ', this.state.info);

    }).catch((err) => {
      this.setState({
        isSearching: false,
        isError: true,
      });
      console.log('Error: ', err);
    });

    // TODO: REST calling here
    // if (policyNumber === '00000001') {
    //   this.setState({
    //     policy: {
    //       number: '00000001',
    //       agentCode: 'ROMEO CAMILLE ABION',
    //       agentName: 'JADEITE',
    //       branch: 'RAMIREZ, DANIVIC JESUS N.',
    //       nma: 'RAMIREZ, DANIVIC JESUS N.',
    //       planDesc: 'PLPP - PRULINK ASSURANCE ACCOUNT PLUS',
    //       planCurrency: 'PHP',
    //       contractStatus: 'IN FORCE',
    //       premiumStatus: 'PREMIUM PAYING',
    //       sumAssured: '1,000,000.00',
    //       rcd: '05-OCT-2012',
    //       firstIssueDate: '05-OCT-2012',
    //     },
    //     insured: {
    //       salutation: 'MR',
    //       firstName: 'RAMIREZ',
    //       lastName: 'DANIVIC JESUS N.',
    //       gender: 'MALE',
    //       occupation: 'OTHER OCCUPATION',
    //       hrc: 'No value',
    //       vip: 'No value',
    //       str: 'No value',
    //       nationality: 'PHILIPPINES',
    //       dateOfBirth: '19-SEP-1973',
    //       attainedAge: 'SINGLE',
    //       civilStatus: 'SINGLE',
    //       telNumber: '09171234567',
    //       mobileNumber: '09291234567',
    //       tinOrSss: 'No value',
    //       email: 'sample@email.com', 
    //     }
    //   })
    // }
  }

  handleTransactionChange(transactionType) {
    this.setState({ selectedTransaction: transactionType });
    let t_list;

    if (transactionType === '1') {
      t_list = [
        {
          id: 1,
          isChecked: false,
          label: 'Health Statement Form (HSF)',
        },
        {
          id: 2,
          isChecked: false,
          label: 'U/W routine requirements',
        },
        {
          id: 3,
          isChecked: false,
          label: 'Payment of Premium Arrears',
        },
        {
          id: 4,
          isChecked: false,
          label: 'Specimen Signature Form (if applicable)',
        },
        {
          id: 5,
          isChecked: false,
          label: 'Valid Government Issued ID (if applicable)',
        },
        {
          id: 6,
          isChecked: false,
          label: 'Valid Non-Government Issued ID (if applicable)',
        }
      ];
    }
    else if (transactionType === '2') {
      t_list = [
        {
          id: 1,
          isChecked: false,
          label: 'Health Statement Form (HSF)',
        },
        {
          id: 2,
          isChecked: false,
          label: 'Health Statement Form (HSF)',
        },
        {
          id: 3,
          isChecked: false,
          label: 'Specimen Signature Form (if applicable)',
        },
        {
          id: 4,
          isChecked: false,
          label: 'Valid Government Issued ID (if applicable)',
        },
        {
          id: 5,
          isChecked: false,
          label: 'Valid Non-Government Issued ID (if applicable)',
        },
      ];
    }
    else if (transactionType === '3') {
      t_list = [
        {
          id: 1,
          isChecked: false,
          label: 'Discretionary Waiver Form',
        },
        {
          id: 2,
          isChecked: false,
          label: 'Payment of reinstatement cost',
        },
      ];
    }

    this.setState({ transactionCheckList: t_list });
  }

  handleTransactionCheckList(updatedTransactionCheckList) {
    this.setState({ transactionCheckList: updatedTransactionCheckList });
  }

  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col xl-1 l-1 m-1 s-hide xs-hide invisible">
          made by questronix
        </div>
        <div className="col xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <h1 className="font-prulife flex s-f-center xs-f-center">Policy Information</h1>
          <SearchPolicyForm
            onPolicySearchSubmit={this.handlePolicySearchSubmit}
            isSearching={this.state.isSearching} />
          {this.state.isError && <div className="flex-container flex-wrap"><div className="col"><ErrorAlert>Policy information not found</ErrorAlert></div></div>}
          {this.state.isSearching ?
            (<Fragment>
              <PageLoading />

            </Fragment>) :
            (<Fragment>
              <PolicyInformation policy={this.state.policy} />
              <Transaction
                policy={this.state.policy}
                transactionCheckList={this.state.transactionCheckList}
                onTransactionCheckListChange={this.handleTransactionCheckList}
                onTransactionChange={this.handleTransactionChange} />
              <Fatca insured={this.state.insured} />
              <div className="flex-container">
                <div className="col xl-12 l-12 m-2 s-12 xs-12  flex xl-f-end l-f-end m-f-end s-f-center xs-f-center">
                  <input className="btn prulife col xl-1 l-1 m-12 s-12 xs-12" type="button" value="Save" onClick={this.handleNewTaskSubmit}/>
                </div>
              </div>
            </Fragment>)}
        </div>
      </div>
    );
  }
}

export default Policy;