import React from 'react';
import links from '../routes';
import DashboardContainer from '../component/dashboard/DashboardContainer';
import Nav from '../../../shared/component/nav/Nav';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const DashboardPage = (props) => {
  console.log(props);
  return (
    <div>
      <Nav links={links} /> 
      <DashboardContainer />
    </div>
  );
};


export default DashboardPage;