import React, { Component } from 'react';

class MyModal extends Component {
  render() {
    return (
      <div>
        <input class="modal-state" id={this.props.modalId} type="checkbox" />
        <div class="modal">
          <label class="modal-bg" for={this.props.modalId}></label>
          <div class="modal-inner col">
            <label class="modal__close" for={this.props.modalId}>
              <span className="fa fa-chevron-right font-prulife"></span>
            </label>
            <h2 className="container">{this.props.modalLabel}</h2>
            <div class="flex-container flex-wrap">
              {this.props.children}
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
}

export default MyModal;