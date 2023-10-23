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

import profileReducer from "./slices/profileSlice";
import stepReducer from "./slices/stepSlice";

const persistConfig = {
    key: "root",
    storage,
};

const profilePersistedReducer = persistReducer(persistConfig, profileReducer);
const stepPersistedReducer = persistReducer(persistConfig, stepReducer);

export const store = configureStore({
    reducer: {
        profileReducer: profilePersistedReducer,
        stepReducer: stepPersistedReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
