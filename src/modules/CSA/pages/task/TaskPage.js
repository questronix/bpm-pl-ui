import React from 'react';
import Nav from '../../component/nav/Nav';
import TaskContainer from '../../component/task/TaskContainer';
import SidebarNew from '../../../../shared/component/sidebar/SidebarNew';

const TaskPage = ({history}) => {
  return (
    <div>
      <Nav /> 
      {/* <SidebarNew/> */}
      <TaskContainer history={history}/>
    </div>
  );
};

export default TaskPage;