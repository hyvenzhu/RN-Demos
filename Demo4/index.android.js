/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var SwipeMenuListView = require('./SwipeMenuListView');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

class Demo4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwipeMenuListView style={styles.listView}>
        </SwipeMenuListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

AppRegistry.registerComponent('Demo4', () => Demo4);
