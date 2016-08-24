/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React,{Component} from 'react';
 import {
     View,
     Navigator,
     AppRegistry,
     Image,
     Text,
     StyleSheet
 } from 'react-native';

class FirstPage extends Component{
  PressMe(){
    this.props.navigator.push({name:'Second'});
  }
  PressMe2(){
    this.props.navigator.push({name:'Three'});
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>第一页</Text>
        <Text onPress={this.PressMe.bind(this)}>第二页</Text>
        <Text onPress={this.PressMe2.bind(this)}>第三页</Text>
      </View>
    );
  }
}

class SecondPage extends Component{
  PressMe(){
    this.props.navigator.pop();
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>第二页</Text>
        <Text onPress={this.PressMe.bind(this)}>上一页</Text>
      </View>
    );
  }
}

class ThreePage extends Component{
  PressMe(){
    this.props.navigator.pop();
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>第三页</Text>
        <Text onPress={this.PressMe.bind(this)}>上一页</Text>
      </View>
    );
  }
}

class zhouyanyu extends React.Component {
    configFunc(){
      return Navigator.SceneConfigs.VerticalDownSwipeJump;
    }
    RenderFunc(route,navigator){
      switch (route.name) {
        case 'First':
          return(<FirstPage navigator={navigator}></FirstPage>);
        case 'Second':
          return(<SecondPage navigator={navigator}></SecondPage>);
        case 'Three':
          return(<ThreePage navigator={navigator}></ThreePage>);
        default:
      }
    }
     render() {
         return (
         <Navigator
           initialRoute={{ name: 'First' }}
           configureScene={this.configFunc}
           renderScene={this.RenderFunc}
           />
         );
     }
 }

const styles = StyleSheet.create({
  container:{
    margin:100,
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
