/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import dayjs from 'dayjs';

import { TokenPayload } from '../types/token-payload';

/**
 * Used to redirect authenticated user to default page
 * Denies user access to pages like `/login`
 * @param Component component that is public
 * @returns wrapped function for navigating
 */
const withNoAuth =
  (Component: React.ComponentType<any>) =>
  ({ ...props }) => {
    const token = localStorage.getItem('token');

    // eslint-disable-next-line react/jsx-props-no-spreading
    if (!token) return <Component {...props} />;

    /** `decoded` payload of the token */
    const decoded = jwtDecode<TokenPayload>(token);

    /** `indicator` that token has expired */
    const isExpired = dayjs(decoded.exp * 1000).isBefore(dayjs());

    if (isExpired) {
      // remove item from the localstorage
      localStorage.removeItem('token');
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Component {...props} />;
    }

    // token is normal redirect to default page
    return <Redirect to="/" />;
  };

export default withNoAuth;
