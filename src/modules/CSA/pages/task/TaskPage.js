import React from 'react';
import Nav from '../../component/nav/Nav';
import TaskContainer from '../../component/task/TaskContainer';

const TaskPage = (props) => {
  console.log(props);
  return (
    <div>
      <Nav /> 
      <TaskContainer/>
    </div>
  );
};

export default TaskPage;