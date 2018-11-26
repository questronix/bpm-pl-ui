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
            max="9999-12-31"
            placeholder={this.props.inputPlaceholder}
            value={this.props.value}
            className={this.props.txtboxClass} />
        </div>
    );
  }
}

export default InputDate;