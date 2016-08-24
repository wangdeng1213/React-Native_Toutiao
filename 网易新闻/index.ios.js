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
// 读取头标签 
var Header = require('./Header.js');
var List = require('./List.js');

class HomePage extends Component{
  constructor(props) {
      super(props);
      this.state = {};
  }
  _pressButton1() {
      this.props.navigator.push({name:'Second'});
  }
  _pressButton2() {
      this.props.navigator.push({name:'Third'});
  }
  _pressButton3() {
      this.props.navigator.push({name:'Fourth'});
  }
  _pressButton4() {
      this.props.navigator.push({name:'Fifth'});
  }
  render(){
    return(
      <View style={styles.flex}>
       <Header></Header>
       <TouchableOpacity onPress={this._pressButton1.bind(this)}>
           <List title='宇航员在太空宣布“三体”获奖'></List>
       </TouchableOpacity>
       <TouchableOpacity onPress={this._pressButton2.bind(this)}>
           <List title='NASA发短片纪念火星征程50年'></List>
       </TouchableOpacity>
       <TouchableOpacity onPress={this._pressButton3.bind(this)}>
           <List title='男生连续做一周苦瓜吃吐女友'></List>
       </TouchableOpacity>
       <TouchableOpacity onPress={this._pressButton4.bind(this)}>
           <List title='女童遭鲨鱼袭击又下海救伙伴'></List>
       </TouchableOpacity>
      </View>
    );
  }
}

class Page_1 extends React.Component {
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.word}>宇航员在太空宣布“三体”获奖</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.word}>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Page_2 extends React.Component {
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.word}>NASA发短片纪念火星征程50年</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.word}>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Page_3 extends React.Component {
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.word}>男生连续做一周苦瓜吃吐女友</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.word}>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Page_4 extends React.Component {
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.word}>女童遭鲨鱼袭击又下海救伙伴</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.word}>返回</Text>
                </TouchableOpacity>
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
        return(<HomePage navigator={navigator}></HomePage>);
      case 'Second':
        return(<Page_1 navigator={navigator}></Page_1>);
      case 'Third':
        return(<Page_2 navigator={navigator}></Page_2>);
      case 'Fourth':
        return(<Page_3 navigator={navigator}></Page_3>);
      case 'Fifth':
        return(<Page_4 navigator={navigator}></Page_4>);
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
  flex:{
    flex:1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  word: {
    margin:30,
    fontSize:25,
    textAlign:'center',
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
