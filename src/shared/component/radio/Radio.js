import React, { Component } from 'react';

class Radio extends Component {
  render() {
    return (
      <div>
        <div className="flex f-center">
          <label className="checkbox" htmlFor={this.props.rId} >{this.props.rLabel}
            <input type="radio" id={this.props.rId} name={this.props.rName} />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;