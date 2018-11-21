import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  handleItemClick(url) {
    window.location.href = url;
  }

  componentDidMount() {
    console.log('TASSKSS', this.props.tasks)
  }

  render() {
    
    let owner;
    let insured;
    // if (this.props.tasks.variables.policy.info) {
    //   const clients = this.props.tasks.variables.policy.info ? JSON.parse(this.props.tasks.variables.policy.info).clients : null;
    //   owner = clients.find(client => client.role == 'OW');
    //   insured = clients.find(client => client.role == 'LF');
    //   console.log(insured)
    // }
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
                    <div className="cursor" />
                    {task.policyNo
                      ? task.policyNo
                      : '-'}
                  </td>
                  {/* Transaction No */}
                  <td>{task.transactionNo}</td>

                  <td>
                    Reinstatement
                    {/* Transation type */}
                    {/* {task.variables.info != null
                      ? JSON.parse(task.variables.info).find()
                      : '-'} */}
                  </td>
                  <td>
                    {/* Policy owner */}
                    {task.ownerName
                      ? task.ownerName
                      : '-'}
                  </td>
                  <td>
                    {/* Insured owner */}
                    {task.insuredName
                      ? task.insuredName
                      : '-'}
                  </td>
                  <td>
                    {task.username
                      ? task.username
                      : '-'}
                  </td>
                  <td>
                    {/* Date created */}
                    {new Date(task.startTime).toDateString()}
                  </td>
                  <td>
                    {/* Status */}
                    {task.status
                      ? task.status.toUpperCase()
                      : 'Draft'}
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
            <h4 className="font-prulife">{this.props.tasks.length}</h4>
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

export default TaskList;
