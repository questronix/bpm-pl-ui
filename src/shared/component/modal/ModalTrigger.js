import React, { Component } from 'react';

class ModalTrigger extends Component {
  render() {
    return (
      <div>
        {/* MODAL TRIGGER */}
      <label for={this.props.modalId}>
        {this.props.children}
      </label>
      </div>
    );
  }
}

export default ModalTrigger;