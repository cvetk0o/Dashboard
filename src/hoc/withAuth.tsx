/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import dayjs from 'dayjs';

import { Roles } from '../types/roles';
import { TokenPayload } from '../types/token-payload';

/**
 * HOC used to protect accessing routes
 * @param Component react comoponent
 * @param roles role that are used to show specified component
 * @returns wrapped function for the roles
 */
const withAuth =
  (Component: React.ComponentType<any>, roles: Roles[] = []) =>
  ({ ...props }) => {
    const token = localStorage.getItem('token');

    if (!token) return <Redirect to="/login" />;

    /** `decoded` payload of the token */
    const decoded: TokenPayload = jwtDecode(token);

    /** `indicator` that token has expired */
    const isExpired = dayjs(decoded.exp * 1000).isBefore(dayjs());

    if (isExpired) {
      // remove item from the localstorage
      localStorage.removeItem('token');
      return <Redirect to="/login" />;
    }

    /** `indicator` that check has user specified role */
    const hasUserRole =
      decoded.role === Roles.ROOT || (roles.length && roles.includes(decoded.role));

    if (!hasUserRole) return <Redirect to="/forbidden" />;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

export default withAuth;
