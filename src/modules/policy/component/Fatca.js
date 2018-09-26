import React, {Component} from 'react';

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
          <label>FATCA Tagging
            <input
              name="fatca" 
              value={this.state.fatca}
              onChange={this.handleInputChange}
              type="text"/><br/>
          </label>
          <label>Place of Signing within the Philippines: 
            <input 
              name="placeOfSigning"
              value={this.state.placeOfSigning}
              onChange={this.handleInputChange}
              type="text"/>
          </label>
          <label>Statement of Insurability:
            <input 
              name="statementOfInsurablity"
              value={this.state.statementOfInsurablity}
              onChange={this.handleInputChange}
              type="text"/><br/>
          </label>
          <br/>
          <label>With Diabetes: 
            <input 
              name="withDiabetes"
              value="false"
              type="radio"
              checked={this.state.withDiabetes === false}
              onChange={this.handleRadioChange}/> No
            <input 
              name="withDiabetes"
              value="true"
              checked={this.state.withDiabetes === true}
              onChange={this.handleRadioChange}
              type="radio"/> Yes
          </label>
          <br/>
          <label>With Hypertension: 
            <input 
              name="withHypertension"
              value="false"
              checked={this.state.withHypertension === false}
              onChange={this.handleRadioChange}
              type="radio"/> No
            <input 
              name="withHypertension"
              value="true"
              checked={this.state.withHypertension === true}
              onChange={this.handleRadioChange}
              type="radio"/> Yes
          </label>        
          <br/>
          <label>With Pregnancy: 
            <input 
              name="withPregnancy"
              value="false"
              checked={this.state.withPregnancy === false}
              onChange={this.handleRadioChange}
              type="radio"/> No
            <input 
              name="withPregnancy"
              value="true"
              checked={this.state.withPregnancy === true}
              onChange={this.handleRadioChange}
              type="radio"/> Yes
          </label>        
          <br/>
          <label>Flight Stewardess/Steward/Pilot/Purser: 
            <input 
            name="flightSSP"
            value={this.state.flightSSP}
            onChange={this.handleInputChange}
            type="text"/> No<br/>
          </label>
          <label>Hazardous Hobbies: 
            <input name="hazardousHobbies" type="checkbox"/> Bungee Jumping <br/>
            <input name="hazardousHobbies" type="checkbox"/> Hang Gliding <br/>
            <input name="hazardousHobbies" type="checkbox"/> Horse Racing<br/>
            <input name="hazardousHobbies" type="checkbox"/> Motor Racing<br/>
            <input name="hazardousHobbies" type="checkbox"/> Mountain Climbing <br/>
            <input name="hazardousHobbies" type="checkbox"/> Parachuting <br/>
            <input name="hazardousHobbies" type="checkbox"/> Private Pilot (includig Gliding) <br/>
            <input name="hazardousHobbies" type="checkbox"/> Scuba Diving <br/>
            <input name="hazardousHobbies" type="checkbox"/> Sky Diving <br/>
          </label> <br/>
          <input type="submit" value="submit"/>
        </form>
        
        {/* <select>
          <option value="1">Sample</option>
          <option value="1">sample 2</option>
        </select> */}
      </div>
    );
  }
}

export default Fatca;