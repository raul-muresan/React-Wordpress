import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import actionTypes from 'redux-components/constants/actionTypes';
import * as postsSagas from 'redux-components/sagas/posts';
import * as pagesSagas from 'redux-components/sagas/pages';

export default function* rootSaga() {
    yield all([
        takeLatest(actionTypes.FETCH_POSTS, postsSagas.fetchPosts),
        takeLatest(actionTypes.FETCH_PAGES, pagesSagas.fetchPages),
    ]);
}