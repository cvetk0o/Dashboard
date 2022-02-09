/* eslint-disable import/prefer-default-export */
import { IPagination } from '../../types/types';
import {
  DELETE_PART_DEPARTMENT_REQUEST,
  DELETE_PART_DEPARTMENT_SUCCESS,
  GET_ALL_PART_DEPARTMENTS_REQUEST,
  GET_ALL_PART_DEPARTMENTS_SUCCESS,
  NEW_PART_DEPARTMENT_REQUEST,
  NEW_PART_DEPARTMENT_SUCCESS,
  UPDATE_PART_DEPARTMENT_REQUEST,
  UPDATE_PART_DEPARTMENT_SUCCESS,
} from './actionTypes';
import {
  DeletePartDepartmentRequest,
  DeletePartDepartmentSuccess,
  GetAllPartDepartmentsRequest,
  GetAllPartDepartmentsSuccess,
  INewPartDepartmentFormValues,
  IPartDepartment,
  NewPartDepartmentRequest,
  NewPartDepartmentSuccess,
  UpdatePartDepartmentRequest,
  UpdatePartDepartmentSuccess,
} from './types';

export const getAllPartDepartmentsRequest = (
  pagination: IPagination
): GetAllPartDepartmentsRequest => ({
  type: GET_ALL_PART_DEPARTMENTS_REQUEST,
  pagination,
});

export const getAllPartDepartmentsSuccess = (
  payload: IPartDepartment[],
  pagination: IPagination
): GetAllPartDepartmentsSuccess => ({
  type: GET_ALL_PART_DEPARTMENTS_SUCCESS,
  payload,
  pagination,
});

export const deletePartDepartmentRequest = (
  partDepartmentId: string
): DeletePartDepartmentRequest => ({
  type: DELETE_PART_DEPARTMENT_REQUEST,
  partDepartmentId,
});

export const deletePartDepartmentSuccess = (
  partDepartmentId: string
): DeletePartDepartmentSuccess => ({
  type: DELETE_PART_DEPARTMENT_SUCCESS,
  partDepartmentId,
});

export const updatePartDepartmentRequest = (
  partDepartmentId: string,
  payload: IPartDepartment
): UpdatePartDepartmentRequest => ({
  type: UPDATE_PART_DEPARTMENT_REQUEST,
  partDepartmentId,
  payload,
});

export const updatePartDepartmentSuccess = (
  payload: IPartDepartment
): UpdatePartDepartmentSuccess => ({
  type: UPDATE_PART_DEPARTMENT_SUCCESS,
  payload,
});

export const newPartDepartmentRequest = (
  payload: INewPartDepartmentFormValues
): NewPartDepartmentRequest => ({
  type: NEW_PART_DEPARTMENT_REQUEST,
  payload,
});

export const newPartDepartmentSuccess = (payload: IPartDepartment): NewPartDepartmentSuccess => ({
  type: NEW_PART_DEPARTMENT_SUCCESS,
  payload,
});
