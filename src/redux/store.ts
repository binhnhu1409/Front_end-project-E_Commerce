import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import productReducer from "../redux/reducers/productReducer"
import categoryReducer from './reducers/categoryReducer';
import userReducer from './reducers/userReducer';

export const createStore = () => {
  return configureStore({
    reducer: {
      productReducer,
      categoryReducer,
      userReducer,
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
