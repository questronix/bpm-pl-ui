import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';

class AgentinformationNew extends Component {
 
  render() {
    return (
      <div className="xl-12 flex-container flex-wrap">
        <Input inputLabel="Agent Name:" inputPlaceholder="First name Last name" txtboxClass="no-border" inputClass="col xl-8 input-container"value={this.props.policy.agentFirstName}/>
        <Input inputLabel="NMA:" inputPlaceholder="NMA" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.nmaDesc}/>
        <Input inputLabel="Branch:" inputPlaceholder="Branch Name" txtboxClass="no-border" inputClass="col xl-8 input-container" value={this.props.policy.agentBranchDesc}/>
        <Input inputLabel="Agent Status:" inputPlaceholder="Status" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.status} />
      </div>

    );
  }
}

export default AgentinformationNew;