import React, { Component, Fragment } from 'react';
import Input from '../../../../shared/component/input/Input';

class AgentInfoHeader extends Component {

  render() {
    const agentFullName = this.props.policy.agentLastName + ", " + this.props.policy.agentFirstName + " " + this.props.policy.agentMiddleName;
    return (
      <Fragment>
        {this.props.type === "approver" &&
          <div className="xl-12 flex-container flex-wrap insured-details">
            <Input editable="false" inputLabel="Agent Code:" inputPlaceholder="000000000" txtboxClass="no-border" inputClass="col xl-4 no-padding mr input-container" value={this.props.policy.agentCode} />
            <Input editable="false" inputLabel="Agent Name:" inputPlaceholder="First name Last name" txtboxClass="no-border" inputClass="col xl-4 no-padding mr input-container" value={this.props.policy.agentFirstName} />
            <Input editable="false" inputLabel="Agent Status:" inputPlaceholder="Active" txtboxClass="no-border" inputClass="col xl-4 no-padding mr input-container" value={this.props.policy.status} />
            <Input editable="false" inputLabel="Branch Name:" inputPlaceholder="Complete Branch Name" txtboxClass="no-border" inputClass="col xl-6 input-container" value={this.props.policy.agentBranchDesc} />
            <Input editable="false" inputLabel="NMA:" inputPlaceholder="General" txtboxClass="no-border" inputClass="col xl-6 input-container" value={this.props.policy.nmaDesc} />
          </div>
        }
        {this.props.type === "default" &&
          <div className="xl-12 flex-container flex-wrap insured-details">
            <Input editable="false" inputLabel="Agent Code:" inputPlaceholder="000000000" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.agentCode} />
            <Input editable="false" inputLabel="Agent Name:" inputPlaceholder="First name Last name" txtboxClass="no-border" inputClass="col xl-7 input-container" value={this.props.policy.agentFirstName} />
            <Input editable="false" inputLabel="Agent Status:" inputPlaceholder="Active" txtboxClass="no-border" inputClass="col xl-2 input-container" value={this.props.policy.status} />
            <Input editable="false" inputLabel="Branch Name:" inputPlaceholder="Complete Branch Name" txtboxClass="no-border" inputClass="col xl-10 input-container" value={this.props.policy.agentBranchDesc} />
            <Input editable="false" inputLabel="NMA:" inputPlaceholder="General" txtboxClass="no-border" inputClass="col xl-2 input-container" value={this.props.policy.nmaDesc} />
          </div>
        }
      </Fragment>

    );
  }
}

export default AgentInfoHeader;