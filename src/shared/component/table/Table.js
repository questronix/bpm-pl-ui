import React, { Component } from 'react';

class CardTable extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container flex-wrap">
          <div className="col xl-12">
            <div className="card-table">
              <table id="table" cellSpacing="0" cellPadding="0">
                <tr>
                  <th>
                    Policy Number
                </th>
                  <th>
                    Transaction Number
                  </th>
                  <th>
                    First Name
                  </th>
                  <th>
                    Last Name
                  </th>
                  <th>
                    Assined to
                  </th>
                  <th>
                    Date
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
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
                    Jerome Patiga
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
                    Jerome Patiga
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
              </table>
              <div className="table-footer">
                <ul className="navi">
                  <li>
                    <a>
                    <span className="fa fa-chevron-left font-gray"></span>
                    </a>
                  </li>
                  <li>
                    <a>
                    <span className="fa fa-chevron-right font-gray"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTable;