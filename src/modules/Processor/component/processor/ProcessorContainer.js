import React, { Component } from 'react';
import { FileNetService, TransactionService } from '../../services/';
import { PolicyService, TaskService, DocumentService, QuestionService } from '../../../CSA/services';
import ProcessorHeader from './ProcessorHeader';
import ReviewTransaction from './ReviewTransaction';
import ProcessingDetails from './ProcessingDetails';
import { timingSafeEqual } from 'crypto';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio'

class ProcessorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
      transaction: null,
      questions: null,
      policy: {
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
      owner: null,
      insured: null,

      isRelativeOfAgent: null,
      isFatcaTagging: null,
      withReinstatementAgent: null,
      withCosal: null,

      currentTab: 1,
      doc: '',
      client: {},
      sampleName: 'Juan',
      
      transactionNumber: localStorage.getItem('transactionNumber') || null,

    };
    this.handlePrevTab = this.handlePrevTab.bind(this);
    this.handleNextTab = this.handleNextTab.bind(this);
  }

  componentDidMount() {
    TaskService.getTaskDetails(this.getQueryStringValue('id'))
      .then(res => {
        console.log(res.data);
        const task = res.data;
        this.setState({
          task,
          transactionNumber: task.transactionNumber,
        });
        return task;
      })
      .then(res => {
        TransactionService.getDetailsById(res.variables.transactionNumber)
          .then(res => {
            this.setState({ transaction: res.data.result });
          });

        PolicyService.getPolicyInformationByID(res.variables.policyNo)
          .then(res => {
            this.setState({ policy: res.data.result, clients: res.data.result.clients });
            this.getInsuredDetails(res.data.result.clients);
            this.getOwnerDetails(res.data.result.clients);
          });

        QuestionService.getQuestionsByTransactionID({transactionNo: res.variables.transactionNumber})
          .then((res) => {
            const questions = this.flatten(res.data.result);
            console.log(questions);
            this.mapQuestionsToProps(questions);
          });
      })
      .finally(() => { 

      });
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

  mapQuestionsToProps(questions) {
    let isRelativeOfAgent = questions.find(q => q.questionId === 9);
    isRelativeOfAgent = isRelativeOfAgent !== undefined && this.sanitizeBool(isRelativeOfAgent.answer);

    let withReinstatementAgent = questions.find(q => q.questionId === 10);
    withReinstatementAgent = withReinstatementAgent !== undefined && this.sanitizeBool(withReinstatementAgent.answer);

    let withCosal = questions.find(q => q.questionId === 13);
    withCosal = withCosal !== undefined && this.sanitizeBool(withCosal.answer);

    this.setState({ questions, isRelativeOfAgent, withReinstatementAgent, withCosal });

    // NO FATCA TAGGING IN DB
    // let isFatcaTagging = questions.find(q => q.questionId === 13);
    // isFatcaTagging = isFatcaTagging !== undefined && this.sanitizeBool(isFatcaTagging.answer);
  }

  sanitizeBool(input) {
    if (input === null) return;
    return input === "true" ? true : false;
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

  getInsuredDetails(clients) {
    if (insured) return;
    const insured = clients.find(client => client.role == "LF");
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

  getOwnerDetails(clients) {
    if (owner) return;
    const owner = clients.find(client => client.role == "OW");
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

  getApplicationDocs(appNo) {
    FileNetService.getDocs().then((res) => {
      console.log(res);
      this.setState({
        doc: res.data
      })
    }).finally(() => {

    });
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
        <div className="col xl-12 no-padding">
          <h1 className="text-darkgray larger normal mb-sm mt-0">
          For Processing
          </h1>
          <div className="box">
            <div className="tab-title-container">
              <div
                onClick={() => this.handleSkipTab(1)}
                className={this.state.currentTab === 1 || (this.state.isVisitedTransaction & this.state.currentTab > 1) ? "tab-title active" : "tab-title"}>
                <div className="circle">
                  {this.state.isVisitedTransaction ? <span className="fa fa-check" /> : 1}
                </div>
                Review Transaction<span className="white" /><span className="gray" />
              </div>
              <div
                onClick={() => this.handleSkipTab(2)}
                className={this.state.currentTab === 2 || (this.state.isVisitedInsured & this.state.currentTab > 2) ? "tab-title active" : "tab-title"}>
                <div className="circle">
                  {this.state.isVisitedInsured ? <span className="fa fa-check" /> : 2}
                </div>
                Processing Details
              </div>
            </div>
            <ProcessorHeader 
              task={this.state.task} 
              transaction={this.state.transaction}
              policy={this.state.policy}
              questions={this.state.questions}
              isRelativeOfAgent={this.state.isRelativeOfAgent}
              isFatcaTagging={this.state.isFatcaTagging}
              withReinstatementAgent={this.state.withReinstatementAgent}
              withCosal={this.state.withCosal}
            />
            <div className="box-body">

              {this.state.currentTab === 1 && 
                <ReviewTransaction 
                  policy={this.state.policy} 
                  clients={this.state.clients} 
                  owner={this.state.owner}
                  insured={this.state.insured}
                />
              }
              {this.state.currentTab === 2 && <ProcessingDetails />}

            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default ProcessorContainer;

