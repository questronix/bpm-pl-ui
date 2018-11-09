import React, { Component, Fragment } from 'react';
import InsuredInformation from './InsuredInformation';
import CheckBoxAddon from '../../../../shared/component/checkbox/CheckBoxAddon';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';

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
      tabPage: 0,
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

    this.handleClick = this.handleClick.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
  }
  handleClick(e){
    this.setState({
      tabPage: e
    });
    this.props.onTabClick(e);
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

    // let tabHeader;
    // let tabBody;
    // let tabNav;

    // if (this.state.tabPage === 1) {
    //   tabHeader = "Tab Page 1";
    //   tabBody = <InsuredInformation insured={this.props.insured} />;
    // }
    // else if (this.state.tabPage === 2) {
    //   tabHeader = "Tab Page 2";
    // }


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
            {/* <div className="flex-container">
              <div className="col">
                <Tabs
                  tabHeader={tabHeader}
                  tabBody={tabBody}>
                </Tabs>
              </div>
            </div> */}
            <div className="flex-container flex-wrap">
              <div className="col">
                <div className="tabs col xl-12 l-12 m-12 s-12 xs-12">
                  <div className="tab-container flex-container no-padding col xl-12">
                    <div className={this.state.tabPage == 0 ? "tab-title col xl-2 l-2 m-2 s-2 xs-2 tab-active" : "tab-title col xl-2 l-2 m-2 s-2 xs-2"}>
                      <a name = "insured" onClick={()=>{this.handleClick(0)}}>Insured Information</a>
                    </div>
                     <div className={this.state.tabPage == 1 ? "tab-title col xl-2 l-2 m-2 s-2 xs-2 tab-active":"tab-title col xl-2 l-2 m-2 s-2 xs-2"}>
                     <a name="owner" onClick={()=>{this.handleClick(1)}}>Owner Information</a> 
                    </div> 
                  </div>
                  <div className="tab-body">
                  {this.state.tabPage == 0 ? (
                    <Fragment>
                      <InsuredInformation insured={this.props.insured} />
                    <hr />  
                    <div className="flex-container flex-wrap">
                      <div className="col flex-container flex-wrap">
                        {/* <CheckBox label="DowJones:" cName="dowJones" /> */}
                        <CheckBox label="With Diabetes:" cName="withDiabetes" />
                        <CheckBox label="With Hypertension:" cName="withHypertension" />
                        <CheckBox label="With Pregnancy:" cName="withPregnancy" />
                        <CheckBox label="MID:" cName="mid" />
                        <CheckBox label="FATCA Tagging:" cName="fatcaTagging" />
                        <CheckBoxAddon label="Statement of Insurability Declarations:" cVal={this.state.soi} cName="soi" onToggleChange={this.handleToggleChange}>
                          <div className="col xl-12">
                            <input type="text" className="col input" name="soiText" value={this.state.soiText} onChange={this.handleInputChange} />
                          </div>
                        </CheckBoxAddon>
                        <CheckBox label="Beyond MPT:" cName="beyondMPT" />
                        <CheckBox label="With Existing Policies:" cName="withExistingPolicies" />
                        <CheckBox label="With Pending Policies:" cName="withPendingPolicies" />
                        <CheckBox label="Signature verified:" cName="signatureVerified" />
                        <CheckBoxAddon label="With Reinstating Agent:" cVal={this.state.differentAgent} cName="differentAgent" onToggleChange={this.handleToggleChange}>
                          <div className="col xl-12">
                            <input type="number" className="col input" name="differentAgentText" value={this.state.differentAgentText} onChange={this.handleInputChange} />
                          </div>
                        </CheckBoxAddon>
                        <CheckBox label="With claim records:" cName="withClaimRecords" />
                        <CheckBox label="With Reinsurance:" cName="withReinsurance" />
                        <CheckBox label="With substandard rating:" cName="withSubstandardRating" />
                        <CheckBox label="Relative of Agent:" cName="relativeOfAgent" />
                        <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                        </div>
                      </div>
                    </div>
                    </Fragment>
                  ) :  (
                  <Fragment>
                  <InsuredInformation insured={this.props.insured} />
                  <hr />  
                  tab 2
                  <div className="flex-container flex-wrap">
                    <div className="col flex-container flex-wrap">
                      {/* <CheckBox label="DowJones:" cName="dowJones" /> */}
                      <CheckBox label="With Diabetes:" cName="withDiabetes" />
                      <CheckBox label="With Hypertension:" cName="withHypertension" />
                      <CheckBox label="With Pregnancy:" cName="withPregnancy" />
                      <CheckBox label="MID:" cName="mid" />
                      <CheckBox label="FATCA Tagging:" cName="fatcaTagging" />
                      <CheckBoxAddon label="Statement of Insurability Declarations:" cVal={this.state.soi} cName="soi" onToggleChange={this.handleToggleChange}>
                        <div className="col xl-12">
                          <input type="text" className="col input" name="soiText" value={this.state.soiText} onChange={this.handleInputChange} />
                        </div>
                      </CheckBoxAddon>
                      <CheckBox label="Beyond MPT:" cName="beyondMPT" />
                      <CheckBox label="With Existing Policies:" cName="withExistingPolicies" />
                      <CheckBox label="With Pending Policies:" cName="withPendingPolicies" />
                      <CheckBox label="Signature verified:" cName="signatureVerified" />
                      <CheckBoxAddon label="With Reinstating Agent:" cVal={this.state.differentAgent} cName="differentAgent" onToggleChange={this.handleToggleChange}>
                        <div className="col xl-12">
                          <input type="number" className="col input" name="differentAgentText" value={this.state.differentAgentText} onChange={this.handleInputChange} />
                        </div>
                      </CheckBoxAddon>
                      <CheckBox label="With claim records:" cName="withClaimRecords" />
                      <CheckBox label="With Reinsurance:" cName="withReinsurance" />
                      <CheckBox label="With substandard rating:" cName="withSubstandardRating" />
                      <CheckBox label="Relative of Agent:" cName="relativeOfAgent" />
                      <div className="can-toggle col xl-6 l-6 m-6 s-12 xs-12 can-toggle--size-small">
                      </div>
                    </div>
                  </div>
                  </Fragment>

                  )
                }
                    
                    
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