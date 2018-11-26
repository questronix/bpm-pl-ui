
import DashboardPage from './pages/DashboardPage';
import TaskPage from './pages/task/TaskPage';
import EditTaskPage from './pages/task/EditTaskPage';
import NewTaskPage from './pages/task/NewTaskPage';
import ProcessingPage from './pages/ProcessingPage';

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
  {
    path: "/tasks/processing",
    exact: true, 
    component: ProcessingPage,
  }
];

export default routes;