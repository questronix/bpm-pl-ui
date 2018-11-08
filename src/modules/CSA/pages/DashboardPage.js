import React from 'react';
import DashboardContainer from '../component/dashboard/DashboardContainer';
import Nav from '../component/nav/Nav';
import SidebarNew from '../../../shared/component/sidebar/SidebarNew';


const DashboardPage = (props) => {
  console.log(props);
  return (
    <div>
      <Nav /> 

      
      <DashboardContainer />
    </div>
  );
};

export default DashboardPage;