
import { combineReducers } from 'redux';
import userAccountsReducer from './userAccountsReducer';
import usersReducer from './usersReducer';
import inventoryReducer from './inventoryReducer';


export default combineReducers({
  userAccounts: userAccountsReducer,
  users: usersReducer,
  inventory: inventoryReducer,

})
