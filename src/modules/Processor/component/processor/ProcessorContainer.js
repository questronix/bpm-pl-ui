import React, { Component } from 'react';
import CsaClient from './CsaClient';
import PrescreeningInfo from './PreScreening';
import CardTable from '../../../../shared/component/table/Table';
import TaskCounter from '../../../../shared/component/Widgets/TaskCounter';
import CardImg from '../../../../shared/component/Widgets/CardImg';
import { FileNetService } from '../../services/';
import { PolicyService, TaskService, DocumentService } from '../../../CSA/services';
import Footer from '../../../../shared/component/footer/Footer';
import ProcessorHeader from './ProcessorHeader';
import TabHeader from '../../../CSA/component/policy/TabHeader';
import ReviewTransaction from './ReviewTransaction';

class ProcessorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      sample: 'sample',
      doc: '',
      clients: [],
      client: {},
      policy:{},
      transactionNumber: localStorage.getItem('transactionNumber') || null,

    };
    this.handlePrevTab = this.handlePrevTab.bind(this);
    this.handleNextTab = this.handleNextTab.bind(this);
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
      .finally(() => {});
    // }

    PolicyService.getClientIformationByid("81789377")
      .then((res) => {
        console.log('CLIENT INFO: ', res.data);
        this.setState({ client: res.data.data.result.data});
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

  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col xl-12 ">
          <div className="box">
            <div className="tab-title-container">
              <div
                onClick={() => this.handleSkipTab(1)}
                className={this.state.currentTab === 1 || (this.state.isVisitedTransaction & this.state.currentTab > 1) ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  {this.state.isVisitedTransaction ? <span className="fa fa-check" /> : 1}
                </h4>
                <h4>Review Transaction</h4><span className="white" /><span className="gray" />
              </div>
              <div
                onClick={() => this.handleSkipTab(2)}
                className={this.state.currentTab === 2 || (this.state.isVisitedInsured & this.state.currentTab > 2) ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  {this.state.isVisitedInsured ? <span className="fa fa-check" /> : 2}
                </h4>
                <h4>Processing Details</h4>
              </div>
            </div>
            <ProcessorHeader/>
            <TabHeader policy={this.state.policy} clients={this.state.clients} />
            <div className="box-body">
              {this.state.currentTab === 1 && <ReviewTransaction/>}
              {this.state.currentTab === 2}
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default ProcessorContainer;

