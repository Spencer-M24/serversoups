
import { combineReducers } from 'redux';
import userAccountsReducer from './userAccountsReducer';
import usersReducer from './usersReducer';


export default combineReducers({
  userAccounts: userAccountsReducer,
  users: usersReducer,

})

