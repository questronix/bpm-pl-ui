import React, { Component } from 'react';

class ProcessorTaskList extends Component {
  constructor(props) {
    super(props);
  }

  handleItemClick(url) {
    window.location.href = url;
  }

  render() {
    return (
      <div className="card-table">
        {this.props.tasks ? (
          <table id="table" cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>Policy No.</th>
                <th>Transaction No.</th>
                <th>Transaction Type</th>
                <th>Policy Owner</th>
                <th>Insured Owner</th>
                <th>Created By</th>
                <th>Date Created</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tasks.map((task, index) => (
                <tr
                  key={index}
                  onClick={() =>
                    this.handleItemClick(`/tasks/edit?id=${task.id}`)
                  }
                >
                  <td>
                    {/* Policy no */}
                    {/* <div className="cursor" />
                    {task.variables.policy.number
                      ? task.variables.policy.number
                      : '-'} */}
                  </td>
                  {/* Transaction No */}
                  {/* <td>{task.variables.appno}</td> */}

                  <td>
                    {/* Transation type */}
                    {/* {task.variables.policy.info != null
                      ? JSON.parse(task.variables.policy.info).insured.firstName
                      : '-'} */}
                  </td>
                  <td>
                    {/* Policy owner */}
                    {/* {task.variables.policy.info != null
                      ? JSON.parse(task.variables.policy.info).insured.firstName
                      : '-'} */}
                  </td>
                  <td>
                    {/* Insured owner */}
                    {/* {task.variables.policy.info != null
                      ? JSON.parse(task.variables.policy.info).insured.firstName
                      : '-'} */}
                  </td>
                  <td>
                    {/* {task.variables.user != null
                      ? `${task.variables.user.firstName} ${task.variables.user.lastName}`
                      : '-'} */}
                  </td>
                  {/* <td> */}
                    {/* Date created */}
                    {/* {new Date(task.variables.policy.createdAt).toDateString()}
                  </td> */}
                  <td>
                    {/* Status */}
                    {/* {task.variables.status
                      ? task.variables.status.toUpperCase()
                      : 'Draft'}
                  </td>
                  <td> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex f-center">
            <h1>No Data Available</h1>
          </div>
        )}
        <div className="table-footer flex f-row f-justify-space-between margin-container">
          <div className="flex f-row">
            <h4>Total Count:&nbsp;</h4>
            <h4 className="font-prulife"></h4>
          </div>
          <div className=" flex f-row">
            <a href="#" className="btn">
              <span className="fa fa-angle-double-left" />
            </a>
            <a href="#" className="btn ">
              <span className="fa fa-chevron-left" />
            </a>
            <a href="#" className="btn active">
              <span className=""> 1 </span>
            </a>
            <a href="#" className="btn ">
              <span className=""> 2 </span>
            </a>
            <a href="#" className="btn ">
              <span className=""> 3 </span>
            </a>
            <a href="#" className="btn ">
              <span className=""> 4 </span>
            </a>
            <a href="#" className="btn ">
              <span className="fa fa-chevron-right" />
            </a>
            <a href="#" className="btn ">
              <span className="fa fa-angle-double-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProcessorTaskList;
