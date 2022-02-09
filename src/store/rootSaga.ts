import { all } from 'redux-saga/effects';

import authSaga from './auth/sagas';
import departmentsSaga from './departments/sagas';
import partDepartmentsSaga from './part-departments/sagas';
// eslint-disable-next-line
export function* rootSaga() {
  yield all([authSaga(), departmentsSaga(), partDepartmentsSaga()]);
}
