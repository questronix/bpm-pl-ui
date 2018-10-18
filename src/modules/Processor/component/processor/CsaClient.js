import React from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';

const CsaClient = (props) => {
  const processInfo = props.processInfo;
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
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Reinsurance :</label>
                <input value={processInfo.policy.reinsurance} className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Policy Current Rating :</label>
                <input value={processInfo.policy.currentRating} className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Amount in Suspense :</label>
                <input value={processInfo.policy.amountInSuspense} className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>NTU Validation :</label>
                <input value={processInfo.policy.ntuValidation} className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <CheckBox class=" col" label="Claim History :" cName="claimHistory" />
              <div value={processInfo.policy.claimHistory} className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
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
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>CRC Scoring :</label>
                <input value={processInfo.client.crcScoring} className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Premiums :</label>
                <input value={processInfo.client.premiums} className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
                <label>Back Premiums :</label>
                <input value={processInfo.client.backPremiums} className="col xl-6 l-6 m-6 s-6 xs-6 input disabled" type="text" disabled />
              </div>
              <div className="col xl-6 l-6 m-6 s-12 xs-12 flex f-center  m-f-center s-f-center xs-f-center f-justify-space-between">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsaClient;