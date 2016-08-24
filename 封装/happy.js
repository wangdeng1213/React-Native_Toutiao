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
class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.box}>
            <Text style={styles.word}>
              {this.props.name}
            </Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.word}>
              {this.props.name}
            </Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.box2}>
            <Text style={styles.word}>
              {this.props.name}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.word}>
              {this.props.name}
            </Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.box}>
            <Text style={styles.word}>
              {this.props.name}
            </Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.word}>
              {this.props.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  container2:{
    flex:1,
    flexWrap:'wrap',
  },
  box:{
    flex:1,
    backgroundColor:'#ffcccc',
  },
  box2:{
    flex:1,
    backgroundColor:'#ccffcc',
  },
  word:{
    textAlign:'center',
    fontSize: 15,
    margin: 15,
  },
});
module.exports = Header;
