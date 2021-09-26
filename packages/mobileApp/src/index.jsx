import { api } from '@test/shared/utils';
import { getStore } from '@test/storage/store';
import React from 'react';
import { Provider } from 'react-redux';

import { App } from './App';

const store = getStore({ api });

export const MobileApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
