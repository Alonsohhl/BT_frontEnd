import { createStore } from"redux";
//import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';



export const store = createStore(
    rootReducer/*,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )*/
);