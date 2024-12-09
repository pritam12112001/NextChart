import { combineReducers } from "@reduxjs/toolkit";
import { loginServiceApi } from "../api/loginServiceApi";
import { processRuntimeServiceAPI } from "../api/processRuntimeServiceAPI";
import { softwareServiceApi } from "../api/softwareServiceAPI";
import globalsSlice from "./slices/globalsSlice";
import softwareSlice from "./slices/softwareSlice";
import themeSlice from "./slices/themeSlice";

export const reducers = combineReducers({
    globals: globalsSlice,
    software: softwareSlice,
    theme: themeSlice,
    [loginServiceApi.reducerPath]: loginServiceApi.reducer,
    [processRuntimeServiceAPI.reducerPath]: processRuntimeServiceAPI.reducer,
    [softwareServiceApi.reducerPath]: softwareServiceApi.reducer,
})

// Export the root reducer
export default reducers;

// Define and export the RootState type
export type GlobalState = ReturnType<typeof reducers>;