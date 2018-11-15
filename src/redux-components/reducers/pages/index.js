import actionTypes from 'redux-components/constants/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_PAGES_SUCCEEDED:
            return [
                ...state,
                ...action.response.data
            ];
        case actionTypes.FETCH_PAGES_FAILED:
            return [
                ...state,
                { error: action.error }
            ];

        default:
            return state;
    }
}