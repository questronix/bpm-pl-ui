import React, {Component, Fragment} from 'react';

class CheckboxInput extends Component {
  constructor(props) {
    super(props);
    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  handleToggleChange(event) {
    alert(event.target.value);
    this.props.handleRadioChange(event.target.value);
  }

  render() {
    return(
      <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
        <input
          type="checkbox"
          value={this.props.val}
          checked={this.props.val}
          // onChange={this.handleToggleChange}
           />
        <label className="flex f-justify-space-between" htmlFor="soi">
          <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">{this.props.label}</div>
          <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
        </label>
        {this.props.val ? (
          <Fragment>
            {this.props.children}
          </Fragment>
        ) : null }
      </div>
    );
  }
}

export default CheckboxInput;