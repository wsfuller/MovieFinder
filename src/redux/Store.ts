import { applyMiddleware, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer';

const middleware = applyMiddleware(createPromise(), thunk as ThunkMiddleware, createLogger());

const Store = createStore(RootReducer, composeWithDevTools(middleware));

export type RootStore = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
