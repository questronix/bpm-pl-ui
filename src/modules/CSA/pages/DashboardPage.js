import React from 'react';
import DashboardContainer from '../component/dashboard/DashboardContainer';
import Nav from '../component/nav/Nav';

const DashboardPage = ({match}) => {
  console.log(match);
  return (
    <div>
      <Nav /> 
      <DashboardContainer {...match}/>
    </div>
  );
};

export default DashboardPage;