import React from 'react';
import DashboardPage from './pages/DashboardPage';
import TaskPage from './pages/task/TaskPage';
// import EditTaskPage from './component/task/EditTask';
import EditTaskPage from './pages/task/EditTaskPage';

const routes = [
  {
    label: 'Dashboard',
    path: "/csa",
    exact: true,
    component: () => <DashboardPage />,
  },
  {
    label: 'New Task',
    path: "/csa/tasks",
    exact: true,
    component: () => <TaskPage />,
  },
  // {
  //   label: 'New Task',
  //   path: "/csa/tasks/new",
  //   exact: true,
  //   component: () => <TaskPage />,
  // },
  {
    path: "/csa/tasks/edit",
    exact: true,
    component: () => <EditTaskPage />,
  },
];

export default routes;