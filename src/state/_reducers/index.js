import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './user.reducer';
import { alert } from './alert.reducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default  combineReducers({
  authentication,
  registration,
  form: reduxFormReducer,
  // users
 alert
// geod2
,users
});
