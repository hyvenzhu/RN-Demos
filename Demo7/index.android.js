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

	constructor(props) {
		super(props);

		this.state = {
			tabNames: ['Tab1', 'Tab2', 'Tab3', 'Tab4'],
			tabIconNames: ['ios-paper', 'ios-albums', 'ios-paper-plane', 'ios-person-add'],
		};
	}

	render() {
		let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
		return (
			<ScrollableTabView
				renderTabBar={() => <WeixinTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
				tabBarPosition='bottom'>

				<View style={styles.content} tabLabel='key1'>
					<Text>#1</Text>
				</View>

				<View style={styles.content} tabLabel='key2'>
					<Text>#2</Text>
				</View>

				<View style={styles.content} tabLabel='key3'>
					<Text>#3</Text>
				</View>

				<View style={styles.content} tabLabel='key4'>
					<Text>#4</Text>
				</View>
			</ScrollableTabView>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EBEBEB',
		flex: 1
	}
});

AppRegistry.registerComponent('Demo7', () => Demo7);
