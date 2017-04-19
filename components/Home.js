'use strict';

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Home extends React.Component {
    render(){
        let Actions = this.props.routes;
        return (
            <View style={styles.container}>
                <Text>Home page</Text>
                <Button onPress={ Actions.settings }  title={ this.props.btnText } >Go settings</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55efef',
    },
});

module.exports = Home;
