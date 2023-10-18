//TODO: переделать файл на ts

import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import routeReducer from "./slices/routeSlice";

const persistConfig = {
    key: "root",
    storage,
};

const routePersistedReducer = persistReducer(persistConfig, routeReducer);

export const store = configureStore({
    reducer: {
        routeReducer: routePersistedReducer,
        changeReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
