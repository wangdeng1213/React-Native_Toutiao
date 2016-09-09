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
  Image,
  ListView,
  Navigator,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
class SecondPage extends Component{
  PressMe(){
    this.props.navigator.push({name:'First'});
  }
  PressMe2(){
    this.props.navigator.push({name:'Third'});
  }
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.container31}>
      <View style={styles.container}>
      <Text
      onPress={this.PressMe.bind(this)}
      style={styles.welcomeBack}>返回</Text></View>
      <View style={styles.flex2}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>今日</Text>
          <Text style={styles.font_2}>头条</Text>
          <Text>无态度°</Text>
        </Text>
      </View>
      </View>
      <View style={styles.container21}>
      <View style={styles.box11}>
      <Text style={styles.welcome11}>评论我的</Text>
      </View>
      <View style={styles.box12}>
      <Text
      onPress={this.PressMe2.bind(this)}
      style={styles.welcome12}>通知</Text>
      </View>
      </View>
      <View style={styles.boxwhite}>
      <Image style={styles.Image3} source={require('./image/view.png')} />
      <Text style={styles.welcome13}>登陆后可以查看评论我的跟帖</Text>
      </View>
      </View>
    )
  }
}
class ThirdPage extends Component{
  PressMe3(){
    this.props.navigator.push({name:'First'});
  }
  PressMe4(){
    this.props.navigator.push({name:'Second'});
  }
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.container31}>
      <View style={styles.container}>
      <Text
      onPress={this.PressMe3.bind(this)}
      style={styles.welcomeBack}>返回</Text></View>
      <View style={styles.flex2}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>今日</Text>
          <Text style={styles.font_2}>头条</Text>
          <Text>无态度°</Text>
        </Text>
      </View>
      </View>
      <View style={styles.container21}>
      <View style={styles.box12}>
      <Text
      onPress={this.PressMe4.bind(this)}
      style={styles.welcome12}>评论我的</Text>
      </View>
      <View style={styles.box11}>
      <Text style={styles.welcome11}>通知</Text>
      </View>
      </View>
      <View style={styles.boxwhite}>
      <Image style={styles.Image3} source={require('./image/view.png')} />
      <Text style={styles.welcome13}>暂时还没有通知</Text>
      </View>
      </View>
    )
  }
}
class FourthPage extends Component{
  PressMe3(){
    this.props.navigator.push({name:'First'});
  }
  PressMe6(){
    this.props.navigator.push({name:'Fifth'});
  }
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.container31}>
      <View style={styles.container}>
      <Text
      onPress={this.PressMe3.bind(this)}
      style={styles.welcomeBack}>返回</Text></View>
      <View style={styles.flex2}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>今日</Text>
          <Text style={styles.font_2}>头条</Text>
          <Text>无态度°</Text>
        </Text>
      </View>
      </View>
      <View style={styles.container21}>
      </View>
      <View style={styles.boxwhite}>
      <View style={{ borderBottomColor: '#999999',borderBottomWidth: 1,marginTop:50,marginLeft:25,width: 300}}>
        <TextInput
          style={{height : 40,width: 300}}
          placeholder="用户名/手机号"
          onChangeText={(text)=> this.setState({text})}/>
      </View>
      <View style={{ borderBottomColor: '#999999',borderBottomWidth: 1,marginTop:10,marginLeft:25,width: 300}}>
        <TextInput
          style={{height : 40,width: 300}}
          placeholder="密码"
          onChangeText={(text)=> this.setState({text})}/>
      </View>
      <Text
      onPress={this.PressMe6.bind(this)}
      style={styles.welcome13}>登陆</Text>
      </View>
      <View style={{flex: 0.06,flexDirection:'row',flexWrap:'wrap',backgroundColor:'red'}}>
      </View>
      </View>
    )
  }
}
class FifthPage extends Component{
  PressMe3(){
    this.props.navigator.pop( );
  }
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.container31}>
      <View style={styles.container}>
      <Text
      onPress={this.PressMe3.bind(this)}
      style={styles.welcomeBack}>返回</Text></View>
      <View style={styles.flex2}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>今日</Text>
          <Text style={styles.font_2}>头条</Text>
          <Text>无态度°</Text>
        </Text>
      </View>
      </View>
      <View style={styles.container21}>
      </View>
      <View style={styles.boxwhite}>
      <Text style={{fontSize: 20,textAlign: 'center',marginTop: 100,color:'#999999'}}>登陆失败，用户名不存在!</Text>
      </View>
      <View style={{flex: 0.06,flexDirection:'row',flexWrap:'wrap',backgroundColor:'red'}}>
      </View>
      </View>
    )
  }
}
class FirstPage extends Component{
  PressMe(){
    this.props.navigator.push({name:'Second'});
  }
  PressMe5(){
    this.props.navigator.push({name:'Fourth'});
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.container3}>
        <Image style={styles.Image2} source={require('./image/1.png')} />
        <Text style={styles.welcome3}>游客1112
        </Text>
        </View>
        <View style={styles.container2}>
        <View style={styles.box1}>
        <Image style={styles.Image1} source={require('./image/read.png')} />
        <Text
        onPress={this.PressMe5.bind(this)}
        style={styles.welcome2}>阅读</Text>
        </View>
        <View style={styles.box1}>
        <Image style={styles.Image1} source={require('./image/love.png')} />
        <Text
        onPress={this.PressMe5.bind(this)}
        style={styles.welcome2}>收藏</Text>
        </View>
        <View style={styles.box1}>
        <Image style={styles.Image1} source={require('./image/write.png')} />
        <Text
        onPress={this.PressMe.bind(this)}
        style={styles.welcome2}>跟帖</Text>
        </View>
        <View style={styles.box1}>
        <Image style={styles.Image1} source={require('./image/money.png')} />
        <Text
        onPress={this.PressMe5.bind(this)}
        style={styles.welcome2}>金币</Text>
        </View>
        </View>
          <ScrollView contentcontainerstyle="{styles.contentContainer}" showsverticalscrollindicator="{true}">
            <View style={styles.container}>
              <View style={styles.box3}><Text
              onPress={this.PressMe.bind(this)}
              style={styles.welcome}>我的消息</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.box2}><Text
              onPress={this.PressMe5.bind(this)}
              style={styles.welcome}>金币商城</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.box2}><Text
              onPress={this.PressMe5.bind(this)}
              style={styles.welcome}>金币任务</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.box4}><Text
              onPress={this.PressMe5.bind(this)}
              style={styles.welcome}>我的钱包</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.box2}><Text
              onPress={this.PressMe5.bind(this)}
              style={styles.welcome}>活动广场</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.box2}><Text
              onPress={this.PressMe5.bind(this)}
              style={styles.welcome}>我的工具</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.box2}><Text
              onPress={this.PressMe5.bind(this)}
              style={styles.welcome}>我的设置</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.box2}><Text
              onPress={this.PressMe5.bind(this)}
              style={styles.welcome}>意见反馈</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.box2}><Text
              onPress={this.PressMe5.bind(this)}
              style={styles.welcome}>关于我们</Text>
              </View>
            </View>
          </ScrollView>
      </View>
    );
  }
}
export default class zhouyanyu extends Component {
  configFunc(){
    return Navigator.SceneConfigs.FadeAndroid;
  }
  renderFunc(route,navigator){
    switch(route.name){
      case 'First':
      return(<FirstPage navigator={navigator}>
        </FirstPage>);
      case'Second':
      return(<SecondPage navigator={navigator}>
        </SecondPage>);
      case'Third':
      return(<ThirdPage navigator={navigator}>
        </ThirdPage>);
      case'Fourth':
      return(<FourthPage navigator={navigator}>
        </FourthPage>);
      case'Fifth':
      return(<FifthPage navigator={navigator}>
        </FifthPage>);
        break;
    }
  }
  render() {
    return (
      <Navigator initialRoute={{name:'First'}}
      configureScene={this.configFunc}
      renderScene={this.renderFunc}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 0.25,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  container21: {
    flex: 0.06,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  container3: {
    flex: 0.75,
      backgroundColor:'red',
  },
  container31: {
    flex: 0.1,
      backgroundColor:'white',
      borderBottomWidth:4,
      borderColor:'red',
      flexDirection:'row',
      flexWrap:'wrap',
  },
  box1:{
  	flex: 1,
  	backgroundColor:'white',
    borderLeftWidth:0.5,
    borderRightWidth:0.5,
    borderBottomWidth:1,
    borderColor:'#cccccc',
  },
  box11:{
    flex: 1,
    backgroundColor:'white',
    borderBottomWidth:1.5,
    borderColor:'red',
  },
  box12:{
    flex: 1,
    backgroundColor:'white',
    borderBottomWidth:1.5,
    borderColor:'white',
  },
  box2:{
  	flex: 1,
  	backgroundColor:'#ffffff',
    borderBottomWidth:1,
    borderColor:'#cccccc',
  },
  box3:{
  	flex: 1,
  	backgroundColor:'white',
    borderTopWidth:4,
    borderBottomWidth:4,
    borderColor:'#cccccc',
  },
  box4:{
  	flex: 1,
  	backgroundColor:'white',
    borderBottomWidth:4,
    borderColor:'#cccccc',
  },
  boxwhite:{
  	flex: 1,
  	backgroundColor:'white',
    borderColor:'#cccccc',
  },
  welcome: {
    fontSize: 14,
    margin: 10,
    color:'black',
    marginLeft:20,
  },
  welcome1: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color:'#ffffff',
  },
  welcomeBack: {
    fontSize: 16,
    marginTop: 20,
    marginLeft:20,
    color:'red',
  },
  welcome2: {
    fontSize: 16,
    textAlign: 'center',
    color:'#999999',
  },
  welcome3: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color:'#ffffff',
  },
  welcome11: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color:'red',
  },
  welcome12: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color:'#999999',
  },
  welcome13: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color:'#999999',
  },
  Image1:{
    width:30,
    height:30,
    alignSelf:'center',
    marginTop:10,
  },
  Image2:{
    width:120,
    height:120,
    alignSelf:'center',
    marginTop:50,
  },
  Image3:{
    width:180,
    height:180,
    alignSelf:'center',
    marginTop:120,
  },
  contentContainer: {
      margin:10,
      backgroundColor:"#ff0000",
    },
    flex2:{
      flex: 4,
      marginTop:15,
      marginRight:45,
      height:50,
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
