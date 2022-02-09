import Login from '../pages/Auth/Auth';
import ResetPasswordPage from '../pages/ResetPassword/ResetPasswordPage';
import IRoute from '../types/route';
import ErrorPage from '../pages/ErrorPage';
import Departments from '../pages/DepartmentsPage';
import PartDepartments from '../pages/PartDepartmentsPage';

const routes: IRoute[] = [
  {
    path: '/login',
    name: 'Login Page',
    component: Login,
    exact: true,
  },
  {
    path: '/resetPassword',
    name: 'Reset Password Page',
    component: ResetPasswordPage,
    exact: true,
  },
  {
    path: '/forbidden',
    name: '403 forbiden',
    component: ErrorPage,
    exact: true,
  },
  {
    path: '/departments',
    name: 'Departments',
    component: Departments,
    exact: true,
  },
  {
    path: '/partDepartments',
    name: 'Part Departments',
    component: PartDepartments,
    exact: true,
  },
];

export default routes;
