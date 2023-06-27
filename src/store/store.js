import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./root-reducer";

import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import {logger} from "redux-logger/src";


const persistConfig = {
    key: 'root',
    blacklist: ['user'],
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)