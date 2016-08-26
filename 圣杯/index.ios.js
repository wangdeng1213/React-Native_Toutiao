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

class zhouyanyu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.word}>header</Text>
        </View>
        <View style={styles.containerOne}>
          <View style={styles.boxOne}>
            <Text style={styles.word}>left</Text>
          </View>
          <View style={styles.boxTow}>
            <Text style={styles.word}>center</Text>
          </View>
          <View style={styles.boxOne}>
            <Text style={styles.word}>right</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.word}>footer</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap',
  	backgroundColor:'blue',
  },
  containerOne:{
    flex:3,
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'yellow',
  },
  box:{
    flex:1,
    backgroundColor:'#CCFFFF',
  },
  boxOne:{
    flex:1,
    backgroundColor:'#FFFFCC',
  },
  boxTow:{
    flex:2,
    backgroundColor:'#FFCCCC',
  },
  word:{
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  tx:{
    width:200,
    height:100,
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
