/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React,{Component} from 'react';
 import {
     View,
     Navigator,
     NavigatorIOS,
     AppRegistry,
     Image,
     Text,
     ListView,
     StyleSheet,
     TouchableOpacity,
     WebView
 } from 'react-native';

var REQUEST_URL = 'http://v.juhe.cn/toutiao/index?type=keji&key=613dac951345cf82dd522c280f9c5b1b';
var Header = require('./Header');
var Page = require('./Page');

class HomePage extends Component{
  PressMe (title){
    this.props.navigator.push({name:'detail',index:title});
  }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged:(oldRow,newRow)=>
        oldRow !== newRow
      }),
      loaded: false,
    };
  }
  componentDidMount(){  //{ this.fetchData(); }生命周期函数，自动调用。
      fetch(REQUEST_URL)
      .then(
        (response) => response.json()//把网络上的数据进行json数据解析ß
        )
      .then(
        (responseData)=>
        this.setState(
        {
          dataSource:
          this.state.dataSource.cloneWithRows(responseData.result.data),
          loaded:true,
        }
        )
      )
      .done();
    }
  renderLoadingView(){
    return(
      <View><Text style={styles.word}>请等待数据。。。</Text></View>
    );
  }
  renderNewsView(news){
    return (
      <TouchableOpacity  onPress={this.PressMe.bind(this,news.url)}>
        <View style={styles.container}>
           <View style={styles.container2}>
               <Image style={styles.pic} source={{uri:news.thumbnail_pic_s}}/>
           </View>
           <View style={styles.container3}>
               <Text style={styles.word}>{news.title}</Text>
               <Text style={styles.word}>{news.date}</Text>
           </View>
        </View>
      </TouchableOpacity>
    );
  }
  render(){
    if (this.state.loaded) {
      return(
        <View style={styles.flex}>
         <Header></Header>
         <ListView
           navigator={this.props.navigator}
           dataSource={this.state.dataSource}
           renderRow={this.renderNewsView.bind(this)}
           style={styles.listView}      />
        </View>
      );
    }
    return this.renderLoadingView();
  }
}

class DetailPage extends React.Component {
    render(index) {
        return (
            <View style={styles.flex}>
              <Header></Header>
              <WebView url={this.props.index}/>
              <Text style={styles.word}>{this.props.index}</Text>
              <Text onPress={()=>{this.props.navigator.pop();}} style={styles.word}>
                返回
              </Text>
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
    marginTop:2,
    marginLeft:2,
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  container2: {
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap',
  },
  container3: {
    flex:2,
    flexDirection:'column',
    flexWrap:'wrap',
  },
  pic:{
    margin:1,
    width:120,
    height:80,
  },
  word:{
    margin:5,
    fontSize:15,
    textAlign:'center',
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
