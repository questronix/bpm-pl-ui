import React from 'react';


const TaskList = (props) => (

  <div className="card-table">
    {props.tasks ? (
      <table id="table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>POLICY NO.</th>
            <th>TRANSACTION NO.</th>
            <th>TRANSACTION TYPE</th>
            <th>POLICY OWNER</th>
            <th>INSURED OWNER</th>
            <th>DATE CREATED</th>
            <th>CREATED BY</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, index) => (
            <tr key={index}>
              <td class="bold"><div class="cursor"></div>00000001</td>
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
                {new Intl.DateTimeFormat('en-GB', { 
                   year: 'numeric', 
                   month: 'long', 
                   day: '2-digit' 
                   }).format()}
                {/* {(new Date(task.variables.policy.createdAt)).toDateString()} */}
              </td>
              <td>
              {task.variables.user.firstName}
                {/* {task.variables.policy.info != null ? JSON.parse(task.variables.policy.info).createdAt : '-'} */}
              </td>
              <td>
                {(task.variables.status) ? task.variables.status.toUpperCase() : 'Draft'}
              </td>
           
              <td>
                {!task.completed ? (
                  <a className="btn prulife" href={`/tasks/edit?id=${task.id}`}>Edit</a>
                ) : <a className="btn prulife" href={`/tasks/edit?id=${task.id}`}>View</a>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    ) :
      (<div className="flex f-center">
        <h1>No Data Available
    </h1>
      </div>)}
  </div>
);

export default TaskList;