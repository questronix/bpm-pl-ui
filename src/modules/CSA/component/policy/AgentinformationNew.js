import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class AgentinformationNew extends Component {
 
  render() {
    return (
      <div className="xl-12 flex-container flex-wrap">
        <Input editable="false" inputLabel="Agent Name:" inputPlaceholder="First name Last name" txtboxClass="no-border" inputClass="col xl-8 input-container"value={this.props.policy.agentFirstName}/>
        <Input editable="false" inputLabel="NMA:" inputPlaceholder="NMA" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.nmaDesc}/>
        <Input editable="false" inputLabel="Branch:" inputPlaceholder="Branch Name" txtboxClass="no-border" inputClass="col xl-8 input-container" value={this.props.policy.agentBranchDesc}/>
        <Input editable="false" inputLabel="Agent Status:" inputPlaceholder="Status" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.status} />
      </div>

    );
  }
}

export default AgentinformationNew;