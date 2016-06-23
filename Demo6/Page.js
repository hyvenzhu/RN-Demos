'use strict';

import React, { Component,PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class Page extends Component {

  propTypes = {
    goToPage: PropTypes.func,
    nextPage: PropTypes.number
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=>{
          this.props.goToPage(this.props.nextPage);
        }}
        >
      	  <Text>Click to next page: Tab{this.props.nextPage + 1}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  componentDidMount() {
    console.log('mounted');
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FAEBD7',
  }
});

export default Page;