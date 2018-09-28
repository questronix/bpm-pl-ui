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
      hazardousHobbies: [
        {
          id: 1,
          label: 'Bungee Jumping',
          value: false,
        },
        {
          id: 2,
          label: 'Hang Gliding',
          value: false,
        },
        {
          id: 3,
          label: 'Horse Racing',
          value: false,
        },
        {
          id: 4,
          label: 'Motor Racing',
          value: false,
        },
        {
          id: 5,
          label: 'Mountain Climbing',
          value: false,
        },
        {
          id: 6,
          label: 'Parachuting',
          value: false,
        },
        {
          id: 7,
          label: 'Private Pilot (including Gliding)',
          value: false,
        },
        {
          id: 8,
          label: 'Scuba Diving',
          value: false,
        },
        {
          id: 9,
          label: 'Sky Diving',
          value: false,
        },
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
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

  handleMultiSelectChange(event) {
    const target = event.target;
    const name = target.name;
    const checked = target.checked;

    const hh = this.state.hazardousHobbies;
    hh.forEach((hobby) => {
      if ("" + hobby.id === name) {
        hobby.value = checked;
      }
    });

    this.setState({ hazardousHobbies: hh });
  }

  render() {
    const hobbies = this.state.hazardousHobbies
      .map((hobby, i) => {
        return <div key={i}>
          <input
            key={hobby.id}
            name={hobby.id}
            checked={hobby.value}
            onChange={this.handleMultiSelectChange}
            type="checkbox" /> {hobby.label} <br />
        </div>
      });

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="flex-containter flex-wrap col xl-12">
            <div className="card col xl-12 l-12 m-12 s-12 xs-12 no-padding">
              <div className="card-header bg-prulife">
                <h3 className="font-white no margin">
                  Insured Information
                </h3>
              </div>
              <div className="card-body">
                <div className="col xl-12 flex f-center f-justify-space-between">
                  <label>FATCA Tagging</label>
                  <input className="input col xl-6"
                    name="fatca"
                    value={this.state.fatca}
                    onChange={this.handleInputChange}
                    type="text" />
                </div>
                <div className="col xl-12 flex f-center f-justify-space-between">
                  <label>Place of Signing within the Philippines:</label>
                  <input className="input col xl-6"
                    name="placeOfSigning"
                    value={this.state.placeOfSigning}
                    onChange={this.handleInputChange}
                    type="text" />
                </div>
                <div className="col xl-12 flex f-center f-justify-space-between">
                  <label>Statement of Insurability:</label>
                  <input className="input col xl-6"
                    name="statementOfInsurablity"
                    value={this.state.statementOfInsurablity}
                    onChange={this.handleInputChange}
                    type="text" />
                </div>
                <div>
                  <label>With Diabetes:</label>
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
                    <div className="col xl-12 flex f-center f-justify-space-between">
                    <div class="can-toggle can-toggle--size-small">
                      <input id="b" type="checkbox" />
                      <label for="b">
                        <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                        <div class="can-toggle__label-text">With Diabetes:</div>
                      </label>
                    </div>
                  </div>

                </div>
                <div>
                  <label>With Hypertension:</label>
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
                <div>
                  <label>With Pregnancy:</label>
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
                <div>
                  <label>Flight Stewardess/Steward/Pilot/Purser:</label>
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