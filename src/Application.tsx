/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, RouteComponentProps, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import protectedRoutes from './config/protectedRoutes';
import routes from './config/routes';
import Sidebar from './components/Sidebar';
import Topbar from './components/Header';
import IRoute from './types/route';
import { AuthContext } from './context/AuthContext';
import { getIsLoggedSelector } from './store/auth/selectors';

import { logoutUser } from './store/auth/actions';

const MainWindow = styled.div<{ isAuth: boolean }>`
  overflow: auto;
  max-height: ${props => (props.isAuth ? 'calc(100vh - 64px)' : '100vh')};
`;

const Application: React.FunctionComponent = () => {
  const isUserLogged = useSelector(getIsLoggedSelector);

  const history = useHistory();

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ logout }}>
      <Layout>
        {isUserLogged && <Sidebar />}
        <Layout className="site-layout">
          {isUserLogged && <Topbar />}
          <MainWindow isAuth={isUserLogged}>
            <Switch>
              {/* eslint-disable-next-line */}
              {protectedRoutes.map((route: IRoute, index: number) => {
                return (
                  <Route
                    key={route.name}
                    path={route.path}
                    exact={route.exact}
                    // eslint-disable-next-line
                      render={(props: RouteComponentProps<any>) => (
                      <route.component name={route.name} {...props} {...route.props} />
                    )}
                  />
                );
              })}
              {routes.map((route: IRoute) => {
                return (
                  <Route
                    key={route.name}
                    path={route.path}
                    exact={route.exact}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    render={(props: RouteComponentProps<any>) => (
                      <route.component name={route.name} {...props} {...route.props} />
                    )}
                  />
                );
              })}
            </Switch>
          </MainWindow>
        </Layout>
      </Layout>
    </AuthContext.Provider>
  );
};

export default Application;
