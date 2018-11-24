import {applyMiddleware, createStore} from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers/reducer";
import {createLogger} from 'redux-logger';

const logger = createLogger();

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: []
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(reducer, applyMiddleware(thunk, logger));

// export const persistor = persistStore(store);
