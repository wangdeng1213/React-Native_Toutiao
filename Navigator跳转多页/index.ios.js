/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
     View,
     Navigator,
     AppRegistry
 } from 'react-native';
 import FirstPageComponent from './FirstPageComponent';

 export default class zhouyanyu extends React.Component {
     render() {
         let defaultName = 'FirstPageComponent';
         let defaultComponent = FirstPageComponent;
         return (
         <Navigator
           initialRoute={{ name: defaultName, component: defaultComponent }}
           configureScene={(route) => { //定义 场景
             return Navigator.SceneConfigs.VerticalDownSwipeJump;
           }}
           renderScene={(route, navigator) => {  //根据route对象 参数通过Navigator对象进行页面进行跳转
             let Component = route.component;
             return <Component {...route.params} navigator={navigator} />
           }} />
         );
     }
 }


AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
