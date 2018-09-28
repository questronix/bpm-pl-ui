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
          <div>
            <div className="flex-containter flex-wrap">
              <div className="padding-10">
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
                    <hr />
                    <div className="flex-container flex-wrap ">
                      <div class="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                        <input
                          id="Diabetes"
                          type="checkbox"
                          name="withDiabetes" />
                        <label className=" flex f-justify-space-between" for="Diabetes">
                          <div class="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">With Diabetes:</div>
                          <div class="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                        </label>
                      </div>
                      <div class="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                        <input
                          id="Hypertension"
                          type="checkbox"
                          name="withHypertension" />
                        <label className="flex f-justify-space-between" for="Hypertension">
                          <div class="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">With Hypertension:</div>
                          <div class="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                        </label>
                      </div>
                      <div class="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                        <input
                          id="withPregnancy"
                          type="checkbox"
                          name="withPregnancy"
                          value="false" />
                        <label className="flex f-justify-space-between" for="withPregnancy">
                          <div class="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">With Pregnancy:</div>
                          <div class="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                        </label>
                      </div>
                      <div class="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                        <input
                          id="test"
                          type="checkbox"
                          name="withPregnancy"
                          value="false" />
                        <label className="flex f-justify-space-between" for="test">
                          <div class="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">Test</div>
                          <div class="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                        </label>
                      </div>
                    </div>
                    <hr />
                    {/* <div>
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
              </div> */}
                    <div className="col xl-12 flex-container flex-wrap">
                      <h4 className="col xl-12">Hazardous Hobbies:</h4><br />
                      <div className="col xl-6 flex">
                        <label className="checkbox">Bungee Jumping
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col xl-6 flex">
                        <label className="checkbox">Hang Gliding
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col xl-6 flex">
                        <label className="checkbox">Horse Racing
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col xl-6 flex">
                        <label className="checkbox">Motor Racing
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col xl-6 flex">
                        <label className="checkbox">Mountain Climbing
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col xl-6 flex">
                        <label className="checkbox">Parachuting
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col xl-6 flex">
                        <label className="checkbox">Private Pilot (includig Gliding)
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col xl-6 flex">
                        <label className="checkbox">Scuba Diving
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col xl-6 flex">
                        <label className="checkbox">Sky Diving
                    <input className="" name="hazardousHobbies" type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
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