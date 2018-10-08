import React, { Component } from 'react';

class InsuredInformation extends Component {

  render() {
    const insured = this.props.insured;

    return (
      <div className="App">
        {/* <div className="flex-container flex-wraper">
          <div className="col xl-12">
            <div className="card col xl-12 l-12 m-12 s-12 xs-12 no-padding">
              <div className="card-header bg-prulife">
                <h3 className="font-white no-margin">
                  Insured Information
                </h3>
              </div> */}
              <div className="card-body flex-container flex-wrap">
                <div className="col xl-6 l-6 m-12 s-12 xs-12 flex-container flex-wrap">
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>Salutation: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.salutation} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>Last Name: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.lastName} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>First Name: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.firstName} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>Gender: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.gender} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>Occupation: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.occupation} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>HRC: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.hrc} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>VIP: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.vip} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>STR: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.str} disabled />
                  </div>
                </div>
                {/* Separate */}
                <div className="col xl-6 xl-6 l-6 m-12 s-12 xs-12 flex-container flex-wrap">
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>Nationality: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.nationality} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>Date of Birth: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.dateOfBirth} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                    <label>Attained Age: </label>
                    <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.attainedAge} disabled />
                  </div>
                  <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                  <label>Civil Status: </label>
                  <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.civilStatus} disabled />
                </div>
                <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                  <label>Tel. Number: </label>
                  <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.telNumber} disabled />
                </div>
                <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                  <label>Mobile Number: </label>
                  <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.mobileNumber} disabled />
                </div>
                <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                  <label>TIN/SSS: </label>
                  <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.tinOrSss} disabled />
                </div>
                <div className="xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex  m-f-center s-f-center xs-f-center f-justify-space-between">
                  <label>Email: </label>
                  <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" defaultValue={insured.email} disabled />
                </div>
              </div>
            </div>
          </div>
      //   </div>
      // </div>
      // </div >
    );
  }
}

export default InsuredInformation;