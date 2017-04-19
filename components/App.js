'use strict';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, routerReducer, Route } from 'react-native-redux-router';
import Home from './Home';
import Settings from './Settings';

export default class App extends Component {
    render(){
        return (
            <View style={ styles.container }>
                <Router>
                    <Route name="home" component={ Home } btnText="Go Settings" type="replace" />
                    <Route name="settings" component={ Settings } btnText="Go Home" type="replace" />
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
