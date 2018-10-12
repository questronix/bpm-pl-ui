import React, { Component } from 'react';

class CardTable extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container flex-wrap">
          <div className="col xl-12">
            <div className="card-table">
              <table id="table" cellPadding="0" cellSpacing="0">
                {/* <thead> */}
                  <tr>
                    <th>Process Name</th>
                    <th>Application No</th>
                    <th>Date Created</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                {/* </thead> */}
                {/* <tbody> */}
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
                      <button className="btn prulife">
                        Action button
                    </button>
                    </td>
                  </tr>
                {/* </tbody> */}
              </table>
            </div>
           </div>
        </div>
      </div>
    );
  }
}

export default CardTable;