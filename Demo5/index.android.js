/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
class Demo5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.r}>
          R
        </Text>
        <Text style={styles.g}>
          G
        </Text>
        <Text style={styles.b}>
          B
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // column：垂直排列（垂直是主轴，水平是交叉轴）  row：横向排列（水平是主轴，垂直是交叉轴）
    backgroundColor: '#000000',
    flexWrap: 'wrap', // 水平或垂直布局时：如果子View放不下，则自动换行, 默认为'nowrap'
  },
  r: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
  },
  g: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#00FF00',
    color: '#FFFFFF',
  },
  b: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#0000FF',
    color: '#FFFFFF',
    position: 'relative',
    left: 100,
    top: 100
  },
});

AppRegistry.registerComponent('Demo5', () => Demo5);
