import Processor from './pages/ProcessorPage';
import EditTaskPage from './pages/EditTaskPage';

const routes = [
  {
    path: "/tasks",
    exact: true,
    component: Processor,
  },
  {
    path: "/tasks/edit",
    exact: true,
    component: EditTaskPage,
  },
];

export default routes;