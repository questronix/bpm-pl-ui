import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';

class ProcessingDetails extends Component {

  constructor(props) {
    super(props);
    this.handleYesNoChange = this.handleYesNoChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleYesNoChange(name, value) {
    this.props.onYesNoSelect(name, value);
  }

  handleInputChange(name, value) {
    this.props.onTextChange(name, value);
  }

  render() {
    return (
      <div className="App processor-container">
        <hr/>
        <div className="col xl-12 margin-auto flex-container flex-wrap">
          <div className="xl-6 mb">
            <YesNoRadio
              name="isDowJones"
              title="Dow Jones"
              isRequired={false}
              isYesDefault={this.props.isDowJones}
              onSelect={this.handleYesNoChange}
            />
          </div>
          <div className="xl-6 mb">
            <YesNoRadio
              name="isMid"
              title="MID"
              isRequired={false}
              isYesDefault={this.props.isMid}
              onSelect={this.handleYesNoChange}
            />
          </div>
          <Input
            name="mpt"
            value={this.props.mpt}
            inputPlaceholder="MPT"
            inputClass="input-container xl-6 "
            inputLabel="MPT:"
            txtboxClass="bg-lightgray"
            onInputChange={this.handleInputChange} 
          />
          <div className="xl-6 mb">
            <YesNoRadio
              name="isBeyondMpt"
              title="Beyond MPT"
              isRequired={false}
              isYesDefault={this.props.isBeyondMpt}
              onSelect={this.handleYesNoChange}
            />
          </div>
        </div>
        <div className="border-top border-lightgray flex f-end p">
          <button className="btn prulife ">
           Submit
          </button>
        </div>
      </div >
    );
  }
}

export default ProcessingDetails;