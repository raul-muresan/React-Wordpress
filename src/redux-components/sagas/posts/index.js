import { call, put } from 'redux-saga/effects';
import postsActions from 'redux-components/actions/posts';
import { fetchEndpoint } from 'api';

export function* fetchPosts() {
    try {
        const data = yield call(fetchEndpoint, 'posts');
        yield put(postsActions.getPostsSucceeded(data));
    } catch (error) {
        yield put(postsActions.getPostsFailed(error));
    }
}
