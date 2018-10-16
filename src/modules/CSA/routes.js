
import DashboardPage from './pages/DashboardPage';
import TaskPage from './pages/task/TaskPage';
import EditTaskPage from './pages/task/EditTaskPage';

const routes = [
  {
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    path: "/tasks",
    exact: true, 
    component: TaskPage,
  },
  {
    path: "/tasks/edit",
    component: EditTaskPage,
  },
];

export default routes;