/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import React from 'react';

import store from './components/store/store';
import App from './App';


var x = ()=>(
        <Provider store={store}>
        </Provider>   
)

AppRegistry.registerComponent(appName, () => x);
