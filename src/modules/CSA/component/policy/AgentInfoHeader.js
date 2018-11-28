import React, { Component, Fragment } from 'react';
import Input from '../../../../shared/component/input/Input';

class AgentInfoHeader extends Component {

  render() {
    const agentFullName = this.props.policy.agentLastName + ", " + this.props.policy.agentFirstName + " " + this.props.policy.agentMiddleName;
    return (
      <Fragment>
        {this.props.type === "approver" &&
          <div className="xl-12 flex-container flex-wrap insured-details">
            <Input editable="false" inputLabel="Agent Code:" inputPlaceholder="000000000" txtboxClass="no-border" inputClass="col xl-3 l-3 m-3 s-3 xs-3 no-padding input-container" value={this.props.policy.agentNumber} />
            <Input editable="false" inputLabel="Agent Name:" inputPlaceholder="First name Last name" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 mr-xs ml-xs no-padding input-container" value={this.props.policy.agentFirstName} />
            <Input editable="false" inputLabel="Agent Status:" inputPlaceholder="Active" txtboxClass="no-border" inputClass="col xl-3 l-3 m-3 s-3 xs-3 no-padding input-container" value={this.props.policy.agentStatus} />
            <Input editable="false" inputLabel="Branch Name:" inputPlaceholder="Complete Branch Name" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 mr-xs no-padding input-container" value={this.props.policy.agentBranchDesc} />
            <Input editable="false" inputLabel="NMA:" inputPlaceholder="General" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 ml-xs no-padding input-container" value={this.props.policy.nmaDesc} />
          </div>
        } 
        {this.props.type === "default" &&
          <div className="xl-12 flex-container flex-wrap insured-details">
            <Input editable="false" inputLabel="Agent Code:" inputPlaceholder="000000000" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.agentNumber} />
            <Input editable="false" inputLabel="Agent Name:" inputPlaceholder="First name Last name" txtboxClass="no-border" inputClass="col xl-7 input-container" value={this.props.policy.agentFirstName} />
            <Input editable="false" inputLabel="Agent Status:" inputPlaceholder="Active" txtboxClass="no-border" inputClass="col xl-2 input-container" value={this.props.policy.agentStatus} />
            <Input editable="false" inputLabel="Branch Name:" inputPlaceholder="Complete Branch Name" txtboxClass="no-border" inputClass="col xl-10 input-container" value={this.props.policy.agentBranchDesc} />
            <Input editable="false" inputLabel="NMA:" inputPlaceholder="General" txtboxClass="no-border" inputClass="col xl-2 input-container" value={this.props.policy.nmaDesc} />
          </div>
        }
      </Fragment>

    );
  }
}

export default AgentInfoHeader;