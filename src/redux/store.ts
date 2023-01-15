import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import productReducer from "../redux/reducers/productReducer"
import categoryReducer from './reducers/categoryReducer';

export const createStore = () => {
  return configureStore({
    reducer: {
      productReducer,
      categoryReducer,
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
