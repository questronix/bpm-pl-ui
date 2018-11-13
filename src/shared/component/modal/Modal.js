import React, { Component } from 'react';

class MyModal extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.props.onToggle();
  }

  render() {
    return (
      <div>
        <input className="modal-state" id={this.props.modalId} type="checkbox" checked={this.props.isOpen} onChange={this.toggleModal} />
        <div className="modal">
          <label className="modal-bg" htmlFor={this.props.modalId}></label>
          <div className="modal-inner col">
            <label className="modal__close" htmlFor={this.props.modalId}>
              <span className="fa fa-chevron-right font-prulife"></span>
            </label>
            <h2 className="container">{this.props.modalLabel}</h2>
            <div className="flex-container flex-wrap">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyModal;