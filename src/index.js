import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'redux-components/store';

import Test from 'containers/Test';

const App = () => (
    <Provider store={store}>
        <Test />
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);