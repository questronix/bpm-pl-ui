import React from 'react';
// import EditTaskContainer from '../component/task/EditTaskContainer';
import EditTaskContainer from '../../component/task/EditTaskContainer';
import Nav from '../../component/nav/Nav';

const EditTaskPage = (props) => {
  console.log(props);
  return (
    <div>
      <Nav /> 
      <EditTaskContainer />
    </div>
  );
};

export default EditTaskPage;