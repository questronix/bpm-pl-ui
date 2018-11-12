import React, { Component } from 'react';

class ModalTrigger extends Component {
  render() {
    return (
      <div>
        {/* MODAL TRIGGER */}
      <label htmlFor={this.props.modalId}>
        {this.props.children}
      </label>
      </div>
    );
  }
}

export default ModalTrigger;