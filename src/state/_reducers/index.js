import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
//import { registration } from './registration.reducer';
import { users } from './user.reducer';
import { alert } from './alert.reducer';


// const rootReducer = combineReducers({
// //  authentication,
// //  registration,
//   users
// //  alert
// });

const geod = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod;
    case 'CLOSE_GEOD':
      return {};
    default:
      return state;
  }
};

const geod2 = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod2;
    case 'CLOSE_GEOD':
      return {};
    default:
      return state;
  }
};


const rootReducer = combineReducers({
    authentication,
  //  registration,
    // users
   alert,
  geod2
  ,users
  });


  
//export function users(state = {}, action) {
  // function geod(state = {}, action) {
 



//export  {authentication as  rootReducer};

// export default rootReducer;
export default  combineReducers({
  authentication,
//  registration,
  // users
 alert,
geod
,users
});
