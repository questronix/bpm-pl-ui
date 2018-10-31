import React, { Component, Fragment } from 'react';
import CheckBox from '../checkbox/CheckBox';
import { TaskService } from '../../../services';

class Input extends Component {

  render() {
    return (
      <div className="App">
        <div className="input-container">
          <label>
            {this.props.inputLabel}
          </label>
          <input
            type="text"
            placeholder={this.props.inputPlaceholder}
            className={this.props.inputClass} />
        </div>
      </div>
    );
  }
}

export default Input;