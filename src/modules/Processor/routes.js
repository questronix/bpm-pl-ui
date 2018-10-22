import Processor from './pages/ProcessorPage';
import EditTaskPage from './pages/EditTaskPage';

const routes = [
  {
    path: "/processor",
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