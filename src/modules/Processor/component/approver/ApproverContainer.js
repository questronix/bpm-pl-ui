import React, { Component } from 'react';
import ApprovalDetailsContainer from './ApprovalDetailsContainer';
import ReviewDetails from './ReviewDetails';
class ApproverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remarks: ''
    };
    this.handleApprove = this.handleApprove.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.remarksInput = this.remarksInput.bind(this);
  }

    handleApprove(){
    
      alert('Approved')
    }

    handleDecline(){
      alert('Declined')
    }

    remarksInput(event) {
      const value = event.target.value;
  
      this.setState({
        remarks: value
      })
      console.log(this.state.remarks)
    }


  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="col no-padding xl-8 l-8 m-8 s-8 xs-8">
            <div className="">
              <h1 className="text-darkgray larger normal mb mt-0">
                For Approval
              </h1>
            </div>
            <div className="box approval">
              <div className="p">
                <ApprovalDetailsContainer />
                <div className="p border-top border-lightgray">
                  <div className="col no-padding flex-container">
                    <textarea className="xl-12 p-xs bg-lightgray border rounded border-gray" placeholder="Remarks" onChange={this.remarksInput} value={this.state.remarks}></textarea>
                  </div>
                  <p className="text-italic font-sm text-darkgray mb-sm mt-0"><b className="text-darkgray">Note:</b> remarks is required if the resolution is declined.</p>
                </div>
                <p className="text-italic font-sm text-darkgray mb-sm mt-0"><b className="text-darkgray">Note:</b> remarks is required if the resolution is declined.</p>
                <div className="flex f-end">
                  <button className="btn prugray ml" onClick={this.handleDecline}>
                    <i className="icon fa fa-times mr-sm"></i>DECLINE
                  </button>
                  <button className="btn darkgreen ml" onClick={this.handleApprove}>
                    <i className="icon fa fa-check mr-sm"></i>APPROVE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col no-padding xl-4 l-4 m-4 s-4 xs-4">
            <div className="">
              <h1 className="text-darkgray larger normal mb mt-0">
                Reviewed Details
                </h1>
            </div>
            <ReviewDetails />
          </div>
        </div>
      </div >

    );
  }
}

export default ApproverContainer;