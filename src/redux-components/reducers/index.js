import { combineReducers } from 'redux';
import posts from 'redux-components/reducers/posts';
import pages from 'redux-components/reducers/pages';

export default combineReducers({
    posts,
    pages
});