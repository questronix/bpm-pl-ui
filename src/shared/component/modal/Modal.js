import React from 'react';

const Modal = () => {
  return (
    <div>
      <input class="modal-state" id={this.props.modalId} type="checkbox" />
      <div class="modal">
        <label class="modal-bg" for={this.props.modalId}></label>
        <div class="modal-inner">
          <label class="modal__close" for={this.props.modalId}></label>
          <h2>{this.props.modalLabel}</h2>
          <div class="container">
          {this.props.child}
          </div>
        </div>
      </div>
      {/* MODAL TRIGGER
      <label for={this.props.modalId}>
        View document
      </label> */}
    </div>
  );
}

export default Modal;