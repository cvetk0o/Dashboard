/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';
import { IDepartment, IDepartmentReduced } from './types';

const getDepartments = (state: AppState) => state?.departments?.departments;
const getPending = (state: AppState) => state?.departments?.pending;
const getAllDepartments = (state: AppState) => state?.departments?.allDepartments;

export const getDepartmentsSelector = createSelector(
  getDepartments,
  (departments: IDepartment[]) => departments
);

export const getPendingDepartmentsSelector = createSelector(
  getPending,
  (pending: boolean) => pending
);

export const getAllDepartmentsSelector = createSelector(
  getAllDepartments,
  (allDepartments: IDepartmentReduced[]) => allDepartments
);
