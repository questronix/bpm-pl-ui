import React, { Component } from 'react';

class Input extends Component {
  

  render() {
    return (
        <div className={this.props.inputClass}>
          <label className={this.props.classRequired}>
            {this.props.inputLabel}
          </label>
          {this.props.editable ? 
          <input
          disabled
          type="text" 
          placeholder={this.props.inputPlaceholder}
          defaultValue={this.props.value}
          className={this.props.txtboxClass} /> :
          <input
            type="text" 
            placeholder={this.props.inputPlaceholder}
            defaultValue={this.props.value}
            className={this.props.txtboxClass} />}
          {this.props.children}
        </div>
    );
  }
}

export default Input;