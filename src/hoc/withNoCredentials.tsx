/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../store/auth/actions';

/**
 * Used to redirect first logout user and clear local storage.
 * First logout user and then access to the page.
 * @param Component component that is public
 * @returns wrapped function for navigating
 */
const withNoCredentials =
  (Component: React.ComponentType<any>) =>
  ({ ...props }) => {
    const dispatch = useDispatch();

    /** `remove` token and logout user */
    React.useEffect(() => {
      localStorage.removeItem('token');
      dispatch(logoutUser());
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

export default withNoCredentials;
