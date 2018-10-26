import AdminPage from './pages/AdminPage';
import RolePage from './pages/RolePage';

const routes = [
  {
    label: 'Dashboard',
    path: "/admin",
    exact: true,
    component: AdminPage,
    icon: 'fa fa-tachometer-alt font-prulife',
  },
  {
    label: 'Role Management',
    path: "/role",
    exact: true,
    component: RolePage,
    icon: 'fa fa-users font-sun-yellow',
  },
  

];

export default routes;