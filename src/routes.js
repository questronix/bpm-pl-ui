import React from 'react';

import Login from './modules/Login/component/Login';
import NotFound from './shared/component/page-errors/NotFound';
import CSARoutes from './modules/CSA/routes' ;
import ProcessorRoutes from './modules/Processor/routes' ;
import AdminRoutes from './modules/Admin/routes';

const genericRoutes = [
  {
    path: '/',
    // exact: true,
    component: () => <Login />,
  }, 
  {
    path: '/login',
    exact: true,
    component: () => <Login />,
  }, 
  {
    component: () => <NotFound />
  }
];

let routes;
let userRole = '';

// Dont be confused with '__isLoggedIn', this is a global variable that I initialize every time the page is refreshing.
// The value of __isLoggedIn came from our express server (session from the server).
// This variable was initialzed on `src/public/index.ejs` 
if (__isLoggedIn) {
  if (sessionStorage.getItem('user_info')) {
    userRole = JSON.parse(sessionStorage.getItem('user_info')).role;
  }
  
  if (userRole === 'CSA') {
    routes = [...CSARoutes, ...genericRoutes];
  }
  else if (userRole === 'PROCESSOR') {
    routes = [...ProcessorRoutes, ...genericRoutes];
  }
  else if (userRole === 'ADMIN') {
    // alert(1)
    routes = [...AdminRoutes, ...genericRoutes];
  }
  else {
    routes = genericRoutes;
  }
}
else {
  routes = genericRoutes;
}

export default routes;