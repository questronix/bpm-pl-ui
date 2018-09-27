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
      if (""+hobby.id === name) {
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
            type="checkbox"/> {hobby.label} <br/>
        </div>
    });

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
          <label>Hazardous Hobbies: <br/>
            {hobbies}
          </label> <br/>
          {/* <input type="submit" value="submit"/> */}
        </form>
      </div>
    );
  }
}

export default Fatca;