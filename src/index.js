import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'redux-components/store';

import Test from 'containers/Test';
import Posts from 'containers/Posts';
import Pages from 'containers/Pages';

const RenderApp = () => (
    <div>
        <Posts />
        <Pages />
    </div>
);

const App = () => (
    <Provider store={store}>
        <RenderApp />
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);