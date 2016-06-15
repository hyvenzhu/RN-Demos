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
    flexDirection: 'row', // column：垂直排列（垂直是主轴，水平是交叉轴）  row：横向排列（水平是主轴，垂直是交叉轴）
    justifyContent: 'center', // 设置子布局在主轴方向位置
    alignItems: 'center', // 设置子布局在交叉轴方向位置
    backgroundColor: '#000000',
    flexWrap: 'wrap', // 水平或垂直布局时：如果子View放不下，则自动换行, 默认为'nowrap'
    borderBottomWidth: 10, // 边界线条粗细
    borderColor: '#FF0000', // 边界线条颜色
  },
  r: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
    alignSelf: 'flex-start', // 当前View在交叉轴方向位置
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
  },
});

AppRegistry.registerComponent('Demo5', () => Demo5);
