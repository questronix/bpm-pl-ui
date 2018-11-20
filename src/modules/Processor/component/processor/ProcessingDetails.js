import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import PolicyInfoHeader from '../../../CSA/component/policy/PolicyInfoHeader';
import AgentInfoHeader from '../../../CSA/component/policy/AgentInfoHeader';

class ProcessingDetails extends Component {
  render() {
    return (
      <div className="App processor-container">
        <hr/>
        <div className="col xl-12 flex-container flex-wrap">
          <div className="col xl-6">
            <p className="label flex no-margin">
              Daw Jones:
            </p>
            <div className="col no-padding xl-12">
              <label className="checkbox container" htmlFor="yes">Yes
                    <input type="radio" id="yes" name="DawJones" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox container" htmlFor="no">No
                  <input type="radio" id="no" name="DawJones" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="xl-6">
            <p className="label flex no-margin">
              MID:
            </p>
            <div className="col no-padding xl-12">
              <label className="checkbox container" htmlFor="yes1">Yes
                    <input type="radio" id="yes1" name="mid" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox container" htmlFor="no1">No
                  <input type="radio" id="no1" name="mid" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <Input
              txtboxClass="bg-lightgray"
              inputLabel="Country:"
              inputClass="col xl-6 input-container"
            />
          <div className="xl-6">
            <p className="label flex no-margin">
              Beyont MPT:
            </p>
            <div className="col no-padding xl-12">
              <label className="checkbox container" htmlFor="yes2">Yes
                    <input type="radio" id="yes2" name="mpt" />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox container" htmlFor="no2">No
                  <input type="radio" id="no2" name="mpt" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default ProcessingDetails;