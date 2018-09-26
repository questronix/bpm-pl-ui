import React, { Component } from 'react';
import './App.css';
import Login from './modules/login/component/Login';

class App extends Component {

  render() {
    return (
      <Login />
      // <div className="App">
      //   <label>Policy Number</label>
      //   <input type="text"/>
      //   <button>Search</button>
      //   <hr/>
      //   <h1>Policy Information</h1>
      //   <label>Policy Number</label>
      //   <input type="text" disabled/>
      //   <label>Policy Status</label>
      //   <input type="text" disabled/><br/>
      //   <label>Insured Client ID</label>
      //   <input type="text" disabled/>
      //   <label>Insured Name</label>
      //   <input type="text" disabled/><br/>
      //   <label>Owner Client ID</label>
      //   <input type="text" disabled/>
      //   <label>Policy Owner Name</label>
      //   <input type="text" disabled/><br/>
      //   <label>Risk Commencement Date (RCD)</label>
      //   <input type="text" disabled/>
      //   <label>Agent Code</label>
      //   <input type="text" disabled/><br/>
      //   <label>Agent Name</label>
      //   <input type="text" disabled/>
      //   <label>Agent NMA</label>
      //   <input type="text" disabled/><br/>
      //   <label>Nationality</label>
      //   <input type="text" disabled/>
      //   <label>Occupation</label>
      //   <input type="text" disabled/><br/>
      //   <label>Attained Age</label>
      //   <input type="text" disabled/>
      //   <label>Mobile Number</label>
      //   <input type="text" disabled/><br/>
      //   <label>Email Address</label>
      //   <input type="text" disabled/>
      //   <label>Date Of Application</label>
      //   <input type="text" disabled/><br/>
      //   <label>Present Address</label>
      //   <input type="text" disabled/><br/>
      //   <label>Permanent Address</label>
      //   <input type="text" disabled/><br/>
      //   <label>Business Address</label>
      //   <input type="text" disabled/><br/>
      //   <hr/>
      //   <label>FATCA Tagging</label>
      //   <input type="text"/><br/>
      //   <label>Place of Signing within the Philippines</label>
      //   <input type="text"/>
      //   <label>Statement of Insurability</label>
      //   <input type="text"/><br/>
      //   <label>With Diabetes</label>
      //   <input type="checkbox"/> Yes
      //   <input type="checkbox"/> No<br/>
      //   <label>With Hypertension</label>
      //   <input type="checkbox"/> Yes
      //   <input type="checkbox"/> No<br/>
      //   <label>With Pregnancy</label>
      //   <input type="checkbox"/> Yes
      //   <input type="checkbox"/> No<br/>
      //   <label>Flight Stewardess/Steward/Pilot/Purser</label>
      //   <input type="text"/> No<br/>
      //   <label>Hazardous Hobbies</label> <br/>
      //   <input type="checkbox"/> Bungee Jumping <br/>
      //   <input type="checkbox"/> Hang Gliding <br/>
      //   <input type="checkbox"/> Horse Racing<br/>
      //   <input type="checkbox"/> Motor Racing<br/>
      //   <input type="checkbox"/> Mountain Climbing <br/>
      //   <input type="checkbox"/> Parachuting <br/>
      //   <input type="checkbox"/> Private Pilot (includig Gliding) <br/>
      //   <input type="checkbox"/> Scuba Diving <br/>
      //   <input type="checkbox"/> Sky Diving <br/>
      //   <input type="button" value="submit"/>
      // </div>
    );
  }
}

export default App;
