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
     let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>
           我是本地图片
         </Text>
         <Image source={require('./images/tx.png')} style={styles.tx}/>
         <Text style={styles.welcome}>
           我是网络图片
         </Text>
         <Image style={styles.tx} source={pic}/>
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
   tx: {
     width:200,
     height:100,
   },
 });

 AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
