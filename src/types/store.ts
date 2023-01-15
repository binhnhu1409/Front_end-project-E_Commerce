import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { RootState } from "../redux/store";

export type StoreType = (
  ToolkitStore<
    RootState, 
    AnyAction, 
    [ThunkMiddleware<RootState, AnyAction, undefined>]>
)