/**
 * Created by Administrator on 2016/7/5 0005.
 */
import React, {Component} from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

class FirstPage extends Component {
	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
				<Text>First Page</Text>
				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>Push</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
export default FirstPage;

