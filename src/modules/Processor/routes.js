import React from 'react';
import CSA from './pages/Processor';

const routes = [
  {
    path: "/processor",
    exact: true,
    main: () => <CSA />,
  },
];

export default routes;