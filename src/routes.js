import React from 'react';

import Login from './modules/Login/component/Login';
import NotFound from './shared/component/page-errors/NotFound';
import CSARoutes from './modules/CSA/routes' ;
import ProcessorRoutes from './modules/Processor/routes' ;

const genericRoutes = [
  {
    path: '/',
    component: () => <Login />,
  }, 
  {
    path: '/login',
    component: () => <Login />,
  }, 
  {
    component: () => <NotFound />
  }
];

let routes;
let userRole = '';

if (sessionStorage.getItem('user_info')) {
  userRole = JSON.parse(sessionStorage.getItem('user_info')).role;
}

if (userRole === 'CSA') {
  routes = [...CSARoutes, ...genericRoutes];
}
else if (userRole === 'PROCESSOR') {
  routes = [...ProcessorRoutes, ...genericRoutes];
}
else {
  routes = genericRoutes;
}

export default routes;