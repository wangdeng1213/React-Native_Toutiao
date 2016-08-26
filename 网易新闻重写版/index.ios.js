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
     StyleSheet,
     TouchableOpacity
 } from 'react-native';

var Header = require('./Header');
var List = require('./List');
var Page = require('./Page');

class HomePage extends Component{
  render(){
    return(
      <View style={styles.flex}>
       <Header></Header>
       <List
         navigator={this.props.navigator}
         news={[
         '宇航员在太空宣布“三体”获奖',
         'NASA发短片纪念火星征程50年',
         '男生连续做一周苦瓜吃吐女友',
         '女童遭鲨鱼袭击又下海救伙伴']}>
        </List>
      </View>
    );
  }
}

class DetailPage extends React.Component {
    render() {
        return (
            <View style={styles.flex}>
              <View style={styles.container}>
                <Header></Header>
                <Page
                  navigator={this.props.navigator}
                  index={this.props.index}
                  >
                </Page>
              </View>
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
      case 'main':
        return(<HomePage navigator={navigator}></HomePage>);
      case 'detail':
        return(<DetailPage navigator={navigator} index={route.index}></DetailPage>);
      default:
    }
  }
   render() {
       return (
         <Navigator
           initialRoute={{ name: 'main' }}
           configureScene={this.configFunc}
           renderScene={this.RenderFunc}/>
     );
   }
 }

const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pic:{
    flex:1,
    marginTop:10,
    width:300,
    height:200,
  },
  word: {
    margin:30,
    fontSize:20,
    textAlign:'center',
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
