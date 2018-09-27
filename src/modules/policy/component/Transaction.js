import React, {Component} from 'react';

class Transaction extends Component {
  render() {
    const actions = this.props.transaction.checkList
      .map((action, i) => {
        return <div key={i}>
          <input 
            key={action.id}
            name={action.id} 
            // checked={action.value} 
            // onChange={this.handleMultiSelectChange} 
            type="checkbox"/> {action.label} <br/>
        </div>
    });

    return (
      <div>
        <h1>Transaction</h1>
        <label>TXN {this.props.transaction.number}</label>
        <label>Transaction Type: </label>
        <select>
          <option >Reinstatement</option>
        </select>
        <label>Transaction Type: </label>
        <input 
          name="action"
          value="false"
          // checked={this.state.withHypertension === false}
          onChange={this.handleRadioChange}
          type="radio"/> Updating
        <input 
          name="action"
          value="false"
          // checked={this.state.withHypertension === false}
          onChange={this.handleRadioChange}
          type="radio"/> Redating
        <input 
          name="action"
          value="false"
          // checked={this.state.withHypertension === false}
          onChange={this.handleRadioChange}
          type="radio"/> Waiver
          {actions}
      </div>
    );
  }
}

export default Transaction;