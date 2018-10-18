import Processor from './pages/ProcessorPage';
import EditTaskPage from './pages/EditTaskPage';

const routes = [
  {
    label: 'Dashboard',
    path: "/processor",
    exact: true,
    component: Processor,
  },
  {
    label: 'Tasks',
    path: "/tasks/edit",
    exact: true,
    component: EditTaskPage,
  },
];

export default routes;