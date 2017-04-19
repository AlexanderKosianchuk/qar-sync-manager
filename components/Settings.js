'use strict';

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Settings extends React.Component {
    render() {
        var Actions = this.props.routes;
        return (
            <View style={ styles.container }>
                <Text>Settings page</Text>
                <Button onPress={ Actions.home } title={ this.props.btnText }>Go home</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efef55',
    }
});

module.exports = Settings;
