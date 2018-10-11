import React from 'react';
import links from '../routes';
import Policy from '../component/policy/PolicyContainer';
import Nav from '../../../shared/component/nav/Nav';

const TaskPage = () => {
  return (
    <div>
      <Nav links={links} /> 
      <Policy/>
    </div>
  );
};

export default TaskPage;