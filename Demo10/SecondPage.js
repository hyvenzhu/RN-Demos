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
import ThirdPage from './ThirdPage';

class SecondPage extends Component {
	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
				<Text>This is Second Page. From {this.props.from}</Text>
				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._pop.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>pop</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._push.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>push</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._jumpBack.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>jumpBack</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	_push()
	{
		this.props.navigator.push({
			id: 'ThirdPage',
			component: ThirdPage,
			passProps: {
				from: 'Second Page'
			},
			sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
		});
	}

	_pop()
	{
		this.props.navigator.pop();
	}

	_jumpBack() {
		this.props.navigator.jumpBack();
	}

	componentDidMount() {
		console.log("SecondPage: componentDidMount");
	}

	componentWillUnmount() {
		console.log("SecondPage: componentWillUnmount");
	}
}
export default SecondPage;

