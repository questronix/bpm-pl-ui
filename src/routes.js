import React from 'react';

import Login from './modules/Login/component/Login';
import CSAroutes from './modules/CSA/routes' ;

const miscRoutes = [
  {
    path: '/login',
    main: () => <Login />,
  }
];

const userRole = 'CSA';

let routes;
if (userRole === 'CSA') {
  routes = [...CSAroutes, ...miscRoutes];
}

export default routes;