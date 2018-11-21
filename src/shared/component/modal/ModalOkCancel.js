import React, { Component } from 'react';

class ModalOkCancel extends Component {
  constructor(props) {
    super(props);

    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleOk() {
    this.props.onOk();
  }

  handleCancel() {
    this.props.onCancel();
  }

  render() {
    return (
      <div className="App">
        <div className={this.props.show == true ? "flex-container modal-alert active" : "flex-container modal-alert"}>
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
              <button className="btn alt" onClick={this.handleCancel}>
                {this.props.cancelCaption ? this.props.cancelCaption : 'Cancel'}
              </button>
              <button className="btn prulife" onClick={this.handleOk}>
              {this.props.okCaption ? this.props.okCaption : 'Ok'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
   }
}

export default ModalOkCancel;