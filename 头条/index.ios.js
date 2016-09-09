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
  Image,
  ListView,
  Navigator,
  View
} from 'react-native';
console.disableYellowBox = true;
import TabBar from 'react-native-xtabbar';
import SideMenu from 'react-native-side-menu';
import Home from './Home';
import Class from './Class';
import Play from './Play';
import Me from './Me';

class zhouyanyu extends Component {
  configureScene(){
     return Navigator.SceneConfigs.HorizontalSwipeJump;
  }
  renderScene(route,navigator){
    switch(route.name){
      case 'Home':
        return <Home navigator={navigator} index={'0'}></Home>;
      case 'Play':
        return <Play navigator={navigator} index={'1'}></Play>;
      case 'Me':
        return <Me navigator={navigator} index={'2'}></Me>;
      case 'Class':
        return <Class navigator={navigator} index={'3'}></Class>;
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <TabBar style={styles.content}>
              <TabBar.Item
                  icon={require('./image/home_normal.png')}
                  selectedIcon={require('./image/home_hightlight.png')}
                  title='首页'>
                  <Navigator initialRoute={{name:'Home'}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}/>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./image/class_normal.png')}
                  selectedIcon={require('./image/class_hightlight.png')}
                  title='分类'>
                  <Navigator initialRoute={{name:'Class'}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}/>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./image/play_normal.png')}
                  selectedIcon={require('./image/play_hightlight.png')}
                  title='玩乐'>
                  <Navigator initialRoute={{name:'Play'}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}/>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./image/me_normal.png')}
                  selectedIcon={require('./image/me_hightlight.png')}
                  title='我'>
                  <Navigator initialRoute={{name:'Me'}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}/>
              </TabBar.Item>
          </TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#ffffff',
    },
    content: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    meun:{
      marginTop:120,
      justifyContent: 'center',
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
      marginLeft:80,
      fontSize:18,
    }
});

AppRegistry.registerComponent(
  'zhouyanyu', () => zhouyanyu);
