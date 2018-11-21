import React, { Component } from 'react';
import ReviewDetails from './PolicyInsuredOwnerContainer';
import { PolicyService, TaskService, DocumentService } from '../../../CSA/services';
import { FileNetService } from '../../services/';
import PolicyInfoHeader from '../../../CSA/component/policy/PolicyInfoHeader';
import AgentInfoHeader from '../../../CSA/component/policy/AgentInfoHeader';
import InsuredinformationNew from '../../../CSA/component/policy/InsuredinformationNew';
import OwnerinformationNew from '../../../CSA/component/policy/OwnerinformationNew';

class ReviewTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: {},
      visible: false,
      insuredVisible: false,
      ownerVisible: false,
      clients: [],
      client: {},
      policy: {},
      transactionNumber: localStorage.getItem('transactionNumber') || null,

    };
    this.handlePrevTab = this.handlePrevTab.bind(this);
    this.handleNextTab = this.handleNextTab.bind(this);
    this.isVisible = this.isVisible.bind(this);
    this.isInsuredVisible = this.isInsuredVisible.bind(this);
    this.isOwnerVisible = this.isOwnerVisible.bind(this)
  }

  componentWillMount() {
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

  componentDidMount() {
    this.getApplicationDocs("12345678");
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
  isVisible() {
    this.setState({ visible: !this.state.visible })
  }
  isInsuredVisible() {
    this.setState({ insuredVisible: !this.state.insuredVisible })
  }
  isOwnerVisible() {
    this.setState({ ownerVisible: !this.state.ownerVisible })
  }

render(){
  return (
    <div className="App processor-container">
      <div className="showmore bg-bright-blue flex">
        <button className="col flex f-justify-space-between no-border bg-none text-with-icon flex f-center" onClick={this.isVisible} accessKey="s">
          <h3 className="font-white no-margin">
            Policy Information
            </h3>
          &nbsp; <span className={this.state.visible ? "fa fa-chevron-up font-white" : "fa fa-chevron-down font-white"}></span>
        </button>
      </div>
      <div className={this.state.visible ? "processor-dropdown bg-white active" : "processor-dropdown bg-white"}>
        <h2 className="font-prulife col no-margin">
        <i class="font-black fa fa-umbrella mr-sm font-xl"></i>
          Policy Information
          </h2>
        <PolicyInfoHeader type={"default"} policy={this.state.policy} clients={this.state.clients} />
        <h2 className="font-prulife col no-margin">
        <i class="font-black fa fa-user-tie mr-sm font-xl"></i>
          Agent Information
          </h2>
        <AgentInfoHeader type={"default"} policy={this.state.policy} clients={this.state.clients} />
      </div>
      <div className="showmore bg-bright-blue flex">
        <button className="col flex f-justify-space-between no-border bg-none text-with-icon flex f-center" onClick={this.isInsuredVisible} accessKey="s">
          <h3 className="font-white no-margin">
            Insured Details
            </h3>
          &nbsp; <span className={this.state.insuredVisible ? "fa fa-chevron-up font-white" : "fa fa-chevron-down font-white"}></span>
        </button>
      </div>
      <div className={this.state.insuredVisible ? "processor-dropdown bg-white active" : "processor-dropdown bg-white"}>
        <div className="insured-details">
          <InsuredinformationNew client={this.state.client} />
        </div>
      </div>
      <div className="showmore bg-bright-blue flex">
        <button className="col flex f-justify-space-between no-border bg-none text-with-icon flex f-center" onClick={this.isOwnerVisible} accessKey="s">
          <h3 className="font-white no-margin">
            Owner Details
            </h3>
          &nbsp; <span className={this.state.ownerVisible ? "fa fa-chevron-up font-white" : "fa fa-chevron-down font-white"}></span>
        </button>
      </div>
      <div className={this.state.ownerVisible ? "processor-dropdown bg-white active" : "processor-dropdown bg-white"}>
        <div className="insured-details">
          <OwnerinformationNew policy={this.state.policy} client={this.state.client} />
        </div>
      </div>
    </div >
  );
}
}

export default ReviewTransaction;