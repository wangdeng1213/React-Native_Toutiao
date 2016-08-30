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
          <Image style={styles.banner} source={require('./img/2.png')}/>
        </View>
        <View style={styles.containerOne}>
          <View style={styles.containerThree}>
            <View style={styles.boxOneLeft}>
              <Text style={styles.word}>酒店</Text>
            </View>
            <View style={styles.boxOneLeft}>
              <Image source={require('./img/mushroom.png')} style={styles.icon}/>
            </View>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.boxOne}><Text style={styles.word}>海外酒店</Text></View>
            <View style={styles.boxOne}><Text style={styles.word}>特价酒店</Text></View>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.boxOne}><Text style={styles.word}>团购</Text></View>
            <View style={styles.boxOne}><Text style={styles.word}>民宿 客栈</Text></View>
          </View>
        </View>
        <View style={styles.containerOne}>
          <View style={styles.containerThree}>
            <View style={styles.boxTwoLeft}>
              <Text style={styles.word}>机票</Text>
            </View>
            <View style={styles.boxTwoLeft}>
              <Image source={require('./img/tomato.png')} style={styles.icon}/>
            </View>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.boxTwo}><Text style={styles.word}>火车票</Text></View>
            <View style={styles.boxTwo}><Text style={styles.word}>汽车票</Text></View>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.boxTwo}><Text style={styles.word}>船票</Text></View>
            <View style={styles.boxTwo}><Text style={styles.word}>专车</Text></View>
          </View>
        </View>
        <View style={styles.containerOne}>
          <View style={styles.containerThree}>
            <View style={styles.boxThreeLeft}>
              <Text style={styles.word}>旅游</Text>
            </View>
            <View style={styles.boxThreeLeft}>
              <Image source={require('./img/pumpkin.png')} style={styles.icon}/>
            </View>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.boxThree}><Text style={styles.word}>攻略</Text></View>
            <View style={styles.boxThree}><Text style={styles.word}>周边游</Text></View>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.boxThree}><Text style={styles.word}>保险</Text></View>
            <View style={styles.boxThree}><Text style={styles.word}>签证</Text></View>
          </View>
        </View>
        <View style={styles.containerOne}>
          <View style={styles.containerTwo}>
            <View style={styles.boxFour}>
              <Text style={styles.word}>景点 玩乐</Text>
            </View>
            <View style={styles.boxFour}>
              <Text style={styles.word}>礼品卡</Text>
            </View>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.boxFour}><Text style={styles.word}>美食</Text></View>
            <View style={styles.boxFour}><Text style={styles.word}>全球购</Text></View>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.boxFour}><Text style={styles.word}>出境WIFI</Text></View>
            <View style={styles.boxFour}><Text style={styles.word}>更多</Text></View>
          </View>
        </View>
        <View style={styles.containerFive}>
          <View style={styles.boxFive}><Image source={require('./img/leek.png')} style={styles.icon2}/></View>
          <View style={styles.boxFive}><Image source={require('./img/chilli.png')} style={styles.icon2}/></View>
          <View style={styles.boxFive}><Image source={require('./img/potato.png')} style={styles.icon2}/></View>
          <View style={styles.boxFive}><Image source={require('./img/peas.png')} style={styles.icon2}/></View>
          <View style={styles.boxFive}><Image source={require('./img/radish.png')} style={styles.icon2}/></View>
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
  },
  containerOne:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    borderWidth:1,
    borderColor:'#ffffff',
    borderRadius:20,
  },
  containerTwo:{
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap',
  },
  containerThree:{
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap',
    borderWidth:1,
    borderColor:'#ffffff',
    justifyContent:'center'
  },
  containerFive:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  box:{
    flex:1,
    backgroundColor:'#CCFFFF',
  },
  boxOne:{
    flex:1,
    backgroundColor:'#FF6666',
    borderWidth:1,
    borderColor:'#ffffff',
  },
  boxOneLeft:{
    flex:1,
    backgroundColor:'#FF6666',
  },
  boxTwo:{
    flex:1,
    backgroundColor:'#0099CC',
    borderWidth:1,
    borderColor:'#ffffff',
  },
  boxTwoLeft:{
    flex:1,
    backgroundColor:'#0099CC',
  },
  boxThree:{
    flex:1,
    backgroundColor:'#FF9900',
    borderWidth:1,
    borderColor:'#ffffff',
  },
  boxThreeLeft:{
    flex:1,
    backgroundColor:'#FF9900',
  },
  boxFour:{
    flex:1,
    backgroundColor:'#009966',
    borderWidth:1,
    borderColor:'#ffffff',
  },
  boxFive:{
    flex:1,
    backgroundColor:'#CCCCCC',
    borderWidth:3,
    borderColor:'#ffffff',
    marginTop:10,
    marginBottom:25,
  },
  word:{
    fontSize: 15,
    textAlign: 'center',
    margin: 15,
    color:'#ffffff',
  },
  icon:{
    alignItems:'center',
    resizeMode:'contain',
    marginLeft:35,
    width:50,
    height:50,
  },
  icon2:{
    flex:1,
    alignItems:'center',
    resizeMode:'contain',
    marginLeft:15,
  },
  banner:{
    flex:1,
    alignItems:'center',
    resizeMode:'contain',
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
