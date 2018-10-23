import AdminPage from './pages/AdminPage';
import RolePage from './pages/RolePage';

const routes = [
  {
    label: 'Dashboard',
    path: "/admin",
    exact: true,
    component: AdminPage,
  },
  {
    label: 'Role Management',
    path: "/role",
    exact: true,
    component: RolePage,
  },
];

export default routes;