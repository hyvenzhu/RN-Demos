/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	Navigator,
	View,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import  RootPage from './RootPage';
class Demo11 extends Component {
	render() {
		return (
			<Navigator
				style={{flex: 1}}
				initialRoute= {{id: 'RootPage', component: RootPage}}
				configureScene= {this.configureScene}
				renderScene= {this.renderScene}
				navigationBar= {
					<Navigator.NavigationBar
						style={{backgroundColor: '#00FF00'}}
						routeMapper={NavigationBarRouteMapper}/>
				}
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

var styles = StyleSheet.create({
	// 页面框架
	container: {
		flex: 4,
		marginTop: 100,
		flexDirection: 'column'
	},
	// 导航栏
	navContainer: {
		backgroundColor: '#81c04d',
		paddingTop: 12,
		paddingBottom: 10,
	},
	// 导航栏文字
	headText: {
		color: '#ffffff',
		fontSize: 22
	},
	// 按钮
	button: {
		height: 60,
		marginTop: 10,
		justifyContent: 'center', // 内容居中显示
		backgroundColor: '#ff1049',
		alignItems: 'center'
	},
	// 按钮文字
	buttonText: {
		fontSize: 18,
		color: '#ffffff'
	},
	// 左面导航按钮
	leftNavButtonText: {
		color: '#ffffff',
		fontSize: 18,
		marginLeft: 13
	},
	// 右面导航按钮
	rightNavButtonText: {
		color: '#ffffff',
		fontSize: 18,
		marginRight: 13
	},
	// 标题
	title: {
		fontSize: 18,
		color: '#fff',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: 'bold',
		flex: 1                //Step 3
	}
});

// 导航栏的Mapper
var NavigationBarRouteMapper = {
	// 左键
	LeftButton(route, navigator, index, navState) {
		if (index > 0) {
			return (
				<View style={styles.navContainer}>
					<TouchableOpacity
						underlayColor='transparent'
						onPress={() => {if (index > 0) {navigator.pop()}}}>
						<Text style={styles.leftNavButtonText}>
							后退
						</Text>
					</TouchableOpacity>
				</View>
			);
		} else {
			return null;
		}
	},
	// 右键
	RightButton(route, navigator, index, navState) {
		if (route.onPress)
			return (
				<View style={styles.navContainer}>
					<TouchableOpacity
						onPress={() => route.onPress()}>
						<Text style={styles.rightNavButtonText}>
							{route.rightText || '右键'}
						</Text>
					</TouchableOpacity>
				</View>
			);
	},
	// 标题
	Title(route, navigator, index, navState) {
		return (
			<View style={styles.navContainer}>
				<Text style={styles.title}>
					应用标题
				</Text>
			</View>
		);
	}
};

AppRegistry.registerComponent('Demo11', () => Demo11);
