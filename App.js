import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import AppContainer from './components/AppContainer';

const store = createStore(reducer, middleware);

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}
