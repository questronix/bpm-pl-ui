import React, { Component } from 'react';

class ModalAlert extends Component {
  render() {
    return (
      <div className="App">
        <div className={this.props.show ? "flex-container modal-alert active" : "flex-container modal-alert"}>
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
              <button className="btn alt">
                Cancel
              </button>
              <button className="btn prulife">
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