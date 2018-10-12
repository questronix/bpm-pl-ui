import React, { Component } from 'react';

class CheckBox extends Component {
  render() {
    let chkBoxStyle = `can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small ${this.props.class}`;
    return (
      <div className={chkBoxStyle} >
        <input
          id={this.props.cName}
          name={this.props.cName}
          // value={this.props.cVal}
          // checked={this.props.cVal}
          // onChange={this.handleToggleChange}
          type="checkbox" />
        <label className="flex f-justify-space-between" htmlFor={this.props.cName}>
          <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">{this.props.label}</div>
          <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
        </label>
      </div>
    );
  }
}

export default CheckBox;