import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import cartReducer from './features/cart/cartSlice';
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const combinedReducers = combineReducers({
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer: persistedReducer,

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    //         }
    //     }).concat(api.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true,


});

export const persistor = persistStore(store);


// const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         [api.reducerPath]: api.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(api.middleware),
// });


// export default store;