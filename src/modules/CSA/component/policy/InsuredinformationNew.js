import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class InsuredinformationNew extends Component {

  render() {

    return (
      <div className="App">
        <div className="flex-container flex-wrap">
          <div className="col xl-12 box-header">
            <h3 className="no-margin">
              Insured Details
            </h3>
          </div>
          <div className="col xl-12 flex f-center f-start">
            <span className="fa fa-user font-grass-green">
            </span> &nbsp;
            <h3 className="">
              Personal Information
            </h3>
          </div>
          <div className="col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="Cleint ID:"
              value={this.props.client.clientId}
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Salutation:"
              valuevalue={this.props.client.salutation}
              inputClass="col xl-4 input-container" />
            <Input
              inputLabel="Gender:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.gender}
              />
          </div>
          <div className="col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="First Name:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.firstName}
              />
            <Input
              inputLabel="Middle Name:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.middleName}
              />
            <Input
              inputLabel="Last Name:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.lastName}
              />
          </div>
          <div className="col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="Occupation:"
              inputClass="col xl-12 input-container"
              value={this.props.client.occupation1}
              />
          </div>
          <div className="col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="VIP:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.vipTag}
              />
            <Input
              inputLabel="HRC:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.hrcTag}
              />
            <Input
              inputLabel="STR:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.strTag}
              />
          </div>
          <div className="col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="Date of Birth:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.dateOfBirth}
              />
            <Input
              inputLabel="Attained Age:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.attainedAge}
              />
            <Input
              inputLabel="Nationality:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.nationality}
              />
          </div>
          <div className="col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="Civil Status:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.civilStatus}
              />
            <Input
              inputLabel="Telephone:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.telephoneNum}
              />
            <Input
              inputLabel="Mobile Number:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.mobileNum}
              />
          </div>
          <div className="col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="Email Addtess:"
              inputClass="col xl-8 input-container" 
              value={this.props.client.emailAdd}
              />
            <Input
              inputLabel="TIN:"
              inputClass="col xl-4 input-container" 
              value={this.props.client.tinNum}
              />
          </div>
          <div className="col xl-12 flex f-center f-start">
            <span className="fa fa-map-marker-alt font-grass-green">
            </span> &nbsp;
            <h3 className="no-margin">
              Present Address
            </h3>
          </div>
          <div className="col xl-12 flex-container flex-wrap">
            <Input
              inputLabel="Building/Street:"
              inputClass="col xl-6 input-container" 
             
              value={this.props.client.address && this.props.client.address[0].address1}
              />
            <Input
              inputLabel="City/Provinces:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[0].address2}
              />
            <Input
              inputLabel="Zip Code:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[0].zipCode}
              />
            <Input
              inputLabel="Country:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[0].address5}
              />
          </div>
          <div className="col xl-12 flex f-center f-start">
            <span className="fa fa-map-marker-alt font-grass-green">
            </span> &nbsp;
            <h3 className="no-margin">
              Permanent Address
            </h3>
          </div>
          <div className="col xl-12 flex-container flex-wrap">
          <Input
              inputLabel="Building/Street:"
              inputClass="col xl-6 input-container" 
             
              value={this.props.client.address && this.props.client.address[1].address1}
              />
            <Input
              inputLabel="City/Provinces:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[1].address2}
              />
            <Input
              inputLabel="Zip Code:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[1].zipCode}
              />
            <Input
              inputLabel="Country:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[1].address5}
              />
            </div>
          <div className="col xl-12 flex f-center f-start">
            <span className="fa fa-map-marker-alt font-grass-green">
            </span> &nbsp;
            <h3 className="no-margin">
              Business Address
            </h3>
          </div>
          <div className="col xl-12 flex-container flex-wrap">
          <Input
              inputLabel="Building/Street:"
              inputClass="col xl-6 input-container" 
             
              value={this.props.client.address && this.props.client.address[2].address1}
              />
            <Input
              inputLabel="City/Provinces:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[2].address2}
              />
            <Input
              inputLabel="Zip Code:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[2].zipCode}
              />
            <Input
              inputLabel="Country:"
              inputClass="col xl-6 input-container" 
              value={this.props.client.address && this.props.client.address[2].address5}
              />
          </div>
        </div>
      </div >
    );
  }
}

export default InsuredinformationNew;