import React from 'react';
import Nav from '../../component/nav/Nav';
import TaskContainer from '../../component/task/TaskContainer';
import SidebarNew from '../../../../shared/component/sidebar/SidebarNew';

const TaskPage = (props) => {
  console.log(props);
  return (
    <div>
      <Nav /> 
      {/* <SidebarNew/> */}
      <TaskContainer/>
    </div>
  );
};

export default TaskPage;