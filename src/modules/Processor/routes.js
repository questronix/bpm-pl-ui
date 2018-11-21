import Processor from './pages/ProcessorPage';
import DocumentViewer from './pages/DocumentViewer';
import ProcessorTaskPage from './component/task/ProcessorTaskPage';
import Approver from './pages/ApproverPage';
import UnderWriter from './pages/UnderWriterPage';

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
  
  {
    path: "/approver",
    exact:true,
    component: Approver
  },
  {
    path: "/underWriter",
    exact:true,
    component: UnderWriter
  },
];

export default routes;