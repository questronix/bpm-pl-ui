import React from 'react';
import CSA from './pages/Policy';

const routes = [
  {
    path: "/policy",
    exact: true,
    main: () => <CSA />,
  },
];

export default routes;