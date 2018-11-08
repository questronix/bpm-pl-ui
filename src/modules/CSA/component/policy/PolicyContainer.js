import React, { Component, Fragment } from 'react'
import SearchPolicyForm from './SearchPolicyForm';
import PolicyInformation from './PolicyInformation';
import Fatca from './Fatca';
import Transaction from './Transaction';
import ErrorAlert from '../../../../shared/component/alerts/Error';
import PageLoading from '../../../../shared/component/loadings/PageLoading';
import { PolicyService, TaskService } from '../../services';
import Footer from '../../../../shared/component/footer/Footer';
import TabHeader from './TabHeader';
import InsuredinformationNew from './InsuredinformationNew';
import TransactionNew from './TransactionNew';
import OwnerinformationNew from './OwnerinformationNew';

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
      tasks: [],
      taskHistory: [],
      policyNumber: '',
      policy: {},
      client:{},
      Tabs: 0,
    }
    this.handleTransactionChange = this.handleTransactionChange.bind(this);
    this.handlePolicySearchSubmit = this.handlePolicySearchSubmit.bind(this);
    this.handleTransactionCheckList = this.handleTransactionCheckList.bind(this);
    this.handleNewTaskSubmit = this.handleNewTaskSubmit.bind(this);
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


  componentDidMount() {
    // Init default values to Transaction on page load.
    
    this.setState({
      taskId: this.getQueryStringValue("id")
    });

    TaskService.getTaskDetails(this.getQueryStringValue("id")).then((res) => {
        console.log(res.data);
        console.log(variables);
        const variables = res.data.variables;
        this.setState({
          policy : res.data.variables,
          polId: variables.policy.id,
          polNumber: variables.policy.number,
        });
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

    console.log('formData', formData);

    TaskService.submitTask(this.getQueryStringValue("id"), formData).then((res) => {
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
      <div>
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
              Insured Details
              </h4>
          </a>
          <span class="white"></span><span class="gray"></span>
        </div>
        <div className={this.state.Tabs == 2 ? "tab-title active" : "tab-title"}>
          <h4 className="circle">
            3
            </h4>
          <a onClick={() => { this.handleTabClick(2) }}>
          <span class="white"></span><span class="gray"></span>
            <h4>
              Owner Details
              </h4>
          </a>
        </div>
        <div className={this.state.Tabs == 3 ? "tab-title active" : "tab-title"}>
          <h4 className="circle">
            4
            </h4>
          <a onClick={() => { this.handleTabClick(3) }}>
            <h4>
              Additional Prolicy info
              </h4>
          </a>
          <span class="white"></span><span class="gray"></span>
        </div>
        
      </div>
      <TabHeader policy={this.state.policy}/>
      <div className="box-body">

        {/* this is for tab1 */}
        {this.state.Tabs == 0 ?
          <div>
            <TransactionNew />
            <div className="flex f-end container">
              <a href="#" className="btn purple" onClick={this.handleTabClick}>
                Insured Details
                  </a>
            </div>
          </div>
          : ""}
        {/* this is for tab3 */}
        {this.state.Tabs == 3 ?
          <div>
            <div className="flex f-center">
              {/* <FatcaNew/> */}
            </div>
            <div className="flex f-justify-space-between container">
              <a href="#" className="btn bright-blue" onClick={this.decrement}>
              Insured Details                   </a>
              <a href="#" className="btn prulife" onClick={this.handleTabClick}>
                Submit
               </a>
            </div>
          </div> : ""}

        {/* this is for tab2 */}
        {this.state.Tabs == 1 ?
          <div>
            <InsuredinformationNew client={this.state.client}/>
            <div className="flex f-justify-space-between container">
              <a href="#" className="btn purple" onClick={this.decrement}>
                Transaction Selection
               </a>
              <a href="#" className="btn prulife" onClick={this.handleTabClick}>
                Owner Details
               </a>
            </div>
          </div> : ""}
        {/* this is for tab4 */}
        {this.state.Tabs == 2 ?
          <div>
            <OwnerinformationNew client={this.state.client}/>
            <div className="flex f-justify-space-between container">
              <a href="#" className="btn grass-green" onClick={this.decrement}>
                Insured Details
               </a>
              <a href="#" className="btn prulife" onClick={this.handleTabClick}>
                Additional Policy info
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

export default Policy;