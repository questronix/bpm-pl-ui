import React from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import CardTable from '../../../../shared/component/table/Table';

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
              <div className="App">
                <div className="flex-container flex-wrap">
                  <div className="col xl-12">
                    <CardTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescreeningInfo;