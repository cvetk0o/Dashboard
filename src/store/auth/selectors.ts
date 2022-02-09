import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getLoginPending = (state: AppState) => state.auth.pending;
const getIsLogged = (state: AppState) => state.auth.isLogged;
const getUserRole = (state: AppState) => state?.auth?.user?.data?.user?.role;

export const getLoginPendingSelector = createSelector(
  getLoginPending,
  (pending: boolean) => pending
);

export const getUserRoleSelector = createSelector(getUserRole, (role: string) => role);

export const getIsLoggedSelector = createSelector(getIsLogged, (isLogged: boolean) => isLogged);

export default getLoginPendingSelector;
