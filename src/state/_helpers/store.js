import { combineReducers,createStore as reduxCreateStore,applyMiddleware } from"redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';


const loggerMiddleware = createLogger();

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )
// );


// reducers.js
export const geod = (state = {}, action) => {
    switch (action.type) {
      case 'ACTIVATE_GEOD':
        return action.geod;
      case 'CLOSE_GEOD':
        return {};
      default:
        return state;
    }
  };


//   const reducer = (state, action) => {
//     switch (action.type) {
//         case 'ACTIVATE_GEOD':
//           return action.geod;
//         case 'CLOSE_GEOD':
//           return {};
//         default:
//           return state;
//       }
//   }
  
const reducer = (state, action) => {
    if (action.type === `INCREMENT`) {
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    }
    return state
  }

  const initialState = { count: 0 }
  const initialState2 = {}
  
//   const createStore = () => reduxCreateStore(reducer, initialState)
//  const createStore = () => reduxCreateStore(geod,initialState2)
 
//  export default createStore


export const reducers = combineReducers({
    geod,
  });
//  reducers=geod
  // store.js
  export function configureStore(initialState = {}) {
    const store = reduxCreateStore(rootReducer, initialState);
    return store;
  }
  
  export const store = configureStore();

