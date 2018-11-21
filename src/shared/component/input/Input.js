import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    return
  }

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
          value={this.props.value || ''}
          onChange={this.handleInputChange}
          className={this.props.txtboxClass} /> :
          <input
            type="text" 
            placeholder={this.props.inputPlaceholder}
            value={this.props.value || ''}
            onChange={this.handleInputChange}
            className={this.props.txtboxClass} />}
          {this.props.children}
        </div>
    );
  }
}

export default Input;