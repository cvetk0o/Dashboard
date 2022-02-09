/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { message } from 'antd';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects';
import {
  newDepartment,
  getAllDepartmentsRequest as getAllDepartments,
  updateDepartment,
  deleteDepartment,
} from '../../services/DepartmentsService';
import { IPagination } from '../../types/types';
import {
  getAllDepartmentsSuccess,
  newDepartmentRequestSuccess,
  updateDepartmentSuccess,
  deleteDepartmentSuccess,
  fetchAllDepartmentsSuccess,
} from './actions';
import {
  DELETE_DEPARTMENT_REQUEST,
  FETCH_ALL_DEPARTMENTS_REQUEST,
  GET_ALL_DEPARTMENTS_REQUEST,
  NEW_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_REQUEST,
} from './actionTypes';
import {
  DeleteDepartmentRequest,
  GetAllDepartmentsRequest,
  IGetDepartmentsResponse,
  INewDepartmentResponse,
  IUpdateDepartmentResponse,
  NewDepartmentRequest,
  UpdateDepartmentRequest,
} from './types';

function* getDepartments(action: GetAllDepartmentsRequest) {
  try {
    const response: AxiosResponse<IGetDepartmentsResponse> = yield call(
      getAllDepartments,
      action?.pagination
    );
    yield put(
      getAllDepartmentsSuccess(
        {
          data: response?.data?.data,
        },
        { ...action?.pagination, total: +response.headers['total-elements'] }
      )
    );
  } catch (e: any) {
    message.error(e.message);
  }
}

function* fetchAllDepartments() {
  try {
    const limit = 10;
    const response: AxiosResponse<IGetDepartmentsResponse> = yield call(getAllDepartments, {
      page: 1,
      limit,
    } as IPagination);

    const total = +response.headers['total-elements'];

    const pages = Math.ceil(total / limit);

    const calls = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 2; i <= pages; i++) {
      calls.push(
        call(getAllDepartments, {
          page: i,
          limit,
        } as IPagination)
      );
    }
    const responses: AxiosResponse<IGetDepartmentsResponse>[] = yield all(calls);

    const data = [...response?.data?.data];
    responses.forEach(res => {
      data.push(...res?.data?.data);
    });
    yield put(fetchAllDepartmentsSuccess(data));
  } catch (e: any) {
    message.error(e.message);
  }
}

function* newDepartmentRequestSaga(action: NewDepartmentRequest) {
  try {
    const response: AxiosResponse<INewDepartmentResponse> = yield call(
      newDepartment,
      action.payload
    );

    yield put(newDepartmentRequestSuccess(response?.data?.data));
  } catch (e: any) {
    message.error(e.message);
  }
}

function* updateDepartmentSaga(action: UpdateDepartmentRequest) {
  try {
    const response: AxiosResponse<IUpdateDepartmentResponse> = yield call(
      updateDepartment,
      action.idDepartment,
      action.payload
    );
    yield put(updateDepartmentSuccess(response?.data?.data));
  } catch (e: any) {
    message.error(e.message);
  }
}

function* deleteDepartmentSaga(action: DeleteDepartmentRequest) {
  try {
    yield call(deleteDepartment, action.departmentId);
    yield put(deleteDepartmentSuccess(action.departmentId));
  } catch (e: any) {
    message.error(e.message);
  }
}

function* departmentsSaga(): Generator<AllEffect<ForkEffect<never>>> {
  yield all([
    takeLatest(GET_ALL_DEPARTMENTS_REQUEST, getDepartments),
    takeLatest(NEW_DEPARTMENT_REQUEST, newDepartmentRequestSaga),
    takeLatest(UPDATE_DEPARTMENT_REQUEST, updateDepartmentSaga),
    takeLatest(DELETE_DEPARTMENT_REQUEST, deleteDepartmentSaga),
    takeLatest(FETCH_ALL_DEPARTMENTS_REQUEST, fetchAllDepartments),
  ]);
}

export default departmentsSaga;
