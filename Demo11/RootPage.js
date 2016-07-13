/**
 * Created by Administrator on 2016/7/13 0013.
 */
import React, {Component} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Navigator
} from 'react-native';

class FirstPage extends Component {
	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
				<Text>Root Page.</Text>
			</View>
		);
	}
}
export default FirstPage;
