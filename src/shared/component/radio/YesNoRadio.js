import React, { Component } from 'react';

class YesNoRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: false
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    const val = e.target.value == 'true' ? true : false;
    this.props.onSelect(e.target.name, val);
    this.setState({ currentVal: val });
  }

  render() {
    const isInvalid = this.props.isRequired && (this.props.isYesDefault === null || !this.props.isYesDefault);
    return (
      <div className="position-relative">
        {(isInvalid && this.props.showError) && ( 
          <div className="error">
          <span className="fa fa-times"></span>
        </div>
        )}
        <p
          className={
            this.props.isRequired
              ? 'label container required'
              : 'label container'
          }
        >
          {this.props.title}:
        </p>
        <div className="">
          <label className="checkbox container" htmlFor={`${this.props.name}Yes`}>
            Yes
            <input
              type="radio"
              id={`${this.props.name}Yes`}
              name={this.props.name}
              defaultValue={true}
              checked={this.props.isYesDefault && this.props.isYesDefault !== null ? true : false}
              onChange={this.handleSelectChange}
              disabled={this.props.disabled !== undefined && this.props.disabled}
            />
            <span className="checkmark" />
          </label>
          <label className="checkbox container" htmlFor={`${this.props.name}No`}>
            No
            <input
              type="radio"
              id={`${this.props.name}No`}
              name={this.props.name}
              defaultValue={false}
              checked={!this.props.isYesDefault && this.props.isYesDefault !== null ? true : false}
              onChange={this.handleSelectChange}
              disabled={this.props.disabled !== undefined && this.props.disabled}
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
    );
  }
}

export default YesNoRadio;