import React, { Component } from 'react';

class InputDate extends Component {
  

  render() {
    return (
        <div className={this.props.inputClass}>
          <label className={this.props.classRequired}>
            {this.props.inputLabel}
          </label>
          <input
            type="date" 
            placeholder={this.props.inputPlaceholder}
            value={this.props.value}
            className={this.props.txtboxClass} />
        </div>
    );
  }
}

export default InputDate;