import React from 'react';
import CardTable from '../../../../shared/component/table/Table';

const TaskList = (props) => (
  // <div className="card-table">
  //   {props.tasks ? (
  //     <table id="table" cellSpacing={0} cellPadding={0}>
  //     <thead>
  //       <tr>
  //       <th>Process Name</th>
  //       <th>Application No</th>
  //       <th>Date Created</th>
  //       <th>Status</th>
  //       <th>Action</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //     {props.tasks.map((task, index) => (
  //       <tr key={index}>
  //         {/* <Redirect to={`/tasks?id=${task.id}`} > Sample </Redirect> */}
  //         <td>{task.name}</td>
  //         <td>{task.policy.appNo}</td>
  //         <td>{(new Date(task.policy.createdAt)).toDateString()}</td>
  //         <td>{(task.completed) ?'Completed' : 'Draft'}</td>
  //         <td>
  //           {!task.completed ? (<a href={`/csa/tasks/edit?id=${task.id}`}>Edit</a>) : 'No Action'}
  //         </td>
  //       </tr>
  //     ))}
  //     </tbody>
  //   </table>
  //   ): 'No available tasks.' }
  // </div>
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
          </td>
          <td>
            {(new Date(task.policy.createdAt)).toDateString()}
          </td>
            <td>{(task.completed) ?'Completed' : 'Draft'}</td>
          <td>
            {!task.completed ? (
              <button className="btn prulife"> 
                <a className="font-white" href={`/csa/tasks/edit?id=${task.id}`}>Edit</a>
              </button>) 
              : 'No Action'}
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    ): 'No available tasks.' }
  </div>


  // <div>
  //   <CardTable/>
  // </div>
);

export default TaskList;