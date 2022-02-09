/* eslint-disable import/prefer-default-export */
import { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios';
import {
  IGetPartDepartmentsResponse,
  INewPartDepartmentFormValues,
  INewPartDepartmentResponse,
  IPartDepartment,
} from '../store/part-departments/types';
import { IPagination } from '../types/types';
import BACK_URL from '../utils/urls';

export const getAllPartDepartments = (
  pagination: IPagination
): Promise<AxiosResponse<IGetPartDepartmentsResponse>> =>
  axiosInstance.get<IGetPartDepartmentsResponse>(`${BACK_URL}/part-departments`, {
    params: { limit: pagination.limit, page: pagination.page },
  });

export const deletePartDepartment = (partDepartmentId: string): Promise<AxiosResponse<null>> =>
  axiosInstance.delete(`${BACK_URL}/part-departments/${partDepartmentId}`);

export const updatePartDepartment = (
  partDepartmentId: string,
  payload: IPartDepartment
): Promise<AxiosResponse<null>> =>
  axiosInstance.patch(`${BACK_URL}/part-departments/${partDepartmentId}`, payload);

export const newPartDepartment = (
  payload: INewPartDepartmentFormValues
): Promise<AxiosResponse<INewPartDepartmentResponse>> =>
  axiosInstance.post(`${BACK_URL}/part-departments/`, payload);
