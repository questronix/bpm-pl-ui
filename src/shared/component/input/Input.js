import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.name, e.target.value)
  }

  render() {
    return (
        <div className={this.props.inputClass}>
          <label className={this.props.classRequired}>
            {this.props.inputLabel}
          </label>
          {this.props.editable 
            ?
            <input
              disabled
              type="text" 
              name={this.props.name}
              placeholder={this.props.inputPlaceholder}
              value={this.props.value || ''}
              onChange={this.handleInputChange}
              className={this.props.txtboxClass} 
            /> 
            : 
            <input
              type="text" 
              name={this.props.name}
              placeholder={this.props.inputPlaceholder}
              value={this.props.value || ''}
              onChange={this.handleInputChange}
              className={this.props.txtboxClass} 
            />}
          {this.props.children}
        </div>
    );
  }
}

export default Input;