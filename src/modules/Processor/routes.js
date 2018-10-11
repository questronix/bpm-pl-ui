import React from 'react';
import Processor from './pages/ProcessorPage';

const routes = [
  {
    label: 'Dashboard',
    path: "/processor",
    exact: true,
    component: () => <Processor />,
  },
];

export default routes;