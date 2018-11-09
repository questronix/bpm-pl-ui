import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';

class TabHeader extends Component {

  render() {

    return (
      <div className="App">
        <div className="box-body">
          <h3 className="box-header no-margin">
            Policy Information
              </h3>
          <div className="container flex f-justify-evenly">
            <Input
              inputLabel="transaction type"
              value={this.props.policies.transType}
              inputPlaceholder="transaction type"
              inputClass="input-container" />
            <Input
              inputLabel="Policy Number"
              inputPlaceholder=" Policy Number"
              value={this.props.policies.policyNumber}
              inputClass="input-container"
            />
            <Input
              inputLabel="Transaction Number"
              value={this.props.policies.transNumber}
              inputPlaceholder="Transaction Number"
              inputClass="input-container" />
            <Input
              inputLabel="Sum Assured"
              inputPlaceholder="Sum Assured"
              value = {this.props.policies.sumAssured}
              inputClass="input-container" />
            <Input
              inputLabel="Created Date"
              // value={new Date(this.props.tasks.variables.policy.createdAt).toDateString()}
              value={this.props.policies.createdDate}
              inputPlaceholder="Created Date"
              inputClass="input-container" />
          </div>
          <div className="flex f-end container">
                <a href="#" className="text-with-icon">
              Show more
                  &nbsp; <span className="fa fa-chevron-down"></span>
            </a>
          </div>
          <hr />
        </div>
      </div >
    );
  }
}

export default TabHeader;