import React, { Component } from 'react';

class Fatca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fatca: '',
      placeOfSigning: '',
      statementOfInsurablity: '',
      withDiabetes: false,
      withHypertension: false,
      withPregnancy: false,
      flightSSP: '',
      hazardousHobbies: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleRadioChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    // This will convert string to boolean
    const val = (value === "true") ? true : false;

    this.setState({
      [name]: val
    });
  }

  render() {

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="flex-containter flex-wrap col xl-6">
            <div className="col xl-12 f-center f-justify-between flex f-center f-justify-between">
              <label className="col xl-6">FATCA Tagging</label>
              <input className="input col xl-6"
                name="fatca"
                value={this.state.fatca}
                onChange={this.handleInputChange}
                type="text" />
            </div>
            <div className="col xl-12 f-center f-justify-between flex f-center f-justify-between">
              <label className="col xl-6">Place of Signing within the Philippines:</label>
              <input className="input col xl-6"
                name="placeOfSigning"
                value={this.state.placeOfSigning}
                onChange={this.handleInputChange}
                type="text" />
            </div>
            <div className="col xl-12 f-center f-justify-between flex f-center f-justify-between">
              <label className="col xl-6">Statement of Insurability:</label>
              <input className="input col xl-6"
                name="statementOfInsurablity"
                value={this.state.statementOfInsurablity}
                onChange={this.handleInputChange}
                type="text" />
            </div>
            <div className="col xl-12 f-center f-justify-between flex f-center f-justify-between">
              <label className="col xl-6">With Diabetes:</label>
              <input className="input col"
                name="withDiabetes"
                value="false"
                type="radio"
                checked={this.state.withDiabetes === false}
                onChange={this.handleRadioChange} /> No
            <input className="input col"
                name="withDiabetes"
                value="true"
                checked={this.state.withDiabetes === true}
                onChange={this.handleRadioChange}
                type="radio" /> Yes
              </div>
            <div className="col xl-12 f-center f-justify-between flex f-center f-justify-between">
              <label className="col xl-6">With Hypertension:</label>
              <input className="input col"
                name="withHypertension"
                value="false"
                checked={this.state.withHypertension === false}
                onChange={this.handleRadioChange}
                type="radio" /> No
            <input className="input col"
                name="withHypertension"
                value="true"
                checked={this.state.withHypertension === true}
                onChange={this.handleRadioChange}
                type="radio" /> Yes
              </div>
            <div className="col xl-12 f-center f-justify-between flex f-center f-justify-between">
              <label className="col xl-6">With Pregnancy:</label>
              <input className="input col"
                name="withPregnancy"
                value="false"
                checked={this.state.withPregnancy === false}
                onChange={this.handleRadioChange}
                type="radio" /> No
            <input className="input col"
                name="withPregnancy"
                value="true"
                checked={this.state.withPregnancy === true}
                onChange={this.handleRadioChange}
                type="radio" /> Yes
              </div>
            <div className="col xl-12 f-center f-justify-between flex f-center f-justify-between">
              <label className="col xl-6">Flight Stewardess/Steward/Pilot/Purser:</label>
              <input className="input col xl-6"
                name="flightSSP"
                value={this.state.flightSSP}
                onChange={this.handleInputChange}
                type="text" /> No
              </div>
            <div className="col xl-12 flex f-justify-between flex-container flex-wrap f-center">
              <h4 className="col xl-12">Hazardous Hobbies:</h4><br />
              <label className="col xl-6">Bungee Jumping</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <label className="col xl-6">Hang Gliding</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <label className="col xl-6">Horse Racing</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <label className="col xl-6">Motor Racing</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <label className="col xl-6">Mountain Climbing</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <label className="col xl-6">Parachuting</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <label className="col xl-6">Private Pilot (includig Gliding)</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <label className="col xl-6">Scuba Diving</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <label className="col xl-6">Sky Diving</label>
              <input className="input col xl-6 " name="hazardousHobbies" type="checkbox" />
              <input className="btn primary col xl-12 " type="submit" value="submit" />
            </div>
          </div>
        </form>

        {/* <select>
          <option value="1">Sample</option>
          <option value="1">sample 2</option>
        </select> */}
      </div >
    );
  }
}

export default Fatca;