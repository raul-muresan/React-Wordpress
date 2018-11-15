import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from 'redux-components/sagas';

import posts from 'redux-components/reducers/posts';
import pages from 'redux-components/reducers/pages';

const rootReducer = combineReducers({
    posts,
    pages
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

sagaMiddleware.run(sagas);