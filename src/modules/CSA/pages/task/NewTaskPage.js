import React from 'react';
import NewTaskContainer from '../../component/task/NewTaskContainer';
import Nav from '../../component/nav/Nav';

const NewTaskPage = (props) => {
  console.log(props);
  return (
    <div>
      <Nav /> 
      <NewTaskContainer />
    </div>
  );
};

export default NewTaskPage;