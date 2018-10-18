import React from 'react';

const TaskList = (props) => (
  <div className="card-table">
    {props.tasks ? (
    <table id="table" cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>Process Name</th>
          <th>Transaction No</th>
          <th>Date Created</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { props.tasks.map((task, index) => (
        <tr key={index}>
          <td>
              {task.name}
          </td>
          <td>
            {task.policy.appNo}
              {/* {(task.policy.createdAt).substring(0,4)} - {(task.policy.id + "").padStart(6,"0")} */}
          </td>
          <td>
            {(new Date(task.policy.createdAt)).toDateString()}
          </td>
            <td>{(task.completed) ?'Completed' : 'Draft'}</td>
          <td>
            {!task.completed ? (
                <a className="btn prulife" href={`/csa/tasks/edit?id=${task.id}`}>Edit</a>
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
   
   asd
  </div>
);

export default TaskList;