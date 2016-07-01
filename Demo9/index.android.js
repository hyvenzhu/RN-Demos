/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, LayoutAnimation, TouchableOpacity, Image} from "react-native";

class Demo9 extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			width: 100,
			height: 100
		};
	}

	onPress() {
		// LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
		LayoutAnimation.configureNext({
			duration: 7000,   //持续时间
			update: {
				type: 'linear',
				property: 'opacity'
			},
		});
		this.setState({width: this.state.width + 10, height: this.state.height + 10});
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./icon.jpg')} style={{width: this.state.width, height: this.state.height}}/>

				<TouchableOpacity style={styles.instructions} onPress={()=>this.onPress()}>
					<Text style={{alignSelf: 'center', color: '#FFFFFF'}}>
						Press me!
					</Text>
				</TouchableOpacity>
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
		flexDirection: 'column'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		backgroundColor: '#00FF00',
		width: 150,
		height: 80,
	},
	instructions: {
		backgroundColor: '#FF0000',
		width: 80,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
});

AppRegistry.registerComponent('Demo9', () => Demo9);
