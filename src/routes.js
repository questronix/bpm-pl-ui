import React from 'react';
import './App.css';
import './override.css';
import Login from './modules/login/component/Login';
import Main from './shared/component/main/Main';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Main />,
  },
  {
    path: '/login',
    main: () => <Login />,
  }
];

export default routes;