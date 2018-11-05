import React, { Component } from 'react';

class TaskList extends Component {
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
                <th>Policy Number</th>
                <th>Application Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tasks.map((task, index) => (
                <tr
                  key={index}
                  onClick={() => this.handleItemClick(`/tasks/edit?id=${task.id}`)}
                >
                  <td>
                    {task.variables.policy.number
                      ? task.variables.policy.number
                      : '-'}
                  </td>
                  <td>{task.variables.appno}</td>
                  <td>
                    {task.variables.policy.info != null
                      ? JSON.parse(task.variables.policy.info).insured.firstName
                      : '-'}
                  </td>
                  <td>
                    {task.variables.policy.info != null
                      ? JSON.parse(task.variables.policy.info).insured.lastName
                      : '-'}
                  </td>
                  <td>
                    {task.variables.status
                      ? task.variables.status.toUpperCase()
                      : 'Draft'}
                  </td>
                  <td>
                    {new Date(task.variables.policy.createdAt).toDateString()}
                  </td>
                  <td>
                    {/* {!task.completed ? (
                      <Link
                        to={{
                          pathname: `/tasks/edit`,
                          search: `?id=${task.id}`,
                          state: { fromTaskList: true }
                        }}
                      >
                        Edit
                      </Link>
                    ) : (
                      <Link to={`/tasks/edit?id=${task.id}`}>View</Link>
                    )} */}
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
        <div className="flex f-row f-justify-space-between margin-container">
          <div className="flex f-row">
            <h4>Total Count:&nbsp;</h4>
            <h4 className="font-prulife">12,3456</h4>
          </div>
          <div className=" flex f-row">
            <a href="#" className="btn-circle ">
              <span className="fa fa-angle-double-left" />
            </a>
            <a href="#" className="btn-circle ">
              <span className="fa fa-chevron-left" />
            </a>
            <a href="#" className="btn-circle active">
              <span className=""> 1 </span>
            </a>
            <a href="#" className="btn-circle ">
              <span className=""> 2 </span>
            </a>
            <a href="#" className="btn-circle ">
              <span className=""> 3 </span>
            </a>
            <a href="#" className="btn-circle ">
              <span className=""> 4 </span>
            </a>
            <a href="#" className="btn-circle ">
              <span className="fa fa-chevron-right" />
            </a>
            <a href="#" className="btn-circle ">
              <span className="fa fa-angle-double-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
