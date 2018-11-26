import React from 'react';
import Nav from '../component/nav/Nav';
import TaskContainer from '../../CSA/component/task/TaskContainer';

const TaskPage = ({history}) => {
  return (
    <div>
      <Nav /> 
      <TaskContainer history={history}/>
    </div>
  );
};

export default TaskPage;