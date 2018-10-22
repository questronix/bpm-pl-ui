import AdminPage from './pages/AdminPage';

const routes = [
  {
    label: 'Dashboard',
    path: "/admin",
    exact: true,
    component: AdminPage,
  },
];

export default routes;