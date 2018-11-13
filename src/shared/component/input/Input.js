import React, { Component, Fragment } from 'react';
import CheckBox from '../checkbox/CheckBox';
import { TaskService } from '../../../services';

class Input extends Component {

  render() {
    return (
        <div className={this.props.inputClass}>
          <label className={this.props.classRequired}>
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