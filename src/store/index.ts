import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createIntl } from 'react-intl';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// persist redux
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

import enUs from '../assets/translations/en_us.json';

const intl = createIntl({ locale: 'en', messages: enUs });
const history = createBrowserHistory();

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware({
  context: {
    intl,
  },
});

// Mount it on the Store
const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history), logger))
);

const persistor = persistStore(store);

// Run the saga
sagaMiddleware.run(rootSaga);

export { history, persistor };

export default store;
