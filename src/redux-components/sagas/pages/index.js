import { call, put } from 'redux-saga/effects';
import pagesActions from 'redux-components/actions/pages';
import { fetchEndpoint } from 'api';

export function* fetchPages() {
    try {
        const data = yield call(fetchEndpoint, 'pages');
        yield put(pagesActions.getPagesSucceeded(data));
    } catch (error) {
        yield put(pagesActions.getPagesFailed(error));
    }
}