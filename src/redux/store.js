import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import uiReducer from './slices/uiSlice'
import localStorage from 'redux-persist/es/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { persistStore } from 'redux-persist'

const rootReducer = combineReducers({
    cart: cartReducer,
    ui: uiReducer
})

const persistConfig = {
    key: 'pizza-app',
    storage: localStorage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], }, }),
});

export const persistor = persistStore(store);