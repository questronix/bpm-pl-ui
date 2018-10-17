
import DashboardPage from './pages/DashboardPage';
import TaskPage from './pages/task/TaskPage';
import EditTaskPage from './pages/task/EditTaskPage';
import NewTaskPage from './pages/task/NewTaskPage';

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
  {
    path: "/tasks/new",
    component: NewTaskPage,
  },
];

export default routes;