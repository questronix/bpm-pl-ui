import React from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';

const CsaClient = (props) => {
  return (
    <div className="flex-container flex-wrap">
      <div className="col xl-12">
        <div className="card-alt">
          <div className="card-header no-border">
            <h3 className="font-prulife">
              Policy
              </h3>
          </div>
          <div className="card-body">
            <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap">
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                <label className="label">Reinsurance :</label>
                <input className="col input disabled" type="text" disabled />
              </div>
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                <label className="label">Policy Current Rating :</label>
                <input className="col input disabled" type="text" disabled />
              </div>
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                <label className="label">Amount in Suspense :</label>
                <input className="col input disabled" type="text" disabled />
              </div>
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                <label className="label">NTU Validation :</label>
                <input className="col input disabled" type="text" disabled />
              </div>
              <CheckBox class=" col" label="Claim History :" cName="claimHistory" />
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              </div>
            </div>
          </div>
          <hr className="xl-11" />
          <div className="card-header no-border">
            <h3 className="font-prulife">
              Client
              </h3>
          </div>
          <div className="card-body">
            <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap">
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                <label className="label">CRC Scoring :</label>
                <input className="col input disabled" type="text" disabled />
              </div>
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                <label className="label">Premiums :</label>
                <input className="col input disabled" type="text" disabled />
              </div>
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                <label className="label">Back Premiums :</label>
                <input className="col input disabled" type="text" disabled />
              </div>
              <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
              </div>
            </div>
          </div>
        </div>
      <div className="col xl-12 flex f-end">
        <button className="btn prulife">
          Send
        </button>
      </div>
      </div>
    </div>
  );
};

export default CsaClient;