/* eslint-disable implicit-arrow-linebreak */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const getStore = (extraArgument) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
        serializableCheck: false,
      }),
  });
