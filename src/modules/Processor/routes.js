import Processor from './pages/ProcessorPage';
import EditTaskPage from './pages/EditTaskPage';
import DocumentViewer from './pages/DocumentViewer';
import ProcessorTaskList from './component/task/ProcessorTaskList';
import ProcessorTaskContainer from './component/task/ProcessorTaskContainer';
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