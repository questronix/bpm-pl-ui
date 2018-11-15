import React, { Component } from 'react';
import { PolicyService, TaskService, DocumentService } from '../../services';
import TabHeader from '../policy/TabHeader';
import InsuredinformationNew from '../policy/InsuredinformationNew';
import TransactionNew from '../policy/TransactionNew';
import OwnerinformationNew from '../policy/OwnerinformationNew';
import Additional from '../policy/Additional';

class EditTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: localStorage.getItem('policy') || {
        guid: '',
        action: '',
        user: '',
        status: '',
        policyNo: '',
        agentNumber: '',
        agentLastName: '',
        agentFirstName: '',
        agentMiddleName: '',
        agentBranch: '',
        agentBranchDesc: '',
        agentStatus: '',
        nmaCode: '',
        nmaDesc: '',
        planCode: '',
        planDescription: '',
        policyStatus: '',
        policyStatusDesc: '',
        premiumStatus: '',
        premiumStatusDesc: '',
        riskCommencementDate: '',
        firstIssueDate: '',
        paidToDate: '',
        billFrequency: '',
        billFrequencyDesc: '',
        currency: '',
        sumInsured: '',
        currentPremium: '',
        payorWaiver: '',
        payorTerm: '',
        addressType: '',
        countryCode: '',
        address1: '',
        address2: '',
        address3: '',
        address4: '',
        address5: '',
        zipCode: '',
      },
      clients: [],
      transactionNumber: localStorage.getItem('transactionNumber') || null,
      transactionType: 1,
      currentTab: 1,
      docs: [],
      visitedTabStatus: 1,
      isVisitedTransaction: false,
      isVisitedInsured: false,
      isVisitedOwner: false,
      isVisitedAdditional: false,

      policyNumberSearch: '',
      polId: '',
      polNumber: '',
      isCompleteAndValid: false,
      type: 'csa',
      action: 'complete',
      info: {},
      policyInfo: {
        transType: 'Reinstatement',
        policyNumber: '0000123',
        transNumber: '123000',
        sumAssured: '000001111',
        createdDate: '10-12-18'
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
      client: {},
      Tabs: 0
    };
    this.handleTransactionChange = this.handleTransactionChange.bind(this);
    this.handlePolicySearchSubmit = this.handlePolicySearchSubmit.bind(this);
    this.handleTransactionCheckList = this.handleTransactionCheckList.bind(
      this
    );
    this.handleNewTaskSubmit = this.handleNewTaskSubmit.bind(this);
    this.handlePolicySearchSubmit = this.handlePolicySearchSubmit.bind(this);
    this.createTask = this.createTask.bind(this);
    this.handlePrevTab = this.handlePrevTab.bind(this);
    this.handleNextTab = this.handleNextTab.bind(this);
    // Test
    this.handleTabClick = this.handleTabClick.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      taskId: this.getQueryStringValue('id')
    });

    DocumentService.getDocumentByTransactionType(this.state.transactionType)
      .then((res) => {
        // TODO: FIX RESPONSE
        console.log('DOCSSSS', res.data.msg.result);
        const d = res.data.msg.result.reduce((prev, current) => [{ ...current, value: false }, ...prev], [])
        this.setState({ docs: d });
      }).catch((err) => {
        console.log(err);
      });

    // TODO: Validation to prevent Update of localstorage
    // if (!this.state.policy) {
    TaskService.getTaskDetails(this.getQueryStringValue('id'))
      .then(res => {
        console.log(res.data);
        const policy = res.data.variables.policy;
        const transactionNo = policy.transactionNo;
        // localStorage.setItem('transactionNumber', transactionNo);
        // localStorage.setItem('policy', policy.info);
        this.setState({
          policy: JSON.parse(policy.info),
          transactionNumber: transactionNo,
          clients: JSON.parse(policy.info).clients
        });
        console.log('CLIENTS:  ', this.state.policy.clients);
      })
      .finally(() => { });
    // }

    PolicyService.getClientIformationByid("81789377")
      .then((res) => {
        console.log('CLIENT INFO: ', res.data);
        this.setState({ client: res.data.data.result.data });
      }).finally(() => {

      });

    // TODO: REST call here
    this.setState({
      selectedTransaction: '1',
      transactionCheckList: [
        {
          id: 1,
          isChecked: false,
          label: 'Health Statement Form (HSF)'
        },
        {
          id: 2,
          isChecked: false,
          label: 'U/W routine requirements'
        },
        {
          id: 3,
          isChecked: false,
          label: 'Payment of Premium Arrears'
        },
        {
          id: 4,
          isChecked: false,
          label: 'Specimen Signature Form (if applicable)'
        },
        {
          id: 5,
          isChecked: false,
          label: 'Valid Government Issued ID (if applicable)'
        },
        {
          id: 6,
          isChecked: false,
          label: 'Valid Non-Government Issued ID (if applicable)'
        }
      ]
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handlePolicySearchSubmit(this.state.policyNumber);
  }

  handleInputChange(event) {
    const value = event.target.value;

    this.setState({
      policyNumber: value
    });
  }

  handlePolicySearchSubmit(policyNumber) {
    this.setState({
      policyNumberSearch: policyNumber,
      isSearching: true,
      isError: false
    });
    PolicyService.getPolicyInformationByID(policyNumber)
      .then(res => {
        console.log(res.data.data.result.data);
        if (res.data.data.result.data) {
          this.setState({
            policy: res.data.data.result.data
          });
        }
      })
      .catch(err => {
        this.setState({
          isSearching: false,
          isError: true
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
    if (this.state.Tabs == 0) {
      this.getClientInfo();
    }
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
      action: 'complete'
    };

    console.log('formData', formData);

    TaskService.submitTask(this.getQueryStringValue('id'), formData)
      .then(res => {
        console.log(res.data.error);
        if (!res.data.error) {
          alert('Task Submitted!');
          window.location.href = '/tasks';
        } else {
          alert(res.data.error);
        }
        console.log(res.data);
      })
      .finally(() => {
        // console.log('CREATE TASK ERROR:', err);
      });
  }

  handlePolicySearchSubmit(policyNumber) {
    this.setState({
      policyNumberSearch: policyNumber,
      isSearching: true,
      isError: false
    });
    PolicyService.getPolicyInformationByID({ policyNumber })
      .then(res => {
        let policy = this.state.policy;
        console.log('before', policy);
        let rp = res.data.data.policy;
        let toupdate = Object.keys(rp);
        toupdate.forEach(elem => {
          if (typeof rp[elem] != 'undefined') {
            policy[elem] = rp[elem];
          }
        });
        console.log('after', policy);
        this.setState({
          policy: policy,
          insured: res.data.data.insured,
          isSearching: false,
          polNumber: policy.number,
          info: { policy: res.data.data.policy, insured: res.data.data.insured }
        });
        console.log('SEARCH INFO: ', this.state.info);
      })
      .catch(err => {
        this.setState({
          isSearching: false,
          isError: true
        });
        console.log('Error: ', err);
      });
  }

  handleTransactionChange(transactionType) {
    this.setState({ selectedTransaction: transactionType });
    let t_list;

    if (transactionType === '1') {
      t_list = [
        {
          id: 1,
          isChecked: false,
          label: 'Health Statement Form (HSF)'
        },
        {
          id: 2,
          isChecked: false,
          label: 'U/W routine requirements'
        },
        {
          id: 3,
          isChecked: false,
          label: 'Payment of Premium Arrears'
        },
        {
          id: 4,
          isChecked: false,
          label: 'Specimen Signature Form (if applicable)'
        },
        {
          id: 5,
          isChecked: false,
          label: 'Valid Government Issued ID (if applicable)'
        },
        {
          id: 6,
          isChecked: false,
          label: 'Valid Non-Government Issued ID (if applicable)'
        }
      ];
    } else if (transactionType === '2') {
      t_list = [
        {
          id: 1,
          isChecked: false,
          label: 'Health Statement Form (HSF)'
        },
        {
          id: 2,
          isChecked: false,
          label: 'Health Statement Form (HSF)'
        },
        {
          id: 3,
          isChecked: false,
          label: 'Specimen Signature Form (if applicable)'
        },
        {
          id: 4,
          isChecked: false,
          label: 'Valid Government Issued ID (if applicable)'
        },
        {
          id: 5,
          isChecked: false,
          label: 'Valid Non-Government Issued ID (if applicable)'
        }
      ];
    } else if (transactionType === '3') {
      t_list = [
        {
          id: 1,
          isChecked: false,
          label: 'Discretionary Waiver Form'
        },
        {
          id: 2,
          isChecked: false,
          label: 'Payment of reinstatement cost'
        }
      ];
    }

    this.setState({ transactionCheckList: t_list });
  }

  handleTransactionCheckList(updatedTransactionCheckList) {
    this.setState({ transactionCheckList: updatedTransactionCheckList });
  }

  handleNextTab() {
    const { currentTab } = this.state;
    if (currentTab + 1 > 4) return;
    this.setState({ currentTab: currentTab + 1 });
    this.updateVistedTab(currentTab);
  }

  handlePrevTab() {
    const { currentTab } = this.state;
    if (currentTab - 1 < 1) return;
    this.setState({ currentTab: currentTab - 1 });
    this.updateVistedTab(currentTab);
  }

  handleSkipTab(tabPage) {
    const {
      isVisitedTransaction,
      isVisitedOwner,
      isVisitedInsured,
      isVisitedAdditional
    } = this.state;
    if (
      tabPage > this.state.visitedTabStatus &&
      (!isVisitedTransaction ||
        !isVisitedOwner ||
        !isVisitedInsured ||
        !isVisitedAdditional)
    )
      return;
    this.setState({ currentTab: tabPage });
  }

  updateVistedTab(tabPage) {
    if (tabPage === 1) this.setState({ isVisitedTransaction: true });
    if (tabPage === 2) this.setState({ isVisitedInsured: true });
    if (tabPage === 3) this.setState({ isVisitedOwner: true });
    if (tabPage === 4) this.setState({ isVisitedAdditional: true });
    this.setState({ visitedTabStatus: tabPage });
  }

  getClientInfo(id) {
    PolicyService.getClientIformationByid(id)
      .then(res => {
        if (res.data.data.result.data) {
          this.setState({
            client: res.data.data.result.data
          });
        }
        console.log(res.data);
      })
      .catch(err => {
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
    TaskService.createNewTask()
      .then(res => {
        window.location.href = `/tasks`;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getQueryStringValue(key) {
    return decodeURIComponent(
      window.location.search.replace(
        new RegExp(
          '^(?:.*[&\\?]' +
          encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') +
          '(?:\\=([^&]*))?)?.*$',
          'i'
        ),
        '$1'
      )
    );
  }

  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col no-padding xl-2 l-2 m-3 s-3 xs-4" />
        <div className="margin-top-70 col xl-9 l-9 m-8 s-8 xs-7 no-padding margin-auto">
          <div className="">
            <h1 className="text-normal">
              New Transaction
          </h1>
            <div className="flex-container flex-wrap col no-padding flex f-justify-space-between">
              <div className="flex f-column transaction-header">
                <div className="flex">
                  <p className="">
                    Transaction Number  :
                  </p>
                  <p className="font-prulife ">
                    {this.state.transactionNumber}
                  </p>
                </div>
                <div className="flex">
                  <p className="">
                    Transaction Type	:
                  </p>
                  <p className="font-prulife ">
                    Reinstatement - Updating
                </p>
                </div>
              </div>
              <div className="flex f-column transaction-header">
                <div className="flex">
                  <p className="">
                    Created Date	:
                  </p>
                  <p className="font-prulife ">
                    11/13/2018
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="tab-title-container">
              <div
                onClick={() => this.handleSkipTab(1)}
                className={this.state.currentTab === 1 || (this.state.isVisitedTransaction & this.state.currentTab > 1) ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  {this.state.isVisitedTransaction ? <span className="fa fa-check" /> : 1}
                </h4>
                <h4>Transaction Selection</h4><span className="white" /><span className="gray" />
              </div>
              <div
                onClick={() => this.handleSkipTab(2)}
                className={this.state.currentTab === 2 || (this.state.isVisitedInsured & this.state.currentTab > 2) ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  {this.state.isVisitedInsured ? <span className="fa fa-check" /> : 2}
                </h4>
                <h4>Insured Details</h4><span className="white" /><span className="gray" />
              </div>
              <div
                onClick={() => this.handleSkipTab(3)}
                className={this.state.currentTab === 3 || (this.state.isVisitedOwner & this.state.currentTab > 3) ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  {this.state.isVisitedOwner ? <span className="fa fa-check" /> : 3}
                </h4>
                <h4>Owner Details</h4><span className="white" /><span className="gray" />
              </div>
              <div
                onClick={() => this.handleSkipTab(4)}
                className={this.state.currentTab === 4 || (this.state.isVisitedAdditional & this.state.currentTab > 4) ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  {this.state.isVisitedAdditional ? <span className="fa fa-check" /> : 4}
                </h4>
                <h4>Additional Details</h4>
              </div>
            </div>
            <TabHeader policy={this.state.policy} clients={this.state.clients} />
            <div className="box-body">
              {this.state.currentTab === 1 && <TransactionNew transactionNumber={this.state.transactionNumber} docs={this.state.docs} />}
              {this.state.currentTab === 2 &&
                <div className="container insured-details">
                  <div className="col no-padding xl-12 flex f-justify-space-between">
                    <h2 className="no-margin">
                      Insured Details
                    </h2>
                    <p>
                      <span className="fa fa-pencil-alt font-prulife"></span> - Editable field
                    </p>
                  </div>
                  <InsuredinformationNew client={this.state.client} />
                </div>}
              {this.state.currentTab === 3 &&
                <div className="container insured-details">
                  <div className="col no-padding xl-12 flex f-justify-space-between">
                    <h2 className="no-margin">
                      Owner Details
                    </h2>
                    <p>
                      <span className="fa fa-pencil-alt font-prulife"></span> - Editable field
                    </p>
                  </div>
                  <OwnerinformationNew client={this.state.client} />
                </div>}
              {this.state.currentTab === 4 && <Additional />}
              <div className="flex f-justify-space-between container">
                <button className="btn prulife" accessKey="," onClick={this.handlePrevTab}>
                  <span className="fa fa-chevron-left" />&nbsp; BACK
              </button>
                <button className="btn prulife" accessKey="." onClick={this.handleNextTab}>
                  PROCEED &nbsp; <span className="fa fa-chevron-right" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTaskContainer;
