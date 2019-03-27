import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import itemsReducer from './itemsReducer';


export default combineReducers({
    posts:postsReducer,
    users:usersReducer,
    items:itemsReducer,
});