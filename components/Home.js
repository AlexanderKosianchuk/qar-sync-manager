'use strict';

import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, AsyncStorage } from 'react-native';

const STORAGE_PREFIX = '@QarSyncManagerFiles:files';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: 'file1',
            file: 'empty',
        };
    }

    addFile() {
        AsyncStorage
            .setItem(STORAGE_PREFIX, this.state.inputText)
            .done(() => {
                this.setState({file: this.state.inputText});
            });
    }

    render() {
        let Actions = this.props.routes;
        return (
            <View style={styles.container}>
                <Text>Home page</Text>
                <Button onPress={ Actions.settings }  title={ this.props.btnText } >Go settings</Button>
                <Text style={styles.filesTitle}>Files:</Text>
                <Text>{ this.state.file }</Text>
                <TextInput style={ styles.inputFileName }
                    autoCapitalize="none"
                    value={this.state.inputText}
                    onChangeText={(text) => this.setState({inputText: text})}
                />
                <Button onPress={ this.addFile.bind(this) }  title="addFile" >Add File</Button>
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
    filesTitle: {
        margin: 25,
    },
    inputFileName: {
        width: 300,
    }
});

module.exports = Home;
