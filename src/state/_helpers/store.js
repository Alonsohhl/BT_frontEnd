import { combineReducers,createStore as reduxCreateStore,applyMiddleware } from"redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';


const loggerMiddleware = createLogger();


  export function configureStore(initialState = {}) {
    const store = reduxCreateStore(rootReducer, initialState,applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ));
    return store;
  }
  
  export const store = configureStore();

