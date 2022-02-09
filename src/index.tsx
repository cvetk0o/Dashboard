import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import Application from './Application';
import store, { history, persistor } from './store';
import messagesEn from './assets/translations/en_us.json';
// import messagesSr from './assets/translations/sr.json';

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="en" messages={messagesEn}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Application />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
