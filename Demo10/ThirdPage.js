/**
 * Created by Administrator on 2016/7/5 0005.
 */
import React, {Component} from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import FirstPage from './FirstPage';
class ThirdPage extends Component {
	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
				<Text>This is Third Page. From {this.props.from}</Text>
				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={()=>{
					// this.props.navigator.popToTop();
					this.props.navigator.popToRoute({
						name: 'FirstPage',
					});
				}}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>popToTop</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	componentDidMount() {
		console.log("ThirdPage: componentDidMount");
	}

	componentDidUnMount() {
		console.log("ThirdPage: componentDidUnMount");
	}

	componentWillUnMount() {
		console.log("ThirdPage: componentWillUnMount");
	}
}
export default ThirdPage;

