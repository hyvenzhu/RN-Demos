/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>登陆成功，欢迎使用</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
