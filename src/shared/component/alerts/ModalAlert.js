import React, { Component } from 'react';

class ModalAlert extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.submit = this.submit.bind(this);
  }

  toggleModal() {
    this.props.modalalert();
  }

  submit(){
    this.props.confirm();
  }

  render() {
    return (
      <div className="App">
        <div className={this.props.modalState == true ? "flex-container modal-alert active" : "flex-container modal-alert"}>
          <div className="col xl-12 modal-content no-padding">
            <div className="container">
              <h2>
                {this.props.mHeader}
              </h2>
            </div>
            <div className="modal-body">
                {this.props.children}
            </div>
            <div className="modal-footer">
              <button className="btn alt" onClick={this.toggleModal}>
                Cancel
              </button>
              <button className="btn prulife" onClick={this.submit}>
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    );
   }
}

export default ModalAlert;