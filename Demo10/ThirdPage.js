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
import FourthPage from './FourthPage';
class ThirdPage extends Component {
	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
				<Text>This is Third Page. From {this.props.from}</Text>
				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}}
				                  onPress={this._popToTop.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>popToTop</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._popToRouteById.bind(this, 'FirstPage')}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>popToRoute</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._replacePrevious.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>replacePrevious</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{marginTop: 30, backgroundColor: '#FF0000'}} onPress={this._pop.bind(this)}>
					<View style={{alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
						<Text style={{textAlign: 'center', color: '#FFFFFF'}}>pop</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	_popToTop() {
		this.props.navigator.popToTop();
	}

	_popToRouteById(id) {
		var destRoute;
		this.props.navigator.getCurrentRoutes().map((route, i) => {
			if (route.id === id) {
				destRoute = route;
			}
		});
		// 携带参数
		destRoute.passProps = {from: 'Third Page'};
		this.props.navigator.popToRoute(destRoute);
	}

	_replacePrevious()
	{
		this.props.navigator.replacePrevious({
			id: 'FourthPage',
			component: FourthPage,
		});
	}

	_pop()
	{
		this.props.navigator.pop();
	}

	componentDidMount() {
		console.log("ThirdPage: componentDidMount");
	}

	componentWillUnmount() {
		console.log("ThirdPage: componentWillUnmount");
	}
}
export default ThirdPage;

