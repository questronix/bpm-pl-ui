import React, { Component, Fragment } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';

class InsuredinformationNew extends Component {

  constructor(props) {
    super(props);
    this.handleYesNoChange = this.handleYesNoChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
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
      <div className="App">
        <div className="container insured-details">
          <div className="col no-padding xl-12 flex f-justify-space-between">
            <h2 className="no-margin">
              Insured Details
            </h2>
            {!client && <span>Please wait..</span>}
            <p>
              <span className="fa fa-pencil-alt font-prulife"></span> - Editable field
            </p>
          </div>
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
              value={client && client.salutation}
              inputClass="col xl-3 input-container" />
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
            <Input
              txtboxClass="bg-lightgray"
              inputLabel="Email Addess:"
              inputClass="col xl-4 input-container"
              value={client && client.emailAdd}>
            </Input>
            <span className="fa fa-pencil-alt font-prulife e-content"></span>
            <Input
              txtboxClass="bg-lightgray"
              inputLabel="Telephone Number:"
              inputClass="col xl-4 input-container"
              value={client && client.telephoneNum}
            />
            <span className="fa fa-pencil-alt font-prulife e-content"></span>
            <Input
              txtboxClass="bg-lightgray"
              inputLabel="Mobile Number:"
              inputClass="col xl-4 input-container"
              value={client && client.mobileNum}
            />
            <span className="fa fa-pencil-alt font-prulife e-content"></span>
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
                name="isChangeInOccupation"
                title="Change Occupation"
                isRequired={false}
                isYesDefault={this.props.isChangeInOccupation}
                onSelect={this.handleYesNoChange}
              />
            </div>
            <Input
              txtboxClass="bg-lightgray"
              inputLabel="Occupation:"
              inputClass="col xl-4  input-container"
              // value={client && client.occupation1}
              value=""
            />
            <span className="fa fa-pencil-alt font-prulife e-content"></span>
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
              value={client && client.address[0].address1}
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
          <div className="xl-12 flex-container flex-wrap">
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
              <div className="col xl-12 flex f-center f-start no-padding">
                <span className="fa fa-info-circle font-prulife">
                </span> &nbsp;
                <h3 className="no-margin">
                  Additional Information
                </h3>
              </div>
              <div className="xl-12 flex-container flex-wrap">
                <div className="xl-12">
                  <YesNoRadio
                    name="isSOI"
                    title="Statement of Insurability Declarations"
                    isRequired={false}
                    isYesDefault={this.props.isSOI}
                    onSelect={this.handleYesNoChange}
                  />
                </div>
              </div>
              {this.props.isSOI && (
                <Fragment>
                  <div className="xl-12 flex-container flex-wrap">
                    <div className="xl-12">
                      <YesNoRadio
                        name="isPregnant"
                        title="Are you pregnant?"
                        isRequired={false}
                        isYesDefault={this.props.isPregnant}
                        onSelect={this.handleYesNoChange}
                      />
                    </div>
                  </div>
                  {this.props.isPregnant && (
                    <div className="xl-12 flex-container flex-wrap">
                      <div className="xl-12">
                        <p className="label flex no-margin required">
                          Additional requirements:
                      </p>
                        <div className="col xl-12 flex f-row-reverse f-end">
                          <label htmlFor="fma">
                            FME
                        </label>
                          <label className="checkbox">
                            <input id="fma" type="checkbox" name={"additionalFMA"} value={this.props.fma} checked={this.props.fma} onChange={this.handleCheckChange} />
                            <span className="checkmark" />
                          </label>
                        </div>
                        <div className="col xl-12 flex f-row-reverse f-end">
                          <label htmlFor="mur">
                            MUR
                        </label>
                          <label className="checkbox">
                            <input id="mur" type="checkbox" name={"additionalMUR"} value={this.props.mur} checked={this.props.mur} onChange={this.handleCheckChange} />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </Fragment>
              )}
            </Fragment>
          )}
        </div>

      </div >
    );
  }
}

export default InsuredinformationNew;