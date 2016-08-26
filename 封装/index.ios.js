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
  Image
} from 'react-native';
var Header = require('./happy.js');
class zhouyanyu extends Component {
  render() {
    return (
      <View style={styles.word}>
      <Header name={'Sunday'}></Header>
      <Header name={'Monday'}></Header>
      <Header name={'Friday'}></Header>
      <Header name={'Sunday'}></Header>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  word:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
