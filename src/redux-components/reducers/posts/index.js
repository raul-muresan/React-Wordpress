import actionTypes from 'redux-components/constants/actionTypes'

export default (state =  [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_SUCCEEDED:
            return [
                ...state,
                ...action.response.data
            ];
        case actionTypes.FETCH_POSTS_FAILED:
            return [
                ...state,
                { error: action.error }
            ];
        default:
            return state;
    }
}