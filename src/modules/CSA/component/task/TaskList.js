import React from 'react';


const TaskList = (props) => (

  <div className="card-table">
    {props.tasks ? (
    <table id="table" cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>Policy Number</th>
          <th>Application Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          {/* <th>Assigned To</th> //This will add on higher admin.*/}
              {/* {(task.policy.createdAt).substring(0,4)} - {(task.policy.id + "").padStart(6,"0")} */}
          <th>Status</th>
          <th>Date Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { props.tasks.map((task, index) => (
        <tr key={index}>
          <td>
              {task.variables.policy.number ? task.variables.policy.number : '-'}
          </td>
          <td>
            {task.variables.appno}
          </td>
          <td>
            {task.variables.policy.info != null ? JSON.parse(task.variables.policy.info).insured.firstName : '-'}
          </td>
          <td>
            {task.variables.policy.info != null ? JSON.parse(task.variables.policy.info).insured.lastName : '-'}
          </td>
          <td>
            {(task.variables.status) ?'For Processing' : 'Draft'}
          </td>
          <td>
            {(new Date(task.variables.policy.createdAt)).toDateString()}
          </td>
          <td>
            {!task.completed ? (
                <a className="btn prulife" href={`/tasks/edit?id=${task.id}`}>Edit</a>
            ) : 'No Action'}
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    ):
   (<div className="flex f-center">
    <h1>No Data Available
    </h1>
   </div>)}
  </div>
);

export default TaskList;