/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	Navigator
} from 'react-native';
import FirstPage from './FirstPage';

class Demo10 extends Component {
	render() {
		let defaultName = 'FirstPage';
		let defaultComponent = FirstPage;
		return (
			<Navigator
				style={{flex: 1}}
				initialRoute={{name: defaultName, component: defaultComponent}}
				configureScene={this.configureScene}
				renderScene={this.renderScene}
			/>
		);
	}

	configureScene(route, routeStack) {
		if (route.sceneConfig) {
			return route.sceneConfig;
		}
		return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
	}

	renderScene(route, navigator) {
		return <route.component {...route.passProps} navigator={navigator}/>;
	}
}

AppRegistry.registerComponent('Demo10', () => Demo10);
