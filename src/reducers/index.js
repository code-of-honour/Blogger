import { combineReducers } from 'redux';
import Posts from './posts'

const rootReducer = combineReducers({
  posts: Posts
});

export default rootReducer;
