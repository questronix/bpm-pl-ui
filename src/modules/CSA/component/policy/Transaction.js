import React, { Component } from 'react';

class Transaction extends Component {
  constructor(props) {
    super(props);
    // this.state = this.props || {
    //   transactionCheckList: this.props.transactionCheckList };
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(event) {
    this.props.onTransactionChange(event.target.value);
  }

  handleMultiSelectChange(i, event) {
    // const target = event.target;
    this.props.transactionCheckList[i].isChecked = !this.props.transactionCheckList[i].isChecked;
    // target.checked = true;
    console.log(this.props.transactionCheckList[i]);
  }
  
  render() {
    const transactionCheckList = this.props.transactionCheckList
      .map((item, i) => (
        <div className="col xl-12" key={i}>
          <label className="checkbox">{item.label}
            <input
              // checked={item.isChecked}
              // value={item.isChecked}
              onChange={(e) => this.handleMultiSelectChange(i, e)}
              type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      ));

    return (
      <div>
        <div className="flex-container flex-wrap">
          <div className="col xl-12">
            <div className="card-alt col xl-12 l-12 m-12 s-12 xs-12 no-padding">
              <div className="card-header flex f-justify-space-between">
                <div className="col xl-6 flex no-padding">
                  <h3 className="font-prugray no-padding no-margin flex f-center">Transaction type:</h3> &nbsp;
                  <select className="select-no-effect no-margin no-padding font-prulife bg-none border-bottom h3">
                    <option className="hidden font-prugray">Reinstatement</option>
                    <option className="item font-prugray">Reinstatement</option>
                  </select>
                </div>
                <h3 className="font-prugrayno-margin f-center flex font-prulife no-padding no-margin">TXN 2018-000001</h3>
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
                <div className="col xl-6 l-6 m-12 s-12 xs-12 flex-container flex-wrap">
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