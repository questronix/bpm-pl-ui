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
 


      <div className="App">
        <div className="flex-container flex-wrap">
          <div className="col xl-12">
            <div className="card-table">
              <table id="table" cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Process Name</th>
                    <th>Application No</th>
                    <th>Date Created</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      PN-2212303-3221
                  </td>
                    <td>
                      TXN-21120-22021-022
                  </td>
                    <td>
                      Active
                  </td>
                    <td>
                      Dec. 26, 2017
                  </td>
                    <td>
                      <a className="btn prulife">
                        Action button
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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