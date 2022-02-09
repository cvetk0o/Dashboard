/* eslint-disable @typescript-eslint/ban-types */
import { IPagination } from '../../types/types';
import {
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  FETCH_ALL_DEPARTMENTS_REQUEST,
  FETCH_ALL_DEPARTMENTS_SUCCESS,
  GET_ALL_DEPARTMENTS_REQUEST,
  GET_ALL_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENT_BY_ID_REQUEST,
  NEW_DEPARTMENT_REQUEST,
  NEW_DEPARTMENT_REQUEST_SUCCESS,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
} from './actionTypes';

export interface ITable {
  columns: any[];
  fetchData: Function;
  dataType: string;
  onRowClick?: Function;
}

export interface IDepartment {
  partDepartment: [];
  state: string;
  createdAt: string;
  _id: string;
  name: string;
}

export interface IDepartmentReduced {
  _id: string;
  name: string;
}

export interface IDepartmentsState {
  pending: boolean;
  departments: IDepartment[];
  error: string | null;
  pagination: IPagination;
  allDepartments: IDepartmentReduced[];
}

export interface IGetDepartmentsResponse {
  status: string;
  data: IDepartment[];
}

export interface INewDepartmentResponse {
  status: string;
  data: IDepartment;
}

export interface IUpdateDepartmentResponse {
  status: string;
  data: IDepartment;
}
export interface GetAllDepartmentsSuccessPayload {
  data: IDepartment[];
}

export interface UpdateDepartmentData {
  name: string;
  state: string;
}

export interface INewDepartmentFormValues {
  name: string;
}

export type GetAllDepartmentsRequest = {
  type: typeof GET_ALL_DEPARTMENTS_REQUEST;
  pagination: IPagination;
};

export type GetAllDepartmentsSuccess = {
  type: typeof GET_ALL_DEPARTMENTS_SUCCESS;
  payload: GetAllDepartmentsSuccessPayload;
  pagination: IPagination;
};

export type NewDepartmentRequest = {
  type: typeof NEW_DEPARTMENT_REQUEST;
  payload: INewDepartmentFormValues;
};

export type NewDepartmentRequestSuccess = {
  type: typeof NEW_DEPARTMENT_REQUEST_SUCCESS;
  payload: IDepartment;
};

export type GetDepartmentByIdRequest = {
  type: typeof GET_DEPARTMENT_BY_ID_REQUEST;
  payload: number;
};

export type UpdateDepartmentRequest = {
  type: typeof UPDATE_DEPARTMENT_REQUEST;
  idDepartment: string;
  payload: UpdateDepartmentData;
};

export type UpdateDepartmentSuccess = {
  type: typeof UPDATE_DEPARTMENT_SUCCESS;
  payload: IDepartment;
};

export type DeleteDepartmentRequest = {
  type: typeof DELETE_DEPARTMENT_REQUEST;
  departmentId: string;
};

export type DeleteDepartmentSuccess = {
  type: typeof DELETE_DEPARTMENT_SUCCESS;
  departmentId: string;
};

export type FetchAllDepartmentsRequest = {
  type: typeof FETCH_ALL_DEPARTMENTS_REQUEST;
};

export type FetchAllDepartmentsSuccess = {
  type: typeof FETCH_ALL_DEPARTMENTS_SUCCESS;
  departments: IDepartment[];
};

export type FetchDepartmentsActions =
  | GetAllDepartmentsRequest
  | GetAllDepartmentsSuccess
  | NewDepartmentRequest
  | UpdateDepartmentRequest
  | UpdateDepartmentSuccess
  | DeleteDepartmentRequest
  | DeleteDepartmentSuccess
  | NewDepartmentRequestSuccess
  | GetDepartmentByIdRequest
  | FetchAllDepartmentsRequest
  | FetchAllDepartmentsSuccess;
