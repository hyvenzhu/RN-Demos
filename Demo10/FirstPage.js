/**
 * Created by Administrator on 2016/7/5 0005.
 */
import React, {Component} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Navigator
} from 'react-native';

import SecondPage from './SecondPage';

class FirstPage extends Component {
	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
				<Text>First Page. From {this.props.from}</Text>
				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._push.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>push</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._jumpForward.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>jumpForward</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	_push()
	{
		this.props.navigator.push({
			id: 'SecondPage',
			component: SecondPage,
			passProps: {
				from: 'First Page'
			},
			sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
		});
	}

	_jumpForward()
	{
		this.props.navigator.jumpForward();
	}

	componentDidMount() {
		console.log("FirstPage: componentDidMount");
	}

	componentWillUnmount() {
		console.log("FirstPage: componentWillUnmount");
	}
}
export default FirstPage;

