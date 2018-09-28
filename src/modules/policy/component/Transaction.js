import React, { Component } from 'react';

class Transaction extends Component {
  render() {
    const actions = this.props.transaction.checkList
      .map((action, i) => {
        return <div className="col xl-12" key={i}>
          <label className="container">{action.label}
            <input
              key={action.id}
              name={action.id}
              // checked={action.value} 
              // onChange={this.handleMultiSelectChange} 
              type="checkbox" />
              <span className="checkmark"></span>
          </label>
        </div>
      });

    return (
      <div>
        <div className="flex-container flex-wraper">
          <div className="col xl-12">
            <div className="card col xl-12 l-12 m-12 s-12 xs-12 no-padding">
              <div className="card-header bg-prulife flex f-justify-space-between">
                <div className="col xl-6 flex">
                  <h3 className="font-white">Transaction type:</h3>
                  <select className="select-no-effect font-white bg-none no-border h3">
                    <option className="hidden">Reinstatement</option>
                    <option className="item">Reinstatement</option>
                  </select>
                </div>
                <h3 className="font-white">TXN {this.props.transaction.number}</h3>
              </div>
              <div className="card-body flex-container flex-wrap">
                <div className="col xl-6 flex f-center">
                  <div class="switch-field flex f-column col xl-3">
                    <input type="radio" id="switch_3_left"
                      name="action"
                      value="false"
                      // checked={this.state.withHypertension === false}
                      onChange={this.handleRadioChange}
                      type="radio" />
                    <label for="switch_3_left">Updating</label>
                    <input type="radio" id="switch_3_center"
                      name="action"
                      value="false"
                      // checked={this.state.withHypertension === false}
                      onChange={this.handleRadioChange}
                      type="radio" />
                    <label for="switch_3_center">Rebating</label>
                    <input type="radio" id="switch_3_right"
                      name="action"
                      value="false"
                      // checked={this.state.withHypertension === false}
                      onChange={this.handleRadioChange}
                      type="radio" />
                    <label for="switch_3_right">Waiver</label>
                  </div>
                </div>
                <div className="col xl-6 flex-container flex-wrap">
                  {actions}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;