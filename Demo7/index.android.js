/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import WeixinTabBar from './WeixinTabBar';

class Demo7 extends Component {
	render() {
		return (
			<ScrollableTabView
				renderTabBar={() => <WeixinTabBar/>}
				tabBarPosition='bottom'>
				<Text tabLabel='ios-paper' style={styles.content}>
					#1
				</Text>
				<Text tabLabel='ios-people' style={styles.content}>
					#2
				</Text>
				<Text tabLabel='ios-paper-plane' style={styles.content}>
					#3
				</Text>
				<Text tabLabel='ios-person-add' style={styles.content}>
					#4
				</Text>
			</ScrollableTabView>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		alignSelf: 'center',
		flex: 1,
		backgroundColor: '#FF0000'
	}
});

AppRegistry.registerComponent('Demo7', () => Demo7);
