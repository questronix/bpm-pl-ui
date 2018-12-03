import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

import { PolicyService, TaskService, DocumentService, QuestionService } from '../../services';
import { questionUtils } from '../../../../utils';

import TabHeader from '../policy/TabHeader';
import InsuredinformationNew from '../policy/InsuredinformationNew';
import TransactionNew from '../policy/TransactionNew';
import OwnerinformationNew from '../policy/OwnerinformationNew';
import Additional from '../policy/Additional';
import ModalOkCancel from '../../../../shared/component/modal/ModalOkCancel';

class EditTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      transactionNumber: '',
      hasChangesMade: true,
      showSaveTransactionModal: false,
      showBeforeLeaveModal: false,
      
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
      clients: [], // List of clients in Policy Search
      task: null,
      
      // CONDITIONS
      isSameInsuredAndOwner: false,
      isPtrOrPwAvailed: false,
      isAgentStatusActive: false,

      // TRANSACTION SELECTION STATE
      transactionType: 1,
      subTransactionType: 1,
      docs: [],                     // Temporary placeholder for all documentlist
      selectedDocs: [],             // Selected document list that is needed to display
      missingDocs: [],
      isSignatureVerified: null,
      withPayment: null,
      renderError: false,
      showReqModal: false,
      reqMemoPDF: '',

      // TAB NAVIGATION STATE //
      currentTab: 1,
      visitedTabStatus: 1,
      isVisitedTransaction: false,
      isVisitedInsured: false,
      isVisitedOwner: false,
      isVisitedAdditional: false,
      isDisabledProceed: true,

      // INSURED TAB
      insured: null,
      isChangeInOccupation: null,
      isChangeInAddress: null,
      newOccupation:'',
      email:'',
      mobileNum: '',
      telNum: '',
      months: '',
      isSOI: null,
      isPregnant: null,
      additionalFMA: false,
      additionalMUR: false,
      additionalPregnancyQuestion: false,

      // OWNER TAB
      owner: null,
      monthsOwner: '',
      newOccupationOwner: '',
      emailOwner:'',
      mobileNumOwner: '',
      telNumOwner: '',
      isChangeInOccupationOwner: null,
      isChangeInAddressOwner: null,
      isSOIOwner: null,
      isPregnantOwner: null,
      additionalFMAOwner: null,
      additionalMUROwner: null,
      additionalPregnancyQuestionOwner: false,

      // ADDITIONAL TAB
      isRelativeOfAgent: null,
      isFatcaTagging: null,
      withReinstatementAgent: null,
      withCosal: null,
      completeFatca: null,
      additionalDateOfSigning: null,
      dateOfSigning: '',
      orNum: '',
      isBeyondLimit: false,
      isPlaceOfSigning: null,

      client: {},

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
      Tabs: 0,

      user: JSON.parse(sessionStorage.getItem('user_info'))
    };

    this.handlePolicySearchSubmit = this.handlePolicySearchSubmit.bind(this);
    this.handleTransactionCheckList = this.handleTransactionCheckList.bind(this);
    this.handleNewTaskSubmit = this.handleNewTaskSubmit.bind(this);
    this.handlePolicySearchSubmit = this.handlePolicySearchSubmit.bind(this);
    this.createTask = this.createTask.bind(this);
    
    // Tab Events
    this.handlePrevTab = this.handlePrevTab.bind(this);
    this.handleNextTab = this.handleNextTab.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    
    // Transaction Events
    this.handleTransactionTypeChange = this.handleTransactionTypeChange.bind(this);
    this.handleSubTransactionTypeChange = this.handleSubTransactionTypeChange.bind(this);
    this.handleDocSelect = this.handleDocSelect.bind(this);
    this.handleYesNoSelect = this.handleYesNoSelect.bind(this);
    this.handleYesNoSelectOwner = this.handleYesNoSelectOwner.bind(this);
    this.generatePdfMemo = this.generatePdfMemo.bind(this);

    // Insured Tab Events
    this.handleOnCheckChange = this.handleOnCheckChange.bind(this);

    // Additional Info Tab Events
    this.handleDateChange = this.handleDateChange.bind(this);
    
    // Test
    this.decrement = this.decrement.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePregnant = this.handlePregnant.bind(this);
    this.notPregnant = this.notPregnant.bind(this);
    this.handleChangeInOccupation = this.handleChangeInOccupation.bind(this);
    this.handleChangeInOccupationOwner = this.handleChangeInOccupationOwner.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleChangeInOccupation(){
    this.setState({
      isChangeInOccupation: true
    })
  }

  handleChangeInOccupationOwner(){
    this.setState({
      isChangeInOccupationOwner: true
    })
  }

  handlePregnant(){
    this.setState({
      isPregnant: true
    })
  }

  notPregnant(){
    this.setState({
      isPregnant: false
    })
  }

  filterSelectedDocs(type) {
    console.log('updated');
    const subTrans = this.state.docs.data.filter(
      doc => doc.subTransactionId == type
    )[0].data.map(doc => {
      return {
        ...doc,
        value: doc.checked
      };
    });
    console.log('subTransDoc', subTrans);
    this.setState({ selectedDocs: subTrans });

    const isAllChecked = subTrans.filter(doc => doc.isMandatory).every(doc => doc.value);

    if (isAllChecked) {
      this.setState({ isDisabledProceed: false });
    }
    else {
      this.setState({ isDisabledProceed: true });
    }
  }

  mapQuestionToState(questions) {
    const isSOI = questionUtils.findAnswer(1, questions);
    // const withPregnancy = questionUtils.findAnswer(1, questions);
    const withPayment = questionUtils.findAnswer(5, questions);
    const suspense = questionUtils.findAnswer(6, questions);
    const isSignatureVerified = questionUtils.findAnswer(7, questions);
    const isFatcaTagging = questionUtils.findAnswer(8, questions);
    const isRelativeOfAgent = questionUtils.findAnswer(9, questions);
    const withReinstatementAgent = questionUtils.findAnswer(10, questions);
    const additionalDateOfSigning = questionUtils.findAnswer(11, questions);
    // const req = questionUtils.findAnswer(12, questions);
    // const withCosal = questionUtils.findAnswer(13, questions);

    this.setState({ 
      questions, 
      isRelativeOfAgent, 
      withReinstatementAgent, 
      withPayment,
      isSignatureVerified
      // withCosal,
      // suspense,
      // orNum,
      // dateOfSigning
    });
  }

  componentDidMount() {
    // window.addEventListener('beforeunload', this.handleLeavePage);

    // TODO: Validation to prevent Update of localstorage
    // if (!this.state.policy) {
    TaskService.getTaskDetails(this.getQueryStringValue('id'))
      .then(res => {

        console.log(res.data);
        const transactionNo = res.data.variables.transactionNumber;
        const policyNo = res.data.variables.policyNo;

        QuestionService.getQuestionsByTransactionID({ transactionNo: res.data.variables.transactionNumber })
        .then((res) => {
          console.log('QUESTIONS', res.data.result);
          const flatQuestions = this.flatten(res.data.result);
          this.mapQuestionToState(res.data.result);
        }).finally(() => {

        });

        PolicyService.getPolicyInformationByID(policyNo)
          .then(res => {
            if (res.status == 200) {
              const policy = res.data.result;
              const clients = res.data.result.clients;
              this.setState({
                policy: policy,
                months: '',
                clients: clients,
                isAgentStatusActive: policy.agentStatus == "ACTIVE" ? true: false,
                showComponent: true
              });
              this.checkIsSameInsuredAndOwner();
              this.checkPtrOrPwAvailed();
            }
            else if (res.status == 404) {
              alert('Policy not found.');
            }
            else {
              console.log('Error: ', res.data);
            }
          })
          .finally(() => {
          });

        DocumentService.getDocumentByTransactionType(res.data.variables.transactionNumber)
          .then((res) => {
            // TODO: FIX RESPONSE
            console.log('DOCSSSS', res.data.result[0]);
            const transDoc = res.data.result[0].data;
            const subTransDoc = transDoc.filter(data => data.subTransactionId == this.state.subTransactionType)[0]
            this.setState({ docs: res.data.result[0] });
          }).finally(() => {
            if (this.state.docs) {
              this.filterSelectedDocs(this.state.subTransactionType);
            }
          });

        this.setState({    
          transactionNumber: transactionNo,
          taskId: res.data.id,
          task: res.data
        });
        console.log('CLIENTS:  ', this.state.policy.clients);
      })
      .finally(() => { });
  }

  componentWillUnmount() {
    // window.removeEventListener('beforeunload', this.handleLeavePage);
    if (this.state.hasChangesMade) {
      this.setState({ showBeforeLeaveModal: true });
    }
  }
  
  handleLeavePage(e) {
    // if there's unsaved tasks
    if (!this.state.hasChangesMade) return;
    
    const confirmationMessage = '';
    e.returnValue = confirmationMessage;
    return confirmationMessage;              
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handlePolicySearchSubmit(this.state.policyNumber);
  }

  handleInputChange(name, val) {
    this.setState({ [name]: val });
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

  handleTransactionCheckList(updatedTransactionCheckList) {
    this.setState({ transactionCheckList: updatedTransactionCheckList });
  }

  handleNextTab() {
    const { currentTab } = this.state;
    if (currentTab + 1 > 5) return;
    this.setState({ currentTab: currentTab + 1 });
    this.updateVistedTab(currentTab + 1);
  }

  handlePrevTab() {
    const { currentTab } = this.state;
    if (currentTab - 1 < 1) return;
    this.setState({ currentTab: currentTab - 1 });
    this.updateVistedTab(currentTab - 1);
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

  handleTransactionTypeChange(val) {
    this.setState({ transactionType: parseInt(val) });
  }

  handleSubTransactionTypeChange(val) {
    this.setState({ subTransactionType: parseInt(val) });
    this.filterSelectedDocs(val);
  }

  handleDocSelect(index) {
    const { selectedDocs } = this.state;
    selectedDocs[index].value = !selectedDocs[index].value;
    const isAllChecked = selectedDocs.filter(doc => doc.isMandatory).every(doc => doc.value);
    this.setState({ selectedDocs });

    if (isAllChecked) {
      this.setState({ isDisabledProceed: false });
    }
    else {
      this.setState({ isDisabledProceed: true });
    }
  }

  handleOnCheckChange(name, val) {
    this.setState({ [name] : !val });
  }

  handleYesNoSelect(name, val) {
    console.log(name, val);
    this.setState({ [name]: val });
  }

  handleYesNoSelectOwner(name, val) {
    console.log(name, val);
    this.setState({ [name]: val });
  }


  handleDateChange(name, val) {
    this.setState({ [name]: val });
  }

  updateVistedTab(tabPage) {
    const { withPayment, isSignatureVerified, isRelativeOfAgent, isFatcaTagging, withReinstatementAgent } = this.state;
    this.createMemo();
    this.saveAnswer();
    if (tabPage === 2) {
      // page 1 validation
      if (withPayment === null || withPayment === false || isSignatureVerified === null || isSignatureVerified === false) {
        this.setState({ currentTab: 1, renderError: true});
        return;
      }

      // if (this.state.signatureVerified === null) {
      //   this.setState({ currentTab: 1, renderError: true});
      // }
      this.setState({ 
        isVisitedTransaction: true, 
        isVisitedInsured: true
      }); 
      this.getInsuredDetails();
      this.updateDocList();
    }
    else if (tabPage === 3) { 
      this.setState({ isVisitedOwner: true }); 
      this.getOwnerDetails();
    }
    else if (tabPage === 4) { 
      this.setState({ isVisitedAdditional: true });
    }
    else if (tabPage === 5) {
      if (
        isRelativeOfAgent === null || isRelativeOfAgent === false || 
        isFatcaTagging === null || isFatcaTagging === false ||
        withReinstatementAgent === null || withReinstatementAgent === false
      ) {
        this.setState({ currentTab: 4, renderError: true });
        return;
      }
      // if (window.confirm('Are you sure you want to Proceed')) {
      //   this.saveTransaction();
      // }
      this.setState({ showSaveTransactionModal: true, currentTab: 4});
    }
    this.setState({ visitedTabStatus: tabPage });
  }

  saveTransaction() {

    const data = {
      status: "success",
      statusCode: 0,
      isSuccess: true,
      message: "successful in fetching data.",
      result: {
        answers: [
          {
            transactionNo: this.state.transactionNumber,
            questionId: 1,
            answer: this.state.isSOI
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 2,
            answer: this.state.isPregnant
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 3,
            answer: this.state.additionalFMA
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 4,
            answer: this.state.additionalMUR
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 5,
            answer: this.state.withPayment
          },
          // TODO: Update Policy state initial fields
          // {
          //   transactionNo: this.state.transactionNumber,
          //   questionId: 6,
          //   answer: null
          // },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 7,
            answer: this.state.isSignatureVerified
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 8,
            answer: this.state.isFatcaTagging
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 9,
            answer: this.state.isRelativeOfAgent
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 10,
            answer: this.state.withReinstatementAgent
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 11,
            answer: this.state.additionalDateOfSigning
          },
          // TODO: Update Policy state initial fields
          // {
          //   transactionNo: this.state.transactionNumber,
          //   questionId: 12,
          //   answer: from la
          // }

          // TODO: Add this fields to DB
          // {
          //     transactionNo: this.state.transactionNumber,
          //     questionId: 13,
          //     answer: this.state.dateOfSigning
          // },
          // {
          //   transactionNo: this.state.transactionNumber,
          //   questionId: 14,
          //   answer: this.state.orNum
          // },
        ]
      }
    };

    QuestionService.saveAnswer(data)
    .then(res => {
      console.log('SAVE ANSWER', res.data);
      if (res.data.isSuccess) {
        const owner = this.state.policy.clients.find(client => client.role == "OW");
        const insured = this.state.policy.clients.find(client => client.role == "LF");
        const clientInfo = {
          insured: insured.clntNum,
          insuredName: `${insured.clientLastName}, ${insured.clientFirstName} ${insured.clientMiddleName}`,
          owner: owner.clntNum,
          ownerName: `${owner.clientLastName}, ${owner.clientFirstName} ${owner.clientMiddleName}`
        }
        const policyInfo = {
          status: "success",
          statusCode: 0,
          isSuccess: true,
          message: "successful in fetching data.",
          result: {
            transactionNo: this.state.transactionNumber,
            ...this.state.policy,
            ...clientInfo
          }
        };
        const taskInfo = {
          isCompleteAndValid: true,
          type: "csa",
          action: "complete",
          uid: this.state.isBeyondLimit ? "2" : JSON.parse(sessionStorage.getItem('user_info')).User_ID // TODO: change this to server user session
        }

        PolicyService.saveDetails(policyInfo)
        .then(res => {
          console.log('SAVE POLICY', res.data);

          TaskService.submitTask(this.state.taskId, taskInfo)
          .then(res => {
            console.log(res.data);
            if (res.data.id) {
              alert('Transaction saved!');
              window.location.href = '/tasks';
            }
            else {
              alert('Failed to save transaction');
              this.setState({ currentTab: 4 });
            }
          })
          .catch(err => {
            this.setState({
              isSearching: false,
              isError: true
            });
            console.log('Error: ', err);
          });
        })
        .finally(() => {

        });
      }
      else {
        alert('Failed to save transaction');
        this.setState({ currentTab: 4 });
      }
    })
    .finally(() => {

    });
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

  getInsuredDetails() {
    if (insured) return;
    const insured = this.state.clients.find(client => client.role == "LF");
    PolicyService.getClientIformationByid(insured.clntNum)
      .then((res) => {
        console.log('INSURED INFO: ', res.data);
        if (res.data.result) {
          this.setState({ insured: res.data.result});
        }
        else {
          alert('Failed getting data to lifeasia');
        }
      }).finally(() => {
        
      });
  }

  getOwnerDetails() {
    if (owner) return;
    const owner = this.state.clients.find(client => client.role == "OW");
    PolicyService.getClientIformationByid(owner.clntNum)
      .then((res) => {
        console.log('OWNER INFO: ', res.data);
        if (res.data.result) {
          this.setState({ owner: res.data.result});
        }
        else {
          alert('Failed getting data to lifeasia');
        }
      }).finally(() => {
        
      });
  }

  checkIsSameInsuredAndOwner() {
    const { policy } = this.state;
    let insured;
    let owner;
    
    if (policy.clients) {
      owner = policy.clients.find(client => client.role == "OW")
      insured = policy.clients.find(client => client.role == "LF")
    }

    if (insured.clntNum == owner.clntNum) {
      this.setState({ isSameInsuredAndOwner: true });
    }
    else {
      this.setState({ isSameInsuredAndOwner: false });
    }
  }

  checkPtrOrPwAvailed() {
    const { policy } = this.state;

    if (policy.payorTerm || policy.payorWaiver) {
      this.setState({ isPtrOrPwAvailed: true });
    }
    else {
      this.setState({ isPtrOrPwAvailed: false });
    }
  }

  formatDate(dt) {
    const d = new Date(dt);
    return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
  }

  updateDocList() {
    const docs = this.state.selectedDocs
      .filter(doc => doc.value )
      .map(doc => {
        return {
          docs_ID: doc.docId,
          createdBy: this.state.user.Firstname
        };
      })

    console.log('DOCS PAYLOAD', docs);

    const data = {
      transactionNo: this.state.transactionNumber,
      transDocs: docs
    };

    DocumentService.saveDocs(data)
      .then(res => {
        console.log('DOCS SAVED', res.data);
      })
      .finally(() => {
        // console.log('CREATE TASK ERROR:', err);
      });
  }

  createMemo() {
    if (this.state.currentTab === 1) {
      const missingDocs = this.state.selectedDocs
        .filter(doc => doc.isMandatory && !doc.value)
        .map(doc => {
          return {
            docs: doc.description
          };
        });
      this.setState({ missingDocs });
      console.log('MISSING', missingDocs);
      if (missingDocs.length > 0) {
        this.setState({ showReqModal: true, currentTab: 1 });
      } 
    }
    
  }

  generatePdfMemo() {
    const owner = this.state.policy.clients.find(client => client.role == "OW");
    const data = {
      result: {
        id: "ReqMemo",
        template: "BPM",
        data: {
          transactionNo: this.state.transactionNumber,
          policyNo: this.state.policy.number,
          date: "November 21, 2018",
          agentBroker: `${owner.clientFirstName} ${owner.clientLastName}`,
          code: "70000261",
          branch: "BLUE PEARL B, RANCH 1",
          salutation: "Mr",
          policyowner: {
          firstName: owner.clientFirstName,	
          middleName: owner.clientMiddleName,	
          lastName: owner.clientLastName
        },
        lifeInsured: `${owner.clientFirstName} ${owner.clientLastName}`,
        plan: "PruLink Assurance Account Plus - PHP",
        missingDocs: this.state.missingDocs,
        payment: "Payment",
        signatureVerified: "Signatured Verified"
        }
      }
    }
    console.log('DATAAAAAAA', data)
    DocumentService.createMemo(data)
    .then(res => {
      console.log('DOCS MEMO', res.data.result.data);
      const pdf = res.data.result.data;
      this.setState({ showReqModal: false, reqMemoPDF: pdf });
      var win = window.open();
      win.document.write(`<iframe src="data:application/pdf;base64,${pdf}" height="100%" width="100%"> </iframe>`);
    })
    .finally(() => {

    });
  }
  
  saveAnswer() {
    const data = {
      status: "success",
      statusCode: 0,
      isSuccess: true,
      message: "successful in fetching data.",
      result: {
        answers: [
          {
            transactionNo: this.state.transactionNumber,
            questionId: 1,
            answer: this.state.isSOI
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 2,
            answer: this.state.isPregnantOwner
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 3,
            answer: this.state.additionalFMA
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 4,
            answer: this.state.additionalMUR
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 5,
            answer: this.state.withPayment
          },
          // {
          //   transactionNo: this.state.transactionNumber,
          //   questionId: 6,
          //   answer: null
          // },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 7,
            answer: this.state.isSignatureVerified
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 8,
            answer: this.state.isFatcaTagging
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 9,
            answer: this.state.isRelativeOfAgent
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 10,
            answer: this.state.withReinstatementAgent
          },
          {
            transactionNo: this.state.transactionNumber,
            questionId: 11,
            answer: this.state.additionalDateOfSigning
          },
          // {
          //   transactionNo: this.state.transactionNumber,
          //   questionId: 12,
          //   answer: from la
          // }
        ]
      }
    }

    QuestionService.saveAnswer(data)
    .then(res => {
      console.log('SAVE ANSWER', res.data);
      
    })
    .finally(() => {

    });
  }

  flatten(records) {
    let output = [];
    records.forEach(e => {
      //start of recursion
      if (e.hasChild) {
        //change the child flag
        if (Array.isArray(e.hasChild)) {
          let child = e.hasChild; //change the child flag
          delete e.hasChild; //change the child flag
          output.push(e); //push the parent
          this.flatten(child).forEach(node => {
            output.push(node); //push the last node
          });
        } else {
          let child = [e.hasChild]; //change the child flag
          delete e.hasChild; //change the child flag
          output.push(e); //push the parent
          this.flatten(child).forEach(node => {
            output.push(node); //push the last node
          });
        }
      } else {
        output.push(e);
      }
    });
    return output;
  }

  saveBeforeLeaving(save) {
    if (!save) {
      this.setState({ showBeforeLeaveModal: false });
      return;
    }
    this.saveAnswer();
    this.setState({ showBeforeLeaveModal: false });
  }

  render() {
    return (
      <div className="flex-container flex-wrap">
        {/* <Prompt 
          when={this.state.hasChangesMade} 
          message={() => {
            this.setState({ showBeforeLeaveModal: true });
            return "Unsaved changes detected. Save your progress before leaving?"
          } }
        /> */}
        <ModalOkCancel mHeader="Confirm" 
          show={this.state.showReqModal} 
          okCaption="Yes"
          cancelCaption="No"
          onOk={this.generatePdfMemo} 
          onCancel={() => this.setState({ showReqModal: false })}>
          <div className="flex f-center f-column">
            <h3 className="text-center">
              Incomplete documents. Do you want to generate memo?
            </h3>
          </div>
        </ModalOkCancel>
        <ModalOkCancel mHeader="Confirm" 
          show={this.state.showSaveTransactionModal} 
          okCaption="Yes"
          cancelCaption="No"
          onOk={() => this.saveTransaction()} 
          onCancel={() => this.setState({ showSaveTransactionModal: false })}>
          <div className="flex f-center f-column">
            <h3 className="text-center">
              Are you sure you want to save transaction?
            </h3>
          </div>
        </ModalOkCancel>
        {/* <ModalOkCancel mHeader="Unsaved task" 
          show={this.state.showBeforeLeaveModal} 
          okCaption="Save and Exit"
          cancelCaption="Exit without saving"
          onOk={() => this.saveBeforeLeaving(true)} 
          onCancel={() => this.saveBeforeLeaving(false)}>
          <div className="flex f-center f-column">
            <h3 className="text-center">
              Unsaved changes detected. We recommend that you save your progress before leaving the page.?
            </h3>
          </div>
        </ModalOkCancel> */}
        <div className="col no-padding ghost-sidebar" />
        <div className="margin-top-70 col p-x2 margin-left-250">
          <div className="">
            <h1 className="text-darkgray larger normal mb-sm mt-0">
              New Transaction
            </h1>
            <div className="flex-container flex-wrap">
              <div className="flex f-row transaction-header f-justify-space-between col no-padding">
                <div className="flex">
                  <p className="">
                    Transaction Number  :
                  </p>
                  <p className="font-prulife ">
                    {`${this.state.transactionNumber.substr(0, 2)}-${this.state.transactionNumber.substr(2, 6)}`}
                  </p>
                </div>
                <div className="flex">
                  <p className="">
                    Transaction Type	:
                  </p>
                  <p className="font-prulife ">
                    Reinstatement - {this.state.subTransactionType === 1 && `Updating`} {this.state.subTransactionType === 2 && `Redating`} {this.state.subTransactionType === 3 && `Waiver`}
                </p>
                </div> 
                <div className="flex">
                  <p className="">
                    Created Date	: 
                  </p>
                  <p className="font-prulife ">
                  {this.state.task && this.formatDate(this.state.task.startTime)}
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
                <div className="circle">
                  {this.state.isVisitedTransaction ? <span className="fa fa-check" /> : 1}
                </div>
                Transaction Selection<span className="white" /><span className="gray" />
              </div>
              <div
                onClick={() => this.handleSkipTab(2)}
                className={this.state.currentTab === 2 || (this.state.isVisitedInsured & this.state.currentTab > 2) ? "tab-title active" : "tab-title"}>
                <div className="circle">
                  {this.state.isVisitedInsured ? <span className="fa fa-check" /> : 2}
                </div>
                Insured Details<span className="white" /><span className="gray" />
              </div>
              <div
                onClick={() => this.handleSkipTab(3)}  
                className={this.state.currentTab === 3 || (this.state.isVisitedOwner & this.state.currentTab > 3) ? "tab-title active" : "tab-title"}>
                <div className="circle">
                  {this.state.isVisitedOwner ? <span className="fa fa-check" /> : 3}
                </div>
                Owner Details<span className="white" /><span className="gray" />
              </div>
              <div
                onClick={() => this.handleSkipTab(4)}
                className={this.state.currentTab === 4 || (this.state.isVisitedAdditional & this.state.currentTab > 4) ? "tab-title active" : "tab-title"}>
                <div className="circle">
                  {this.state.isVisitedAdditional ? <span className="fa fa-check" /> : 4}
                </div>
                Additional Details
              </div>
            </div>
            <TabHeader policy={this.state.policy} clients={this.state.clients} />
            <div className="box-body">

              {this.state.currentTab === 1 && <TransactionNew
                policy={this.state.policy} 
                transactionNumber={this.state.transactionNumber}
                transactionType={this.state.transactionType}
                subTransactionType={this.state.subTransactionType}
                docs={this.state.selectedDocs}
                reqMemoPDF={this.state.reqMemoPDF}
                isSignatureVerified={this.state.isSignatureVerified}
                withPayment={this.state.withPayment}
                renderError={this.state.renderError}
                onTransactionTypeChange={this.handleTransactionTypeChange}
                onSubTransactionTypeChange={this.handleSubTransactionTypeChange}
                onDocSelect={this.handleDocSelect}
                onSelectSignatureVerified={this.handleYesNoSelect}
              />}
              {this.state.currentTab === 2 && <InsuredinformationNew 
                type={"editable"}
                months={this.state.months}
                newOccupation={this.state.newOccupation}
                email={this.state.email}
                mobileNum={this.state.mobileNum}
                telNum={this.state.telNum}
                client={this.state.insured} 
                onInputChange={this.handleInputChange}
                isChangeInOccupation={this.state.isChangeInOccupation}
                isChangeInAddress={this.state.isChangeInAddress}
                isSOI={this.state.isSOI}
                isPregnant={this.state.isPregnant}
                onYesNoSelect={this.handleYesNoSelect}
                fma={this.state.additionalFMA}
                mur={this.state.additionalMUR}
                additionalPregnancyQuestion={this.state.additionalPregnancyQuestion}
                onCheckChange={this.handleOnCheckChange}
                isPtrOrPwAvailed={this.state.isPtrOrPwAvailed}
              />}
              {this.state.currentTab === 3 && <OwnerinformationNew 
                type={"editable"}
                monthsOwner={this.state.monthsOwner}
                emailOwner={this.state.emailOwner}
                telNumOwner={this.state.telNumOwner}
                mobileNumOwner={this.state.mobileNumOwner}
                onInputChange={this.handleInputChange}
                newOccupationOwner={this.state.newOccupationOwner}
                client={this.state.owner} 
                isChangeInOccupationOwner={this.state.isChangeInOccupationOwner}
                isChangeInAddress={this.state.isChangeInAddressOwner}
                isSOI={this.state.isSOIOwner}
                isPregnant={this.state.isPregnantOwner}
                onYesNoSelect={this.handleYesNoSelectOwner}
                fma={this.state.additionalFMAOwner}
                mur={this.state.additionalMUROwner}
                additionalPregnancyQuestionOwner={this.state.additionalPregnancyQuestionOwner}
                onCheckChange={this.handleOnCheckChange}
                isSameInsuredAndOwner={this.state.isSameInsuredAndOwner}
                isPtrOrPwAvailed={this.state.isPtrOrPwAvailed}
              />}
              {this.state.currentTab === 4 && <Additional
                isRelativeOfAgent={this.state.isRelativeOfAgent}
                isFatcaTagging={this.state.isFatcaTagging}
                withReinstatementAgent={this.state.withReinstatementAgent}
                withCosal={this.state.withCosal}
                completeFatca={this.state.completeFatca}
                additionalDateOfSigning={this.state.additionalDateOfSigning}
                onYesNoSelect={this.handleYesNoSelect}
                isAgentStatusActive={this.state.isAgentStatusActive}
                dateOfSigning={this.props.dateOfSigning}
                onDateChange={this.handleDateChange}
                isBeyondLimit={this.state.isBeyondLimit}
                orNum={this.state.orNum}
                onTextChange={this.handleInputChange}
                isPlaceOfSigning={this.state.isPlaceOfSigning}
                renderError={this.state.renderError}
              />}

              <div className="flex f-justify-space-between p">
                <button className={this.state.currentTab === 1 ? "btn prulife invisible" : "btn prulife"} accessKey="," onClick={this.handlePrevTab}>
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
