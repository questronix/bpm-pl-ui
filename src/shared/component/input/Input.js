import React, { Component, Fragment } from 'react';
import CheckBox from '../checkbox/CheckBox';
import { TaskService } from '../../../services';

class Input extends Component {

  render() {
    return (
      <div className="App">
        <div className="input-container">
          <label>
            This is the label
          </label>
          <input
            type="text"
            placeholder="input"
            className="" />
        </div>
      </div>
    );
  }
}

export default Input;