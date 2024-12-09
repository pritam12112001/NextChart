"use client";
// Ensure this component runs only on the client

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginServiceApi } from "./api/loginServiceApi";
import { processRuntimeServiceAPI } from "./api/processRuntimeServiceAPI";
import { softwareServiceApi } from "./api/softwareServiceAPI";
import { reducers } from "./redux";

const persistConfig = {
    key: "ikon-next", // Key for localStorage
    storage,
    whitelist: ["globals"], // Add reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware: any) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat([
                loginServiceApi.middleware,
                processRuntimeServiceAPI.middleware,
                softwareServiceApi.middleware
            ]),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

export const persistor = persistStore(makeStore());