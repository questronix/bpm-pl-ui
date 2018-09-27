import React, {Component} from 'react';

class Transaction extends Component {
  render() {
    return (
      <div>
        <h1>Transaction</h1>
        <label>TXN {this.props.transaction.number}</label>
        <label>Transaction Type: </label>
        <select>
          <option >Reinstatement</option>
        </select>
        <label>Transaction Type: </label>
      </div>
    );
  }
}

export default Transaction;