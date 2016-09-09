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
  View
} from 'react-native';

class Header extends Component {
  render() {
    return(
      <View style={styles.flex}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>今日</Text>
          <Text style={styles.font_2}>头条</Text>
          <Text>无态度°</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    marginTop:25,
    height:50,
    borderBottomWidth:3,
    borderBottomColor:'red',
  },
  font:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
  font_1:{
    color:'red',
  },
  font_2:{
    color:'#ffffff',
    backgroundColor:'red',
  }
});
module.exports = Header;
