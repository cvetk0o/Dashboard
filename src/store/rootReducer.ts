import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import authReducer from './auth/reducer';
import departmentsReducer from './departments/reducer';
import partDepartmentsReducer from './part-departments/reducer';

// redux persist config
// fot the auth part
const persistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    // persisted reducer for the auth part
    auth: persistReducer(persistConfig, authReducer),
    departments: departmentsReducer,
    partDepartments: partDepartmentsReducer,
  });

export type AppState = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
