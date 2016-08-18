/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Root from './src/Root';

class Demo12 extends Component {
  render() {
    return (
      <Root/>
    );
  }
}

AppRegistry.registerComponent('Demo12', () => Demo12);
