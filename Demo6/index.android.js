/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    ToastAndroid
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Page from './Page'

class Demo6 extends Component {
  constructor () {
    super();
    this.goToPage = this.goToPage.bind(this);
  }

  render() {
    return (
      <ScrollableTabView
          renderTabBar={() => <DefaultTabBar />}
          tabBarPosition='top'
          onChangeTab={(obj) => {
            // console.log('index:' + obj.i);
          }}
          onScroll={(postion) => {
            // float类型 [0, tab数量-1]
            // console.log('scroll position:' + postion);
          }}
          ref='scrollableTabView'
          tabBarUnderlineColor='#FF0000'
          tabBarBackgroundColor='#FFFFFF'
          tabBarActiveTextColor='#9B30FF'
          tabBarInactiveTextColor='#7A67EE'
          tabBarTextStyle={{fontSize: 18}}
      >
        <Page tabLabel='Tab1' goToPage={this.goToPage} nextPage={1}/>
        <Page tabLabel='Tab2' goToPage={this.goToPage} nextPage={2}/>
        <Page tabLabel='Tab3' goToPage={this.goToPage} nextPage={3}/>
        <Page tabLabel='Tab4' goToPage={this.goToPage} nextPage={4}/>
        <Page tabLabel='Tab5' goToPage={this.goToPage} nextPage={5}/>
        <Page tabLabel='Tab6' goToPage={this.goToPage} nextPage={0}/>
      </ScrollableTabView>
    );
  }

  goToPage(index)
  {
    // 通过ref拿到真实的dom
    this.refs.scrollableTabView.goToPage(index);
  }
}
AppRegistry.registerComponent('Demo6', () => Demo6);
