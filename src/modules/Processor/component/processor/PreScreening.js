import React, {Component}from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import CardImg from '../../../../shared/component/Widgets/CardImg';
import Tab from '../../../../shared/component/tabs/Tab'
import Input from '../../../../shared/component/input/Input';
class PrescreeningInfo extends Component{
  
  constructor(props){
    super(props);
    this.state={
      Tabs: 0,
    }
    this.handleTabClick = this.handleTabClick.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  handleTabClick() {
    if (this.state.Tabs == 3) {
      this.setState({
        Tabs: 3
      });
    } else {
      this.setState({
        Tabs: this.state.Tabs + 1
      });
    }
  }

  decrement() {
    this.setState({
      Tabs: this.state.Tabs - 1
    });
  }
  
  render(){
    return (
      <div>
        <div className="xl-12">
          <div className="box">
            {/* <Tab>
              <div label="Step 1">
                Content Step 1
              </div>
              <div label="Step 2">
                Content Step 2
              </div>
              <div label="Step 3">
                Content Step 3
              </div>
              <div label="Step 4">
                Content Step 4
              </div>
            </Tab> */}
            <div className="tab-title-container">
              <div className={this.state.Tabs== 0 ? "tab-title active" : "tab-title"}>
                <h4 className="circle"> 
                  1
                </h4>
                <h4>
                 <a onClick={() => {this.handleTabClick(0)}}> 
                 Transaction Selection</a>
                </h4>
                <span class="white"></span><span class="gray"></span>
              </div>
              <div className={this.state.Tabs== 1 ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  2
                </h4>
                <h4>
                <a onClick={() => {this.handleTabClick(1)}}> 
                Additional Prolicy info</a>
                </h4>
                <span class="white"></span><span class="gray"></span>
              </div>
              <div className={this.state.Tabs== 2 ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  3
                </h4>
                <h4>
                <a onClick={() => {this.handleTabClick(2)}}> 
                Insured Details</a>
                </h4>
                <span class="white"></span><span class="gray"></span>
              </div>
              <div className={this.state.Tabs== 3 ? "tab-title active" : "tab-title"}>
                <h4 className="circle">
                  4
                        </h4>
                <h4>
                <a onClick={() => {this.handleTabClick(3)}}> 
                Owner Details</a>
                        </h4>
              </div>
            </div>
            <div className="box-body">
              <h3 className="box-header no-margin">
                Policy Information
              </h3>
              <div className="container flex f-justify-evenly">
                <Input
                  inputLabel="transaction type"
                  inputPlaceholder="transaction type" />
                <Input
                  inputLabel="Policy Number"
                   inputPlaceholder={this.props.insuredInfo.policy.number}
                   />
                <Input
                  inputLabel="Transaction Number"
                  inputPlaceholder="Transaction Number"
                  inputClass="input-container" />
                <Input
                  inputLabel="Sum Assured"
                  inputPlaceholder={this.props.insuredInfo.policy.productType}
                  inputClass="input-container" />
                <Input
                  inputLabel="Created Date"
                  inputPlaceholder="Created Date"
                  inputClass="input-container" />
              </div>
              <div className="flex f-end container">11
                <a href="#" className="text-with-icon">
                  Show more
                  &nbsp; <span className="fa fa-chevron-down"></span>
                </a>
              </div>
              <hr />
            </div>
            <div className="box-body">

              {/* this is for tab1 */}
              {this.state.Tabs == 0 ?

                <div>
                  <div className="box-header flex f-row f-justify-space-between">
                    <div className="flex-container">
                      <h4 className="no-margin">
                        Transaction type:
                  </h4>
                      <select>
                        <option>Reinstatement</option>
                      </select>
                    </div>
                    <div className="">
                      <h4 className="no-margin">
                        Transaction Number: 1022020
                  </h4>
                    </div>
                  </div>
                  <form className="flex f-justify-evenly container">
                    <div className="">
                      <input name="transaction" id="Updating" type="radio" />
                      <label for="Updating">
                        Updating
                  </label>
                    </div>
                    <div className="">
                      <input name="transaction" id="Redating" type="radio" />
                      <label for="Redating">
                        Redating
                </label>
                    </div>
                    <div className="">
                      <input name="transaction" id="Waiver" type="radio" />
                      <label for="Waiver">
                        Waiver
                </label>
                    </div>
                  </form>
                  <div class="transaction-checkboxes margin-auto">
                    <table border="0" cellspacing="0">
                      <tr>
                        <td><label for="health">Health Statement Form (HSF)</label></td>
                        <td><input id="health" type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td><label for="routine">U/W routine requirements</label></td>
                        <td><input id="routine" type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td><label for="payment">Payment of Premium Arrears</label></td>
                        <td><input id="payment" type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td><label for="specimen">Specimen Signature Form (if applicable)</label></td>
                        <td><input id="specimen" type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td><label for="valid">Valid Government Issued ID (if applicable)</label></td>
                        <td><input id="valid" type="checkbox" /></td>
                      </tr>
                      <tr>
                        <td><label for="non-government">Valid Non-Government Issued ID (if applicable)</label></td>
                        <td><input id="non-government" type="checkbox" /></td>
                      </tr>
                    </table>
                  </div>
                  <hr />
                  <div className="flex f-end container">
                    <a href="#" className="btn bright-blue" onClick={this.handleTabClick}>
                      Additional Policy Information
                </a>
                  </div>
                </div>

                : ""}
              {/* this is for tab2 */}
              {this.state.Tabs == 1 ?
                <div>
                  <div className="flex f-center">

                  </div>
                  <div className="flex f-justify-space-between container">
                    <a href="#" className="btn bright-blue" onClick={this.decrement}>
                      Transaction Selection
                   </a>
                    <a href="#" className="btn bright-blue" onClick={this.handleTabClick}>
                      Insured Details
                   </a>
                  </div>
                </div> : ""}

              {/* this is for tab3 */}
              {this.state.Tabs == 2 ?
                <div>
                  <div className="flex f-justify-space-between container">
                    <a href="#" className="btn bright-blue" onClick={this.decrement}>
                      Additional Policy Info
                   </a>
                    <a href="#" className="btn bright-blue" onClick={this.handleTabClick}>
                      Owner Details
                   </a>
                  </div>
                </div> : ""}
              {/* this is for tab4 */}
              {this.state.Tabs == 3 ?
                <div>
                  <div className="flex f-justify-space-between container">
                    <a href="#" className="btn bright-blue" onClick={this.decrement}>
                      Insured Details
                   </a>
                    <a href="#" className="btn bright-blue" onClick={this.handleTabClick}>
                      Submit
                   </a>
                  </div>
                </div> : ""}

            </div>
          </div>
        </div>

        <Tab>
          <div label="transaction 1" num="1">
            Test
           </div>
          <div label="transaction 2" num="2">
            Test2
           </div>
          <div label="transaction 3" num="3">
            Test32
           </div>
          <div label="transaction 4 " num="4">
            Test2151
           </div>
        </Tab>
        {/* Please Bind the appropriate data to the top ^^^^^^
        Raference VVVV */}
          {/* <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap tab-body">
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Policy Number :</label>
              <input value={this.props.insuredInfo.policy.number} className="col input disabled" type="text" disabled />
            </div> */}
            {/* <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Product Type :</label>
              <input value={insuredInfo.policy.sumAssured} className="col input disabled" type="text" disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label className="label">Sum Assured :</label>
              <input value={insuredInfo.policy.productType} className="col input disabled" type="text" disabled />
            </div>
            <CheckBox class=" col" label="FATCA Tagging :" cName="fatcaTagging" />
            <div value={insuredInfo.policy.fatcaTagging} className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
            </div>
          </div>
          <hr className="xl-11" />
          <div className="header">
            <h3 className="font-prulife">
              Client
            </h3>
          </div>
          <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap tab-body">
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label>Cleint type :</label>
              <input value={insuredInfo.client.type} className="col input disabled" type="text" disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label>Attain Age :</label>
              <input value={insuredInfo.client.attainedAge} className="col input disabled" type="text" disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label>Client Tagging :</label>
              <input value={insuredInfo.client.clientTagging} className="col input disabled" type="text" disabled />
            </div>
            <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              <label>Statement of Insurability :</label>
              <input value={insuredInfo.client.soi} className="col input disabled" type="text" disabled />
            </div>
            <CheckBox value={insuredInfo.client.mid} class=" col" label="MID :" cName="mid" />
            <CheckBox value={insuredInfo.client.dowJones} class=" col" label="Dow Jones Hit :" cName="dowJonesHit" />
            <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
            </div> */}
          {/* </div> */}
      </div>
    );
  }
}
export default PrescreeningInfo;