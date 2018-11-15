import actionTypes from 'redux-components/constants/actionTypes';

export default {
    getPosts: () => ({
        type: actionTypes.FETCH_POSTS
    }),
    getPostsSucceeded: response => ({
        type: actionTypes.FETCH_POSTS_SUCCEEDED,
        response
    }),
    getPostsFailed: error => ({
        type: actionTypes.FETCH_POSTS_FAILED,
        error
    })
};