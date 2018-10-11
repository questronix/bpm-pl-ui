import React from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';

const TaskList = (props) => (
  <table>
    <thead>
      <tr>
      <th>Process Name</th>
      <th>Application No</th>
      <th>Date Created</th>
      <th>Status</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {props.tasks.map((task, index) => (
      <tr key={index}>
        {/* <Redirect to={`/tasks?id=${task.id}`} > Sample </Redirect> */}
        <td>{task.name}</td>
        <td>{task.policy.appNo}</td>
        <td>{(new Date(task.policy.createdAt)).toDateString()}</td>
        <td>{(task.completed) ?'Completed' : 'Draft'}</td>
        <td>
          {!task.completed ? (<a href={`/csa/tasks/new?id=${task.id}`}>Edit</a>) : 'No Action'}
        </td>
      </tr>
    ))}
    </tbody>
  </table>
);

export default TaskList;