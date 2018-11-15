import actionTypes from 'redux-components/constants/actionTypes';

export default {
    getPages: () => ({
        type: actionTypes.FETCH_PAGES
    }),
    getPagesSucceeded: response => ({
        type: actionTypes.FETCH_PAGES_SUCCEEDED,
        response
    }),
    getPagesFailed: error => ({
        type: actionTypes.FETCH_PAGES_FAILED,
        error
    })
};