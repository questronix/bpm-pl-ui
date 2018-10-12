import React from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';

const PrescreeningInfo = (props) => {
  return (
    <div className="flex-container flex-wrap">
      <div className="col">
        <div className="tabs col xl-12 l-12 m-12 s-12 xs-12">
          <div className="tab-container flex-container no-padding col xl-12">
            <div className="tab-title col xl-2 l-2 m-2 s-4 xs-7 tab-active">
              Insured Information
                    </div>
            <div className="tab-title col xl-2 l-2 m-2 s-4 xs-7 ">
              Owner Information
                    </div>
          </div>
          <div className="">
            <div className="header">
              <h3 className="font-prulife">
                Policy
              </h3>
            </div>
            <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap tab-body">
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Policy Number :</label>
                <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Product Type :</label>
                <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Sum Assured :</label>
                <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <CheckBox class=" col" label="FATCA Tagging :" cName="fatcaTagging" />
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
              </div>
            </div>
            <hr className="xl-11" />
            <div className="header">
              <h3 className="font-prulife">
                Client
              </h3>
            </div>
            <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap tab-body">
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Cleint type :</label>
                <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Attain Age :</label>
                <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Client Tagging :</label>
                <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Statement of Insurability :</label>
                <input className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <CheckBox class=" col" label="MID :" cName="mid" />
              <CheckBox class=" col" label="Dow Jones Hit :" cName="dowJonesHit" />
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescreeningInfo;