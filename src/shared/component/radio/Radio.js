import React, { Component } from 'react';

class Radio extends Component {
  render() {
    // let radioStyle = `radio-container ${this.props.class}`;
    return (
      // <div className={radioStyle} >
      <div>
        {/* <input
          id={this.props.rName}
          name={this.props.rName}
          // value={this.props.cVal}
          // checked={this.props.cVal}
          // onChange={this.handleToggleChange}
          type="radio" />
        <label className="flex f-justify-space-between" htmlFor={this.props.rName}>
          <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">{this.props.rlabel}</div>
          <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
        </label> */}
        {/* <label class="radio-container">{this.props.radioLabel}
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label> */}
        {/* <div className="radio-container flex f-center">
          <input name={this.props.rName} id={this.props.rId} type="radio" />
          <label for={this.props.rId}>
            {this.props.rLabel}
          </label>
          <span class="checkmark"></span>
        </div> */}
        <div class="flex f-center">
          <label class="checkbox" for={this.props.rId} >{this.props.rLabel}
            <input type="radio" id={this.props.rId} name={this.props.rName} />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;