/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import React from 'react';
import IPage from '../types/page';
import withAuth from '../hoc/withAuth';
import { Roles } from '../types/roles';

const HomePage: React.FunctionComponent<IPage> = () => {
  return <div style={{ padding: '15px' }} />;
};

export default withAuth(HomePage, [Roles.USER]);
