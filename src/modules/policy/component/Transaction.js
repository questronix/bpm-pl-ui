    import React, { Component } from 'react';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(event) {
    this.props.onTransactionChange(event.target.value);
  }

  render() {
    const transactionCheckList = this.props.transactionCheckList
      .map((item, i) => {
        return <div className="col xl-12" key={i}>
          <label className="checkbox">{item.label}
            <input
              key={item.id}
              name={item.id}
              // checked={item.value} 
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
                  <select className="select-no-effect font-white bg-none border-bottom h3">
                    <option className="hidden">Reinstatement</option>
                    <option className="item">Reinstatement</option>
                  </select>
                </div>
                <h3 className="font-white">TXN 2018-000001</h3>
              </div>
              <div className="card-body flex-container flex-wrap">
                <div className="col xl-6 l-6 m-12 s-12 xs-12 flex f-center">
                  <div className="switch-field flex f-column col xl-3 l-3 m-6 s-12 xs-12">
                    <input 
                      type="radio" 
                      id="switch_3_left"
                      name="action"
                      value="1"
                      onChange={this.handleRadioChange} />
                    <label htmlFor="switch_3_left">Updating</label>
                    <input 
                      type="radio" 
                      id="switch_3_center"
                      name="action"
                      value="2"
                      onChange={this.handleRadioChange} />
                    <label htmlFor="switch_3_center">Rebating</label>
                    <input 
                      type="radio" 
                      id="switch_3_right"
                      name="action"
                      value="3"
                      onChange={this.handleRadioChange} />
                    <label htmlFor="switch_3_right">Waiver</label>
                  </div>
                </div>
                <div className="col xl-6 flex-container flex-wrap">
                  {transactionCheckList}
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