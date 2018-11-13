import React from 'react';
import EditTaskContainer from '../../component/task/EditTaskContainer';
import Nav from '../../component/nav/Nav';

const EditTaskPage = ({location, history}) => {
  return (
    <div>
      <Nav /> 
      <EditTaskContainer history={history}/>
    </div>
  );
};

export default EditTaskPage;