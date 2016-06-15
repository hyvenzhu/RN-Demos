/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ToastAndroid,
} from 'react-native';

// 仅数据展示
// var SwipeMenuListView = require('./SwipeMenuListView');
// class Demo4 extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SwipeMenuListView style={styles.listView} array={["Java", "C", "C++", "C#", "Python", "PHP"
//                   , "Visual Basic .NET", "JavaScript", "Assembly Language", "Ruby", "Perl"
//                   , "Delphi", "Visual Basic", "Swift", "MATLAB", "Pascal"]}>
//         </SwipeMenuListView>
//       </View>
//     );
//   }
// }

// 数据展示和事件交互
var SwipeMenuListView = require('./SwipeMenuListViewComponent');
class Demo4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwipeMenuListView style={styles.listView} array={["Java", "C", "C++", "C#", "Python", "PHP"
                  , "Visual Basic .NET", "JavaScript", "Assembly Language", "Ruby", "Perl"
                  , "Delphi", "Visual Basic", "Swift", "MATLAB", "Pascal"]} 
                  onDelete={(event)=>{
                       ToastAndroid.show(event.nativeEvent.language, ToastAndroid.SHORT);
                    }
                  }>
        </SwipeMenuListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

AppRegistry.registerComponent('Demo4', () => Demo4);
