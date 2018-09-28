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
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Salutation: </label>
                    <input className="input disabled" type="text" value={insured.salutation} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Last Name: </label>
                    <input className="input disabled" type="text" value={insured.lastName} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>First Name: </label>
                    <input className="input disabled" type="text" value={insured.firstName} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Gender: </label>
                    <input className="input disabled" type="text" value={insured.gender} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Occupation: </label>
                    <input className="input disabled" type="text" value={insured.occupation} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>HRC: </label>
                    <input className="input disabled" type="text" value={insured.hrc} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>VIP: </label>
                    <input className="input disabled" type="text" value={insured.vip} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>STR: </label>
                    <input className="input disabled" type="text" value={insured.str} disabled />
                  </div>
                </div>
                {/* Separate */}
                <div className="col xl-6 xl-6 l-6 m-12 s-12 xs-12 flex-container flex-wrap">
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Nationality: </label>
                    <input className="input disabled" type="text" value={insured.nationality} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Date of Birth: </label>
                    <input className="input disabled" type="text" value={insured.dateOfBirth} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Attained Age: </label>
                    <input className="input disabled" type="text" value={insured.attainedAge} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                  <label>Civil Status: </label>
                  <input className="input disabled" type="text" value={insured.civilStatus} disabled />
                </div>
                <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                  <label>Tel. Number: </label>
                  <input className="input disabled" type="text" value={insured.telNumber} disabled />
                </div>
                <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                  <label>Mobile Number: </label>
                  <input className="input disabled" type="text" value={insured.mobileNumber} disabled />
                </div>
                <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                  <label>TIN/SSS: </label>
                  <input className="input disabled" type="text" value={insured.tinOrSss} disabled />
                </div>
                <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                  <label>Email: </label>
                  <input className="input disabled" type="text" value={insured.email} disabled />
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