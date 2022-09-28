import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, REHYDRATE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from '../reducers/authSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //   serializableCheck: {
      //     ignoredActions: [REHYDRATE, REGISTER],
      //   },
      serializableCheck: false,
    }),
});

export default store;
