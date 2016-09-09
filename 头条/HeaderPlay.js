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
          <Text style={styles.font_1}>
            玩乐频道
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    height:60,
    backgroundColor:'white',
    borderBottomWidth:4,
    borderColor:'red',
  },
  font:{
    marginTop:20,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
  font_1:{
    color:'red',
    fontSize: 24,
  },
});
module.exports = Header;
