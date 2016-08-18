/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator
} from 'react-native';

import LoginPage from '../pages/LoginPage'

export default class App extends Component {
  render() {
    return (
        <Navigator
            style={{flex: 1}}
            initialRoute= {{id: 'LoginPage', component: LoginPage}}
            configureScene= {this.configureScene}
            renderScene= {this.renderScene}
        />
    );
  }
  configureScene(route, routeStack) {
    if (route.sceneConfig) { // 有设置场景
        return route.sceneConfig;
    }
    return Navigator.SceneConfigs.PushFromRight; // 默认，右侧弹出
  }
  renderScene(route, navigator) {
    return <route.component {...route.passProps} navigator= {navigator}/>;
  }
}
