import React from 'react';
// import Policy from '../../component/policy/PolicyContainer';
import Nav from '../../component/nav/Nav';
import TaskContainer from '../../component/task/TaskContainer';

const TaskPage = () => {
  return (
    <div>
      <Nav /> 
      <TaskContainer/>
      {/* <Policy/> */}
    </div>
  );
};

export default TaskPage;