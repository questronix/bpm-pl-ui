import React, { Component } from 'react';
import InsuredInformation from './InsuredInformation';
import CheckBoxAddon from '../../../shared/component/checkbox/CheckBoxAddon';
import CheckBox from '../../../shared/component/checkbox/CheckBox';

class Fatca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soi: false,
      soiText: '',
      differentAgent: false,
      differentAgentText: '',
      fatca: '',
      placeOfSigning: '',
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
    this.handleToggleChange = this.handleToggleChange.bind(this);
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
      [name]: !val
    });
  }

  handleToggleChange(name, value) {
    const val = (value === "true") ? true : false;

    this.setState({
      [name]: !val
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
    // const hobbies = this.state.hazardousHobbies
    //   .map((hobby, i) => {
    //     return <div key={i}>
    //       <input
    //         key={hobby.id}
    //         name={hobby.id}
    //         checked={hobby.value}
    //         onChange={this.handleMultiSelectChange}
    //         type="checkbox" /> {hobby.label} <br />
    //     </div>
    //   });

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className="flex-container flex-wrap">
              <div className="col">
                <div className="card-alt col xl-12 l-12 m-12 s-12 xs-12 no-padding">
                  <div className="card-header">
                    <h2 className="font-prugray no-padding no-margin">
                      Insured Information
                </h2>
              </div>
              <div className="card-body">
                <InsuredInformation insured={this.props.insured} />
                <hr />
                <div className="flex-container flex-wrap ">
                  <CheckBox label="DowJones:" cName="dowJones"/>
                  <CheckBox label="With Diabetes:" cName="withDiabetes"/>
                  <CheckBox label="With Hypertension:" cName="withHypertension"/>
                  <CheckBox label="With Pregnancy:" cName="withPregnancy"/>
                  <CheckBox label="MID:" cName="mid"/>
                  <CheckBox label="FATCA Tagging:" cName="fatcaTagging"/>
                  <CheckBoxAddon label="Statement of Insurability Declarations:" cVal={this.state.soi} cName="soi" onToggleChange={this.handleToggleChange}>
                      <input type="text" className="col" name="soiText" value={this.state.soiText} onChange={this.handleInputChange}/>
                  </CheckBoxAddon>
                  <CheckBox label="Beyond MPT:" cName="beyondMPT"/>
                  <CheckBox label="With Existing Policies:" cName="withExistingPolicies"/>
                  <CheckBox label="With Pending Policies:" cName="withPendingPolicies"/>
                  <CheckBoxAddon label="With Different Agent:" cVal={this.state.differentAgent} cName="differentAgent" onToggleChange={this.handleToggleChange}>
                      <input type="number" className="col" name="differentAgentText" value={this.state.differentAgentText} onChange={this.handleInputChange}/>
                  </CheckBoxAddon>
{/*                   
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="dowJones"
                      type="checkbox"
                      name="dowJones" />
                    <label className="flex f-justify-space-between" htmlFor="dowJones">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">Dow Jones:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="Diabetes"
                      type="checkbox"
                      name="withDiabetes" />
                    <label className=" flex f-justify-space-between" htmlFor="Diabetes">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">With Diabetes:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="Hypertension"
                      type="checkbox"
                      name="withHypertension" />
                    <label className="flex f-justify-space-between" htmlFor="Hypertension">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">With Hypertension:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="withPregnancy"
                      type="checkbox"
                      name="withPregnancy"
                      value="false" />
                    <label className="flex f-justify-space-between" htmlFor="withPregnancy">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">With Pregnancy:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="mid"
                      type="checkbox"
                      name="mid" />
                    <label className="flex f-justify-space-between" htmlFor="mid">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">MID:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="fatca"
                      type="checkbox"
                      name="fatca"
                      value="false" />
                    <label className="flex f-justify-space-between" htmlFor="fatca">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">FATCA Tagging:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <CheckBoxAddon label="Statement of Insurability Declarations:" cVal={this.state.soi} cName="soi" onToggleChange={this.handleToggleChange}>
                      <input type="text" className="col" name="soiText" value={this.state.soiText} onChange={this.handleInputChange}/>
                  </CheckBoxAddon>
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="beyondMPT"
                      type="checkbox"
                      name="beyondMPT"
                      value="false" />
                    <label className="flex f-justify-space-between" htmlFor="beyondMPT">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">Beyond MPT:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="withExisitingPolicies"
                      type="checkbox"
                      name="withExisitingPolicies"
                      value="false" />
                    <label className="flex f-justify-space-between" htmlFor="withExisitingPolicies">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">With Existing Policies:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                    <input
                      id="wihtPendingPolicies"
                      type="checkbox"
                      name="wihtPendingPolicies"
                      value="false" />
                    <label className="flex f-justify-space-between" htmlFor="wihtPendingPolicies">
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__label-text">With Pending Policies:</div>
                      <div className="col xl-6 l-6 m-6 s-12 xs-12 no-padding can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                    </label>
                  </div>
                  <CheckBoxAddon label="With Different Agent:" cVal={this.state.differentAgent} cName="differentAgent" onToggleChange={this.handleToggleChange}>
                      <input type="number" className="col" name="differentAgentText" value={this.state.differentAgentText} onChange={this.handleInputChange}/>
                  </CheckBoxAddon> */}

                    {/* TODO: Tentative display. Will confirm this to sir mic */}
                    {/* <hr/> */}
                    {/* <div className="col xl-12 flex-container flex-wrap">
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
                    </div> */}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </form>
      </div >
    );
  }
}

export default Fatca;