import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
        <div className={this.props.inputClass}>
          <label>
            {this.props.inputLabel}
          </label>
          <input
            disabled
            type="text" 
            placeholder={this.props.inputPlaceholder}
            value={this.props.value}
            className={this.props.txtboxClass} />
        </div>
    );
  }
}

export default Input;