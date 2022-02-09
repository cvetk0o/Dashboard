/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getTableData = (state: AppState, dataType: string) => state?.[dataType]?.[dataType] ?? [];

const getPending = (state: AppState, dataType: string) => state?.[dataType]?.pending ?? false;

const getTablePagination = (state: AppState, dataType: string) =>
  state?.[dataType]?.pagination ?? {};

export const getDataPendingSelector = createSelector(getPending, (pending: boolean) => pending);
export const getTableDataSelector = createSelector(getTableData, data => data);
export const getTablePaginationSelector = createSelector(getTablePagination, data => data);
