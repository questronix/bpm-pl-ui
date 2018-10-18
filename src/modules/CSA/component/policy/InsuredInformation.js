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
        <div className="header xl-12">
          <h4 className="font-prulife">
            Personal Information
          </h4>
        </div>
        <div className="card-body flex-container flex-wrap">
          <div className="col xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap">
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Salutation: </label>
              <input className="col input disabled" type="text" defaultValue={insured.salutation} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Cient ID: </label>
              <input className="col input disabled" type="text" defaultValue={insured.clientId} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">First Name: </label>
              <input className="col input disabled" type="text" defaultValue={insured.firstName} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Middle Name: </label>
              <input className="col input disabled" type="text" defaultValue={insured.middleName} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Last Name: </label>
              <input className="col input disabled" type="text" defaultValue={insured.lastName} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Gender: </label>
              <input className="col input disabled" type="text" defaultValue={insured.gender} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">VIP: </label>
              <input className="col input disabled" type="text" defaultValue={insured.vip} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Occupation: </label>
              <input className="col input disabled" type="text" defaultValue={insured.occupation} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">HRC: </label>
              <input className="col input disabled" type="text" defaultValue={insured.hrc} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">STR: </label>
              <input className="col input disabled" type="text" defaultValue={insured.str} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Nationality: </label>
              <input className="col input disabled" type="text" defaultValue={insured.nationality} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Date of Birth: </label>
              <input className="col input disabled" type="text" defaultValue={insured.dateOfBirth} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Attained Age: </label>
              <input className="col input disabled" type="text" defaultValue={insured.attainedAge} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Civil Status: </label>
              <input className="col input disabled" type="text" defaultValue={insured.civilStatus} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Tel. Number: </label>
              <input className="col input disabled" type="text" defaultValue={insured.telNumber} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Mobile Number: </label>
              <input className="col input disabled" type="text" defaultValue={insured.mobileNumber} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">TIN/SSS: </label>
              <input className="col input disabled" type="text" defaultValue={insured.tinOrSss} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Email: </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="xl-12">
              <hr />
            </div>
            <div className="xl-12 l-12 m-12 s-12 xs-12">
              <h4 className="font-prulife ">
                Present Address
                  </h4>
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Building / Street: </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">City / Provines  : </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Zip Code : </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Country: </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="xl-12 l-12 m-12 s-12 xs-12">
              <h4 className="font-prulife ">
                Permanent Address
                  </h4>
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Building / Street: </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">City / Provines  : </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Zip Code : </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Country: </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="xl-12 l-12 m-12 s-12 xs-12">
              <h4 className="font-prulife ">
              Bussiness Address
                  </h4>
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Building / Street: </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">City / Provines  : </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Zip Code : </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Country: </label>
              <input className="col input disabled" type="text" defaultValue={insured.email} disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-justify-space-between flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
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