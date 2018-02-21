import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/Reducer/IndexReducer';
import AppWithNavigationState from './src/Navigation/AppNavigator';
import { middleware } from './src/Utils/redux';

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';


/**
 * 默认存储30天
 * @type {Storage}
 */
let storage = new Storage({
    size:1000,
    storageBackend:AsyncStorage,
    defaultExpires:1000*3600*24*30,
    enableCache:true,
});

global.storage = storage;

const store = createStore(
    AppReducer,
    applyMiddleware(middleware),
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}