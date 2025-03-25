import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import dashboardReducer from "./slices/dashboardSlice.js"
import userReducer from "./slices/userSlice.js"
import transactionReducer from "./slices/TransactionSlice.js"

const rootReducer = combineReducers({dashboard: dashboardReducer, user: userReducer, transaction: transactionReducer});

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })  
});

export const persistor = persistStore(store);