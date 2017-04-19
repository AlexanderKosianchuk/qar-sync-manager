'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-native-redux-router';
import { Provider } from 'react-redux';
import App from './components/App';

let store = createStore(combineReducers({routerReducer}));

export default class QarSyncManager extends Component {
  render() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
  }
}

/*export default class QarSyncManager extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}*/

AppRegistry.registerComponent('QarSyncManager', () => QarSyncManager);
