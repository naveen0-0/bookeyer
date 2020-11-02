import { combineReducers } from 'redux';
import { userReducer } from './usersReducer';

export const allReducers = combineReducers({
    user : userReducer
})

