import React, { Component, Fragment } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';


class OwnerinformationNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      months: ''
    }
    this.ChangeInOccupationOwner = this.ChangeInOccupationOwner.bind(this);
    this.handleYesNoChange = this.handleYesNoChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(name, value) {


    this.setState({
      [name]: value
    })
    console.log(this.state.months)
  }

  ChangeInOccupationOwner() {
    this.props.handleChangeInOccupationOwner();
  }

  handleYesNoChange(name, value) {
    this.props.onYesNoSelect(name, value);
  }

  handleCheckChange(e) {
    const val = e.target.value == "true" ? true : false;
    console.log(e.target.name, val);
    this.props.onCheckChange(e.target.name, val);
  }

  render() {
    const { client } = this.props;

    return (
      <div>
        {this.props.type === "approver" &&
          <div className="App position-relative">
            {/* START OF SAME AS INSURE DETAILS BLOCKER */}
            {this.props.isPtrOrPwAvailed && (
              <div className="content-disabled active">
                <div className="box">
                  <div className="box-body container flex f-center">
                    <span className="fa fa-user-edit font-prulife"></span> &nbsp;
                        <h3>
                      Same as Insured Details.
                        </h3>
                  </div>
                </div>
              </div>
            )}
            {/* END */}
            <div className="col xl-12 flex f-center f-start mb no-padding">
              <span className="fa fa-user font-prulife">
              </span> &nbsp;
                <h5 className="no-margin">
                Personal Information
                </h5>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <div className="flex-container col no-padding flex f-justify-space-between mb-sm">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Cleint ID:"
                  value={this.props.client.clientId}
                  inputClass="xl-4 mr-xs input-container" />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Salutation:"
                  valuevalue={this.props.client.salutation}
                  inputClass="xl-4 mr-xs input-container" />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Gender:"
                  inputClass="xl-4 input-container"
                  value={this.props.client.gender} />
              </div>
              <div className="flex-container col no-padding flex f-justify-space-between mb-sm">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="First Name:"
                  inputClass="xl-4 mr-xs input-container"
                  value={this.props.client.firstName} />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Middle Name:"
                  inputClass="xl-4 mr-xs input-container"
                  value={this.props.client.middleName} />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Last Name:"
                  inputClass="xl-4 input-container"
                  value={this.props.client.lastName} />
              </div>
              <div className="flex-container col no-padding flex f-justify-space-between mb-sm">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Date of Birth:"
                  inputClass="xl-6 mr-xs input-container"
                  value={this.props.client.dateOfBirth} />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Attained Age:"
                  inputClass="xl-6 input-container"
                  value={this.props.client.attainedAge} />
              </div>
              <div className="flex-container col no-padding flex f-justify-space-between mb-sm">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Nationality:"
                  inputClass="xl-6 mr-xs input-container"
                  value={this.props.client.nationality} />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Civil Status:"
                  inputClass="xl-6 input-container"
                  value={this.props.client.civilStatus} />
              </div>
              <div className="flex-container col no-padding flex f-justify-space-between mb-sm">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="VIP:"
                  inputClass="xl-4 mr-xs input-container"
                  value={this.props.client.vipTag} />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="HRC:"
                  inputClass="xl-4 mr-xs input-container"
                  value={this.props.client.hrcTag} />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="STR:"
                  inputClass="xl-4 input-container"
                  value={this.props.client.strTag} />
              </div>
              <div className="flex-container col no-padding flex f-justify-space-between mb-sm">
                <Input
                  // classRequired="editable"
                  txtboxClass="bg-lightgray"
                  inputLabel="Email Address:"
                  inputClass="xl-4 mr-xs input-container"
                  value={this.props.client.emailAdd} />
                <Input
                  txtboxClass="bg-lightgray"
                  inputLabel="Telephone Number:"
                  inputClass="xl-4 mr-xs input-container"
                  value={this.props.client.telephoneNum} />
                <Input
                  txtboxClass="bg-lightgray"
                  inputLabel="Mobile Number:"
                  inputClass="xl-4 input-container"
                  value={this.props.client.mobileNum} />
              </div>
            </div>
            {/* CHECK POINT */}
            <div className="xl-12 flex-container flex-wrap">
              <div className="col xl-12 flex f-center f-start mb no-padding">
                <span className="fa fa-suitcase font-prulife">
                </span> &nbsp;
                  <h5 className="no-margin">
                  Occupation
                  </h5>
              </div>
              <div className="flex-container col no-padding flex f-justify-space-between mb-sm">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Occupation:"
                  inputClass="xl-6 mr-xs  input-container"
                  value={this.props.client.occupation1} />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="TIN/GSIS:"
                  inputClass="xl-6 input-container"
                  value={this.props.client.tinNum} />
              </div>
              <div className="flex-container col no-padding flex f-justify-space-between mb-sm">
                <div className="xl-6 mr-xs">
                  <p className="label flex no-margin">
                    Change in Occupation: &nbsp;<span className="fa fa-pencil-alt font-prulife"></span>
                  </p>
                  <div className="col no-padding xl-12">
                    <label className="checkbox container" htmlFor="yes">Yes
                      <input type="radio" id="yes" name="Relative" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="checkbox container" htmlFor="no">No
                    <input type="radio" id="no" name="Relative" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <Input
                  txtboxClass="bg-lightgray"
                  inputLabel="Occupation:"
                  inputClass="xl-6  input-container"
                  value={this.props.client.occupation1} />
              </div>
            </div>
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-location-arrow font-prulife">
              </span> &nbsp;
                  <h3 className="no-margin">
                Present Address
                  </h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Street/Municipality:"
                inputClass="xl-6 mr-xs input-container"
                value={client && client.address && client.address[0].address1 + " " + client.address[0].address2 + " " + client.address[0].address3 + " " + client.address[0].address4 + " " + client.address[0].address5 }
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={client && client.address[0].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={client && client.address[0].countryCode}
              />
            </div>
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-map-marker-alt font-prulife">
              </span> &nbsp;
                  <h3 className="no-margin">
                Permanent Address
                  </h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Street/Municipality:"
                inputClass="xl-6 mr-xs input-container"
                value={client && client.address && client.address[1].address1 + " " + client.address[1].address2 + " " + client.address[1].address3 + " " + client.address[1].address4 + " " + client.address[1].address5 }
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={client && client.address[1].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={client && client.address[1].countryCode}
              />
            </div>
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-map-marked-alt font-prulife">
              </span> &nbsp;
                  <h3 className="no-margin">
                Business Address
                  </h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Street/Municipality:"
                inputClass="xl-6 mr-xs input-container"
                value={client && client.address && client.address[2].address1 + " " + client.address[2].address2 + " " + client.address[2].address3 + " " + client.address[2].address4 + " " + client.address[2].address5 }
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={client && client.address[2].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={client && client.address[2].countryCode}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap col">
              <div className="xl-12">
                <p className="label flex no-margin">
                  Change in Address:
                  </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes1">Yes
                      <input type="radio" id="yes1" name="ChangeAddress" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no1">No
                    <input type="radio" id="no1" name="ChangeAddress" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col xl-12 flex f-center f-start mb no-padding">
              <span className="fa fa-info-circle font-prulife">
              </span> &nbsp;
              <h5 className="no-margin">
                Additional Information
              </h5>
            </div>
            <div className="xl-12 flex-container flex-wrap col">
              <div className="xl-12">
                <p className="label flex required no-margin">
                  Statement of Insurability Declarations:
                </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes2">Yes
                      <input type="radio" id="yes2" name="Insurability" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no2">No
                    <input type="radio" id="no2" name="Insurability" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="xl-12 flex-container flex-wrap col">
              <div className="xl-12">
                <p className="label flex no-margin required">
                  Are you pregnant?:
                </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes3">Yes
                      <input type="radio" id="yes3" name="pregnant" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no3">No
                    <input type="radio" id="no3" name="pregnant" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="xl-12 flex-container flex-wrap col">
              <div className="xl-12">
                <p className="label flex no-margin required">
                  Additional requirements:
                </p>
                <div className="col xl-12 flex f-row-reverse f-end">
                  <label htmlFor="fma">
                    FMA
                  </label>
                  <label className="checkbox">
                    <input id="fma" type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="col xl-12 flex f-row-reverse f-end">
                  <label htmlFor="mur">
                    MUR
                  </label>
                  <label className="checkbox">
                    <input id="mur" type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>}

        {this.props.type === "default" &&
          <div className="App position-relative">
            {/* START OF SAME AS INSURE DETAILS BLOCKER */}
            {this.props.isPtrOrPwAvailed && (
              <div className="content-disabled active">
                <div className="box">
                  <div className="box-body container flex f-center">
                    <span className="fa fa-user-edit font-prulife"></span> &nbsp;
                        <h3>
                      Same as Insured Details.
                        </h3>
                  </div>
                </div>
              </div>
            )}
            {/* END */}
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-user font-prulife"></span> &nbsp;
              <h3 className="no-margin">Personal Information</h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Cleint ID:"
                value={client && client.clientId}
                inputClass="col xl-3 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="First Name:"
                inputClass="col xl-3 input-container"
                value={client && client.firstName}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Middle Name:"
                inputClass="col xl-3 input-container"
                value={client && client.middleName}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Last Name:"
                inputClass="col xl-3 input-container"
                value={client && client.lastName}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <div className="xl-3 flex-container flex-wrap">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Date of Birth:"
                  inputClass="col xl-7 input-container"
                  value={client && client.dateOfBirth}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Attained Age:"
                  inputClass="col xl-4 input-container"
                  value={client && client.attainedAge}
                />
              </div>
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Civil Status:"
                inputClass="col xl-3 input-container"
                value={client && client.civilStatus}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Salutation:"
                inputClass="col xl-3 input-container"
                value={client && client.salutation}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Gender:"
                inputClass="col xl-3 input-container"
                value={client && client.gender}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Nationality:"
                inputClass="col xl-3 input-container"
                value={client && client.nationality}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="VIP:"
                inputClass="col xl-3 input-container"
                value={client && client.vipTag}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="HRC:"
                inputClass="col xl-3 input-container"
                value={client && client.hrcTag}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="STR:"
                inputClass="col xl-3 input-container"
                value={client && client.strTag}
              />
            </div>
            {/* CHECK POINT */}
            <div className="xl-12 flex-container flex-wrap">
              <div className="col xl-4 input-container">
                <label>
                  Email Address:
                  </label>
                <input className="bg-lightgray" type="text" />
              </div>
              <div className="col xl-4 input-container">
                <label>
                  Telephone Number:
                  </label>
                <input className="bg-lightgray" type="text" />
              </div>
              <div className="col xl-4 input-container">
                <label>
                  Mobile Number
                  </label>
                <input className="bg-lightgray" type="text" />
              </div>
              {/* <Input
                // classRequired="editable"
                txtboxClass="bg-lightgray"
                inputLabel="Email Address:"
                inputClass="col xl-4 input-container"
                value={client && client.emailAdd}
              // <span className="fa fa-pencil-alt font-prulife"></span>
              />
              <Input
                txtboxClass="bg-lightgray"
                inputLabel="Telephone Number:"
                inputClass="col xl-4 input-container"
                value={client && client.telephoneNum}
              />
              <Input
                txtboxClass="bg-lightgray"
                inputLabel="Mobile Number:"
                inputClass="col xl-4 input-container"
                value={client && client.mobileNum}
              /> */}
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <div className="col xl-12 flex f-center f-start">
                <span className="fa fa-suitcase font-prulife">
                </span> &nbsp;
                <h3 className="no-margin">
                  Occupation
                </h3>
              </div>
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Occupation:"
                inputClass="col xl-4  input-container"
                value={client && client.occupation1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="TIN/GSIS:"
                inputClass="col xl-2 input-container"
                value={client && client.tinNum}
              />
              <div className="xl-2">
                <YesNoRadio
                  name="isChangeInOccupationOwner"
                  title="Change Occupation"
                  isRequired={false}
                  isYesDefault={this.props.isChangeInOccupationOwner}
                  onSelect={this.handleYesNoChange}
                />
              </div>
              {this.props.isChangeInOccupationOwner == true ?
                <div className="col xl-4 input-container">
                  <label>
                    New Occupation
                  </label>
                  <input className="bg-lightgray" type="text" />
                </div>
                // <Input
                //   txtboxClass="bg-lightgray"
                //   inputLabel="Occupation:"
                //   inputClass="col xl-4  input-container"
                //   value={client && client.occupation1}
                // />
                : null}
            </div>
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-location-arrow font-prulife">
              </span> &nbsp;
                <h3 className="no-margin">
                Present Address
                </h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Street/Municipality:"
                inputClass="col xl-8 input-container"
                value={client && client.address && client.address[0].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={client && client.address[0].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={client && client.address[0].address5}
              />
            </div>
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-map-marker-alt font-prulife">
              </span> &nbsp;
                <h3 className="no-margin">
                Permanent Address
                </h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Street/Municipality:"
                inputClass="col xl-8 input-container"

                value={client && client.address[1].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={client && client.address[1].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={client && client.address[1].address5}
              />
            </div>
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-map-marked-alt font-prulife">
              </span> &nbsp;
                <h3 className="no-margin">
                Business Address
                </h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Street/Municipality:"
                inputClass="col xl-8 input-container"

                value={client && client.address[2].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={client && client.address[2].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={client && client.address[2].address5}
              />
            </div>

            <div className="xl-12 flex-container flex-wrap col">
              <div className="xl-2">
                <YesNoRadio
                  name="isChangeInAddress"
                  title="Change in Address"
                  isRequired={false}
                  isYesDefault={this.props.isChangeInAddress}
                  onSelect={this.handleYesNoChange}
                />
              </div>
            </div>
            {this.props.isPtrOrPwAvailed && (
              <Fragment>
                <div className="col xl-12 flex f-center f-start">
                  <span className="fa fa-info-circle font-prulife"></span> &nbsp;
              <h3 className="no-margin">Additional Information</h3>
                </div>
                <div className="xl-12 flex-container flex-wrap col">
                  <div className="xl-12">
                    <YesNoRadio
                      name="isSOIOwner"
                      title="Statement of Insurability Declarations"
                      isRequired={false}
                      isYesDefault={this.props.isSOI}
                      onSelect={this.handleYesNoChange}
                    />
                  </div>
                </div>
                {this.props.isSOI && (
                  <Fragment>
                    <div className="xl-12 flex-container flex-wrap col">
                      <div className="xl-12">
                        <YesNoRadio
                          name="isPregnantOwner"
                          title="Are you pregnant?"
                          isRequired={false}
                          isYesDefault={this.props.isPregnant}
                          onSelect={this.handleYesNoChange}
                        />
                      </div>
                      {this.props.isPregnant === true ?
                        <Input
                          name="months"
                          txtboxClass="bg-light-gray  "
                          onInputChange={this.onInputChange}
                          inputLabel="How many months? :"
                          inputClass="col xl-2 input-container"
                          value={this.state.months}
                        />
                        : null
                      }

                      {this.props.isPregnant && (
                        <div className="xl-12 flex-container flex-wrap col">
                          <div className="xl-12">
                            <p className="label flex no-margin required">
                              Additional requirements:
                           </p>
                            <div className="col xl-12 flex f-row-reverse f-end">
                              <label htmlFor="fma">
                                FME
                      </label>
                              <label className="checkbox">
                                <input id="fma" type="checkbox" name={"additionalFMAOwner"} value={this.props.fma} checked={this.props.fma} onChange={this.handleCheckChange} />
                                <span className="checkmark" />
                              </label>
                            </div>
                            {this.props.isPregnant && (
                              <div className="xl-12 flex-container flex-wrap col">
                                <div className="xl-12">
                                  <p className="label flex no-margin required">
                                    Additional requirements:
                    </p>
                                  <div className="col xl-12 flex f-row-reverse f-end">
                                    <label htmlFor="fma">
                                      FME
                      </label>
                                    <label className="checkbox">
                                      <input id="fma" type="checkbox" name={"additionalFMAOwner"} value={this.props.fma} checked={this.props.fma} onChange={this.handleCheckChange} />
                                      <span className="checkmark" />
                                    </label>
                                  </div>
                                  <div className="col xl-12 flex f-row-reverse f-end">
                                    <label htmlFor="mur">
                                      MUR
                      </label>
                                    <label className="checkbox">
                                      <input id="mur" type="checkbox" name={"additionalMUROwner"} value={this.props.mur} checked={this.props.mur} onChange={this.handleCheckChange} />
                                      <span className="checkmark" />
                                    </label>
                                  </div>
                                  <div className="col xl-12 flex f-row-reverse f-end">
                                    <label htmlFor="mur">
                                      Pregnancy Questionnaire
                      </label>
                                    <label className="checkbox">
                                      <input id="mur" type="checkbox" name={"additionalPregnancyQuestionOwner"} value={this.props.additionalPregnancyQuestionOwner} checked={this.props.additionalPregnancyQuestionOwner} onChange={this.handleCheckChange} />
                                      <span className="checkmark" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </Fragment>
                )}
              </Fragment>)}
            </div>
        }
      </div>
    );
  }
}

export default OwnerinformationNew;