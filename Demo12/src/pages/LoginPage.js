/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {doLogin} from '../actions/Login'

import MainPage from '../pages/MainPage'

class LoginPage extends Component {

  shouldComponentUpdate(nextProps, nextState)
  {
    if (nextProps.isSuccess) {
      this.props.navigator.push({
        id: 'MainPage',
        component: MainPage
      });
      return false;
    }
    return true;
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Text>{'loading:' + this.props.loading + '\nisSuccess:' + this.props.isSuccess}</Text>
        <TouchableOpacity style={{backgroundColor: '#FF0000'}} onPress={this.handleLogin.bind(this)}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
            <Text style={{color: '#FFFFFF', fontSize: 20}}>登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  handleLogin()
  {
    this.props.dispatch(doLogin());
  }
}

function select(store)
{
  return {
    loading: store.loginIn.loading,
    isSuccess: store.loginIn.isSuccess
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(select)(LoginPage);
