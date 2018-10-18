
import DashboardPage from './pages/DashboardPage';
import TaskPage from './pages/task/TaskPage';
import EditTaskPage from './pages/task/EditTaskPage';
import Policy from './component/policy/PolicyContainer';

const routes = [
  {
    label: 'Dashboard',
    path: "/csa/",
    exact: true,
    component: Policy,
  },
  {
    label: 'New Task',
    path: "/csa/tasks",
    component: TaskPage,
  },
  {
    path: "/csa/tasks/edit",
    compoent: EditTaskPage,
  },
];

export default routes;