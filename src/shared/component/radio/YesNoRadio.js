import React, { Component } from 'react';

class YesNoRadio extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    const val = e.target.value == 'true' ? true : false;
    this.props.onSelect(e.target.name, val);
  }

  render() {
    return (
      <div className="">
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
              defaultChecked={this.props.isYesDefault ? true : false}
              onChange={this.handleSelectChange}
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
              defaultChecked={!this.props.isYesDefault ? true : false}
              onChange={this.handleSelectChange}
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
    );
  }
}

export default YesNoRadio;