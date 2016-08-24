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

class List extends Component {
  render() {
    return(
      <View style={styles.list_item}>
        <Text style={styles.list_item_font}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  list_item:{
    marginLeft:10,
    marginRight:10,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#dddddd',
    justifyContent:'center',
  },
  list_item_font:{
    fontSize:16,
  }
});
module.exports = List;
