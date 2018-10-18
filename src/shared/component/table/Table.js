import React, { Component } from 'react';

class CardTable extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container flex-wrap">
          <div className="col xl-12 card-table">
            <table id="table" cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th>Process Number</th>
                  <th>Application No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
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
                    Saito
                    </td>
                  <td>
                    Hiraga
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
            <div className="table-footer">
              <ul className="navi">
                <div className="tooltip">
                  <span className="tooltip-text">
                    Back
                    </span>
                  <li>
                    <a href="">
                      <span className="fa fa-chevron-left"></span>
                    </a>
                  </li>
                </div>
                <div className="tooltip">
                  <span className="tooltip-text">
                    Next
                    </span>
                  <li>
                    <a href="#">
                      <span className="fa fa-chevron-right"></span>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTable;