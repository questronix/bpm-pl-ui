import React from 'react';
import Task from './pages/TaskPage';
import Dashboard from './pages/DashboardPage';
import TaskEdit from './component/task/EditTask';

const routes = [
  {
    label: 'Dashboard',
    path: "/csa",
    exact: true,
    component: () => <Dashboard />,
  },
  {
    label: 'New Task',
    path: "/csa/tasks/new",
    exact: true,
    component: () => <Task />,
  },
  {
    path: "/csa/tasks/edit",
    exact: true,
    component: () => <TaskEdit />,
  },
];

export default routes;