import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import productReducer from "../redux/reducers/productReducer"

export const createStore = () => {
  return configureStore({
    reducer: {
      productReducer
    },
  });
}

const store = createStore()
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
