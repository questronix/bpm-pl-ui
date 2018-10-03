import React, {Component, Fragment} from 'react';

class CheckboxInput extends Component {
  constructor(props) {
    super(props);
    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  handleToggleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.props.onToggleChange(name, value);
  }

  render() {
    return(
      <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
        <input
          id={this.props.cName}
          name={this.props.cName}
          value={this.props.cVal}
          checked={this.props.cVal}
          onChange={this.handleToggleChange}
          type="checkbox" />
        <label className="flex f-justify-space-between" htmlFor={this.props.cName}>
          <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">{this.props.label}</div>
          <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
        </label>
        {this.props.cVal ? (
          <Fragment>
            {this.props.children}
          </Fragment>
        ) : null }
      </div>
    );
  }
}

export default CheckboxInput;