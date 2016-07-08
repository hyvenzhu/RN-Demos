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

class FourthPage extends Component {
	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
				<Text>Fourth Page</Text>
				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._pop.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>pop</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	_pop()
	{
		this.props.navigator.pop();
	}

	componentDidMount() {
		console.log("FirstPage: componentDidMount");
	}

	componentWillUnmount() {
		console.log("FirstPage: componentWillUnmount");
	}
}
export default FourthPage;

