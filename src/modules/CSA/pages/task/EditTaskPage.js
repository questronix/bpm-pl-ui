import React from 'react';
import EditTaskContainer from '../../component/task/EditTaskContainer';
import Nav from '../../component/nav/Nav';

const EditTaskPage = ({location}) => {
  return (
    <div>
      <Nav /> 
      <EditTaskContainer location={location}/>
    </div>
  );
};

export default EditTaskPage;