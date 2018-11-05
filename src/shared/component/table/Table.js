import React, { Component } from 'react';

class CardTable extends Component {
  constructor(props) {
    super(props);

    this.state= {
      data: [
        {
  "processNumber":"PN-220133-0222155",
  "applicationNumber": 9,
  "firstname": "Louie",
  "lastname": "Eberto",
  "dateCreated": "10/5/2018",
  "status": "Active"
}, {
  "processNumber":"PN-220133-0222156",
  "applicationNumber": 10,
  "firstname": "Roger",
  "lastname": "Arteta",
  "dateCreated": "10/6/2018",
  "status": "Active"
}, {
  "processNumber":"PN-220133-0222157",
  "applicationNumber": 11,
  "firstname": "Louie",
  "lastname": "Eberto",
  "dateCreated": "10/5/2018",
  "status": "Active"
}]
}

};

  render() {
   let newdata = this.state.data.map(function(elem, index){
    return(
      <tr key={elem.applicationNumber}>
        <td>
      {elem.processNumber}
    </td>
    <td>
      {elem.applicationNumber}
    </td>
      <td>
        {elem.firstname}
    </td>
      <td>
        {elem.lastname}
    </td>
      <td>
      {elem.dateCreated}
    </td>
      <td>
      {elem.status}
    </td>
  
     
   </tr>
     );
   });
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
                  
                </tr>
              </thead>
              <tbody>
                {newdata}
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