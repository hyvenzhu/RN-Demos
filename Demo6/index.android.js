/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
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
          locked={false}
          page={2}
          ref='scrollableTabView'
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
    this.refs.scrollableTabView.goToPage(index);
  }
}
AppRegistry.registerComponent('Demo6', () => Demo6);
