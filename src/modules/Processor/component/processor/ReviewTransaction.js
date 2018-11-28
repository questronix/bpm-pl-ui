import React, { Component } from 'react';
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
      visible: false,
      insuredVisible: false,
      ownerVisible: false,
    };
    this.isVisible = this.isVisible.bind(this);
    this.isInsuredVisible = this.isInsuredVisible.bind(this);
    this.isOwnerVisible = this.isOwnerVisible.bind(this)
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
          <h5 className="font-white no-margin">
            Policy Information
            </h5>
          &nbsp; <span className={this.state.visible ? "fa fa-chevron-up font-white" : "fa fa-chevron-down font-white"}></span>
        </button>
      </div>
      <div className={this.state.visible ? "processor-dropdown bg-white active" : "processor-dropdown bg-white"}>
        <h2 className="font-prulife col no-margin">
        <i className="font-black fa fa-umbrella mr-sm font-xl"></i>
          Policy Information
          </h2>
        <PolicyInfoHeader type="default" policy={this.props.policy} clients={this.props.clients} />
        <h2 className="font-prulife col no-margin">
        <i className="font-black fa fa-user-tie mr-sm font-xl"></i>
          Agent Information
          </h2>
        <AgentInfoHeader type={"default"} policy={this.props.policy} clients={this.props.clients} />
      </div>
      <div className="showmore bg-bright-blue flex">
        <button className="col flex f-justify-space-between no-border bg-none text-with-icon flex f-center" onClick={this.isInsuredVisible} accessKey="s">
          <h5 className="font-white no-margin">
            Insured Details
            </h5>
          &nbsp; <span className={this.state.insuredVisible ? "fa fa-chevron-up font-white" : "fa fa-chevron-down font-white"}></span>
        </button>
      </div>
      <div className={this.state.insuredVisible ? "processor-dropdown bg-white active" : "processor-dropdown bg-white"}>
        <div className="insured-details">
          <InsuredinformationNew 
            type={"default"}
            client={this.props.insured} 
            isChangeInOccupation={this.props.isChangeInOccupation}
            isChangeInAddress={this.props.isChangeInAddress}
            isSOI={this.props.isSOI}
            isPregnant={this.props.isPregnant}
            onYesNoSelect={this.handleYesNoSelect}
            fma={this.props.additionalFMA}
            mur={this.props.additionalMUR}
            onCheckChange={this.handleOnCheckChange}
            isPtrOrPwAvailed={this.props.isPtrOrPwAvailed}
          />
        </div>
      </div>
      <div className="showmore bg-bright-blue flex">
        <button className="col flex f-justify-space-between no-border bg-none text-with-icon flex f-center" onClick={this.isOwnerVisible} accessKey="s">
          <h5 className="font-white no-margin">
            Owner Details
            </h5>
          &nbsp; <span className={this.state.ownerVisible ? "fa fa-chevron-up font-white" : "fa fa-chevron-down font-white"}></span>
        </button>
      </div>
      <div className={this.state.ownerVisible ? "processor-dropdown bg-white active" : "processor-dropdown bg-white"}>
        <div className="insured-details">
          <OwnerinformationNew 
            type={"default"}
            client={this.props.owner} 
            isChangeInOccupation={this.props.isChangeInOccupationOwner}
            isChangeInAddress={this.props.isChangeInAddressOwner}
            isSOI={this.props.isSOIOwner}
            isPregnant={this.props.isPregnantOwner}
            onYesNoSelect={this.handleYesNoSelect}
            fma={this.props.additionalFMAOwner}
            mur={this.props.additionalMUROwner}
            onCheckChange={this.handleOnCheckChange}
            isSameInsuredAndOwner={this.props.isSameInsuredAndOwner}
            isPtrOrPwAvailed={this.props.isPtrOrPwAvailed}
          />
        </div>
      </div>
    </div >
  );
}
}

export default ReviewTransaction;