/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var CallbackAndroid = require('./CallbackAndroid');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Demo3 extends Component {
  // es6语法，如果使用React.createClass则使用getInitialState
  constructor () {
    super();
    this.state = {
      result: ''
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
            CallbackAndroid.testCallback((msg)=>{
              this.setState({result: msg});
            });
          }}>
          <Text style={styles.welcome}>
            Callback1ssss
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{
            try {
              var {
                msg
              } = await CallbackAndroid.testPromise();
              
              this.setState({result: msg});
            } catch (error) {
              console.log(error);
            }
          }}>
          <Text style={styles.welcome}>
            Promise
          </Text>
        </TouchableOpacity>
        
        <Text style={styles.instructions}>
          {this.state.result}
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Demo3', () => Demo3);
