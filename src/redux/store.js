import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import contactsReducer from './reducers';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

const store = configureStore({
    reducer: persistReducer(persistConfig, contactsReducer),
    devTools: process.env.NODE_ENV === 'development',
    middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
