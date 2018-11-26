import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';

class ProcessorHeader extends Component {

  formatDate(dt) {
    const d = new Date(dt);
    return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
  }

  render() {
    const { task, transaction, policy, questions } = this.props;
    
    return (
      <div className="App">
        <div className="processor p">
          <div className="text-red border-bottom border-lightgray pb-sm mb-sm ml-0 mt-0 mr-0">
            <h5 className="font-prulife">
            <i className="font-black fa fa-file-signature mr-sm font-xl"></i>
              Transaction Details
               </h5>
          </div>
          <div className="xl-12 mb">
            <div className="flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Number:"
                inputClass="col no-padding mr xl-2 input-container" 
                value={task && task.variables.transactionNumber}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Type:                "
                inputClass="col no-padding mr xl-4 input-container" 
                value={transaction && transaction.transactionType === '1' ? 'Reinstatement' : 'N/A'}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Status:"
                inputClass="col no-padding mr xl-2 input-container" 
                value={task && task.variables.status === "processor" ? 'Processing' : 'N/A'}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Created Date:"
                inputClass="col no-padding mr xl-2 input-container" 
                value={task && this.formatDate(task.startTime)}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Created By:"
                inputClass="col no-padding xl-2 input-container"
                value={task && task.variables.username }
              />
            </div>
          </div>
          <div className="text-red border-bottom border-lightgray pb-sm mb-sm ml-0 mt-0 mr-0">
            <h5 className="font-prulife">
            <i className="font-black fa fa-inbox mr-sm font-xl"></i>
              Prescreening Details
            </h5>
          </div>
          <div className="xl-12">
            <div className="flex-container ">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Required Premium:"
                inputClass="col no-padding mr input-container"
                value={policy && policy.requiredPremium}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Suspense:"
                inputClass="col no-padding mr input-container" 
                value={policy && policy.pdfSuspense}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="OR Number:"
                inputClass="col no-padding mr input-container" 
                // value={policy && }
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Date of Signing:"
                inputClass="col no-padding mr input-container" 
                // value={policy && }
              />
              <div className="col no-padding">
                <p className="bold font-sm flex no-margin">
                  Signature Verified:
                    </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes">Yes
                        <input type="radio" id="yes" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no">No
                        <input type="radio" id="no" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex-container ">
              <div className="col">
                <YesNoRadio
                  name="isRelativeOfAgent"
                  title="Relative Of Agent"
                  isRequired={false}
                  isYesDefault={this.props.isRelativeOfAgent}
                  onSelect={this.handleYesNoChange}
                  disabled={true}
                />
              </div>
              <div className="col">
                <YesNoRadio
                  name="isFatcaTagging"
                  title="FATCA Tagging"
                  isRequired={false}
                  isYesDefault={this.props.isFatcaTagging}
                  onSelect={this.handleYesNoChange}
                  disabled={true}
                />
              </div>
              <div className="col">
                <YesNoRadio
                  name="isFatcaRequirement"
                  title="Complete FATCA Requirements?"
                  isRequired={false}
                  isYesDefault={this.props.isFatcaTagging}
                  onSelect={this.handleYesNoChange}
                  disabled={true}
                />
              </div>
              {/* <div className="col no-padding mr">
                <p className="bold font-sm flex no-margin">
                  Complete FATCA Requirements?:
                    </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes3">Yes
                        <input type="radio" id="yes3" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no3">No
                        <input type="radio" id="no3" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div> */}
              <div className="col">
                <YesNoRadio
                  name="withReinstatementAgent"
                  title="With Reinstating Agent"
                  isRequired={false}
                  isYesDefault={this.props.withReinstatementAgent}
                  onSelect={this.handleYesNoChange}
                  disabled={true}
                />
              </div>
              <div className="col">
                <YesNoRadio
                  name="withCosal"
                  title="With COSAL"
                  isRequired={false}
                  isYesDefault={this.props.withCosal}
                  onSelect={this.handleYesNoChange}
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <div className="text-red border-bottom border-lightgray pb-sm mb-sm ml-0 mt-0 mr-0">
            <h5 className="font-prulife">
            <i className="font-black fa fa-file-alt mr-sm font-xl"></i>
              Document Details
            </h5>
          </div>
          <div className="xl-12 container flex-container flex-wrap">
            <div className="xl-6 container">
              <div className="xl-6 margin-auto">
                <a href="/DocumentViewer" className="btn prulife flex f-justify-space-between col" target="_blank">
                  Insured Documment
                <span className="fa fa-file font-white"></span>
                </a>
              </div>
            </div>
            <div className="xl-6 container">
              <div className="xl-6 margin-auto">
                <a href="/DocumentViewer" className="btn prulife flex f-justify-space-between col" target="_blank">
                  Insured Documment
                <span className="fa fa-file font-white"></span>
                </a>
              </div>
            </div>
            <div className="xl-6 container">
              <div className="xl-6 margin-auto">
                <a href="/DocumentViewer" className="btn prulife flex f-justify-space-between col" target="_blank">
                  Insured Documment
                <span className="fa fa-file font-white"></span>
                </a>
              </div>
            </div>
            <div className="xl-6 container"></div>
          </div>
        </div>
      </div >
    );
  }
}

export default ProcessorHeader;