import React, { Component } from 'react';
import CsaClient from './CsaClient';
import PrescreeningInfo from './PreScreening';
import CardTable from '../../../../shared/component/table/Table';
import TaskCounter from '../../../../shared/component/Widgets/TaskCounter';
import CardImg from '../../../../shared/component/Widgets/CardImg';
import { FileNetService } from '../../services/';
import Footer from '../../../../shared/component/footer/Footer';
import Input from '../../../../shared/component/input/Input';
import ProcessorHeader from './ProcessorHeader';

class ProcessorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      sample: 'sample',
      doc: '',
    };
    this.handlePrevTab = this.handlePrevTab.bind(this);
    this.handleNextTab = this.handleNextTab.bind(this);
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
            {/* <TabHeader policy={this.state.policy} clients={this.state.clients} /> */}
            <div className="box-body">

              {this.state.currentTab === 1}
              {this.state.currentTab === 2}

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

export default ProcessorContainer;

