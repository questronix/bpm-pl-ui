import React from 'react';
import CSA from './index';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <CSA />,
  },
];

export default routes;