import Processor from './pages/ProcessorPage';
import EditTaskPage from './pages/EditTaskPage';
import DocumentViewer from './pages/DocumentViewer';

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
  {
    path: "/DocumentViewer",
    exact: true,
    component: DocumentViewer,
  },
];

export default routes;