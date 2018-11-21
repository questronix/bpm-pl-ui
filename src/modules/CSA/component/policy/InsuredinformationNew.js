import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class InsuredinformationNew extends Component {

  render() {

    return (
      <div>
        {this.props.type === "approver" &&
          <div className="App">
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-user font-prulife">
              </span> &nbsp;
            <h3 className="no-margin">
                Personal Information
            </h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Cleint ID:"
                value={this.props.client.clientId}
                inputClass="col xl-3 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="First Name:"
                inputClass="col xl-3 input-container"
                value={this.props.client.firstName}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Middle Name:"
                inputClass="col xl-3 input-container"
                value={this.props.client.middleName}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Last Name:"
                inputClass="col xl-3 input-container"
                value={this.props.client.lastName}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <div className="xl-3 flex-container flex-wrap">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Date of Birth:"
                  inputClass="col xl-7 input-container"
                  value={this.props.client.dateOfBirth}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Attained Age:"
                  inputClass="col xl-4 input-container"
                  value={this.props.client.attainedAge}
                />
              </div>
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Civil Status:"
                inputClass="col xl-3 input-container"
                value={this.props.client.civilStatus}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Salutation:"
                valuevalue={this.props.client.salutation}
                inputClass="col xl-3 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Gender:"
                inputClass="col xl-3 input-container"
                value={this.props.client.gender}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Nationality:"
                inputClass="col xl-3 input-container"
                value={this.props.client.nationality}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="VIP:"
                inputClass="col xl-3 input-container"
                value={this.props.client.vipTag}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="HRC:"
                inputClass="col xl-3 input-container"
                value={this.props.client.hrcTag}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="STR:"
                inputClass="col xl-3 input-container"
                value={this.props.client.strTag}
              />
            </div>
            {/* CHECK POINT */}
            <div className="xl-12 flex-container flex-wrap">
              <Input
                // classRequired="editable"
                txtboxClass="bg-lightgray"
                inputLabel="Email Addtess:"
                inputClass="col xl-4 input-container"
                value={this.props.client.emailAdd}>
                {/* <span className="fa fa-pencil-alt font-prulife"></span> */}
              </Input>
              <Input
                txtboxClass="bg-lightgray"
                inputLabel="Telephone Number:"
                inputClass="col xl-4 input-container"
                value={this.props.client.telephoneNum}
              />
              <Input
                txtboxClass="bg-lightgray"
                inputLabel="Mobile Number:"
                inputClass="col xl-4 input-container"
                value={this.props.client.mobileNum}
              />
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
                value={this.props.client.occupation1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="TIN/GSIS:"
                inputClass="col xl-2 input-container"
                value={this.props.client.tinNum}
              />
              <div className="xl-2">
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
                inputClass="col xl-4  input-container"
                value={this.props.client.occupation1}
              />
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
                value={this.props.client.address && this.props.client.address[0].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[0].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[0].address5}
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

                value={this.props.client.address && this.props.client.address[1].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[1].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[1].address5}
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

                value={this.props.client.address && this.props.client.address[2].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[2].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[2].address5}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap col">
              <div className="xl-2">
                <p className="label flex no-margin">
                  Change in Address:  &nbsp;<span className="fa fa-pencil-alt font-prulife"></span>
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
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-info-circle font-prulife">
              </span> &nbsp;
            <h3 className="no-margin">
                Additional Information
            </h3>
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
          <div className="App">
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-user font-prulife">
              </span> &nbsp;
                    <h3 className="no-margin">
                Personal Information
                    </h3>
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Cleint ID:"
                value={this.props.client.clientId}
                inputClass="col xl-3 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="First Name:"
                inputClass="col xl-3 input-container"
                value={this.props.client.firstName}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Middle Name:"
                inputClass="col xl-3 input-container"
                value={this.props.client.middleName}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Last Name:"
                inputClass="col xl-3 input-container"
                value={this.props.client.lastName}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <div className="xl-3 flex-container flex-wrap">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Date of Birth:"
                  inputClass="col xl-7 input-container"
                  value={this.props.client.dateOfBirth}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Attained Age:"
                  inputClass="col xl-4 input-container"
                  value={this.props.client.attainedAge}
                />
              </div>
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Civil Status:"
                inputClass="col xl-3 input-container"
                value={this.props.client.civilStatus}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Salutation:"
                valuevalue={this.props.client.salutation}
                inputClass="col xl-3 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Gender:"
                inputClass="col xl-3 input-container"
                value={this.props.client.gender}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Nationality:"
                inputClass="col xl-3 input-container"
                value={this.props.client.nationality}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="VIP:"
                inputClass="col xl-3 input-container"
                value={this.props.client.vipTag}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="HRC:"
                inputClass="col xl-3 input-container"
                value={this.props.client.hrcTag}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="STR:"
                inputClass="col xl-3 input-container"
                value={this.props.client.strTag}
              />
            </div>
            {/* CHECK POINT */}
            <div className="xl-12 flex-container flex-wrap">
              <Input
                // classRequired="editable"
                txtboxClass="bg-lightgray"
                inputLabel="Email Addtess:"
                inputClass="col xl-4 input-container"
                value={this.props.client.emailAdd}>
                {/* <span className="fa fa-pencil-alt font-prulife"></span> */}
              </Input>
              <Input
                txtboxClass="bg-lightgray"
                inputLabel="Telephone Number:"
                inputClass="col xl-4 input-container"
                value={this.props.client.telephoneNum}
              />
              <Input
                txtboxClass="bg-lightgray"
                inputLabel="Mobile Number:"
                inputClass="col xl-4 input-container"
                value={this.props.client.mobileNum}
              />
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
                value={this.props.client.occupation1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="TIN/GSIS:"
                inputClass="col xl-2 input-container"
                value={this.props.client.tinNum}
              />
              <div className="xl-2">
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
                inputClass="col xl-4  input-container"
                value={this.props.client.occupation1}
              />
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
                value={this.props.client.address && this.props.client.address[0].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[0].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[0].address5}
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

                value={this.props.client.address && this.props.client.address[1].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[1].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[1].address5}
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

                value={this.props.client.address && this.props.client.address[2].address1}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Zip Code:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[2].zipCode}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Country:"
                inputClass="col xl-2 input-container"
                value={this.props.client.address && this.props.client.address[2].address5}
              />
            </div>
            <div className="xl-12 flex-container flex-wrap col">
              <div className="xl-2">
                <p className="label flex no-margin">
                  Change in Address:  &nbsp;<span className="fa fa-pencil-alt font-prulife"></span>
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
            <div className="col xl-12 flex f-center f-start">
              <span className="fa fa-info-circle font-prulife">
              </span> &nbsp;
                    <h3 className="no-margin">
                Additional Information
                    </h3>
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
                <div className="col xl-12 flex f-row-reverse f-end">
                  <label htmlFor="questionnaire">
                    Pregnancy Questionnaire
                </label>
                  <label className="checkbox">
                    <input id="questionnaire" type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>}
      </div>
    );
  }
}

export default InsuredinformationNew;