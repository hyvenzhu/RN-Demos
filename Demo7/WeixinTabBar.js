'use strict';

import React, {Component} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class WeixinTabBar extends Component {

	propTypes = {
		goToPage: React.PropTypes.func,
		activeTab: React.PropTypes.number,
		tabs: React.PropTypes.array,
	}

	setAnimationValue({value}) {

	}

	renderTabOption(tab, i) {
		return (
			<TouchableOpacity onPress={()=>this.props.goToPage(i)} key={tab} style={styles.tab}>
				<View style={styles.tabItem}>
					<Icon
						name={tab}
						size={30}/>
					<Text>
						{tab.tabName}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={styles.tabs}>
				{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		height: 50,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
});


export default WeixinTabBar;