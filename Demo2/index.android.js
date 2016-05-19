/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var ToastAndroid = require('ToastAndroid');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Demo2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressButton}>
          <Text style={styles.instructions}>
          Click to show native Toast
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function onPressButton() {
  ToastAndroid.show('Awesome', ToastAndroid.SHORT);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Demo2', () => Demo2);
