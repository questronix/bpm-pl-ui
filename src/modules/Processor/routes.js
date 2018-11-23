import Processor from './pages/ProcessorPage';
import DocumentViewer from './pages/DocumentViewer';
import ProcessorTaskPage from './component/task/ProcessorTaskPage';

const routes = [
  {
    path: "/tasks",
    exact: true,
    component: Processor,
  },
  {
    path: "/list",
    exact: true,
    component: ProcessorTaskPage,
  },
  {
    path: "/DocumentViewer",
    exact: true,
    component: DocumentViewer,
  },
];

export default routes;