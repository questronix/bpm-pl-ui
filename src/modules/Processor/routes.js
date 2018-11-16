import Processor from './pages/ProcessorPage';
import EditTaskPage from './pages/EditTaskPage';
import DocumentViewer from './pages/DocumentViewer';
import ProcessorTaskList from './component/task/ProcessorTaskList';
import ProcessorTaskContainer from './component/task/ProcessorTaskContainer';

const routes = [
  {
    path: "/processor",
    exact: true,
    component: Processor,
  },
  {
    path: "/list",
    exact: true,
    component: ProcessorTaskContainer,
  },
  {
    path: "/DocumentViewer",
    exact: true,
    component: DocumentViewer,
  },
];

export default routes;