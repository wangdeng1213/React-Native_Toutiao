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

var REQUEST_URL = 'http://v.juhe.cn/weixin/query?key=a7d5fc675bc944807a5677b16bbe00fe';
var Header = require('./HeaderPlay');

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
          this.state.dataSource.cloneWithRows(responseData.result.list),
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
           <Image style={styles.pic} source={{uri:news.firstImg}}>
              <Text style={styles.word2}>{news.title}</Text>
           </Image>
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
          <View style={styles.container31}>
          <View style={styles.flex}>
          <Text
          onPress={()=>{this.props.navigator.pop();}}
          style={styles.welcomeBack}>返回</Text></View>
          <View style={styles.flex2}>
            <Text style={styles.font}>
              <Text style={styles.font_1}>今日</Text>
              <Text style={styles.font_2}>头条</Text>
              <Text>无态度°</Text>
            </Text>
          </View>
          </View>
          <View style={styles.boxwhite}>
          <WebView source={{uri:this.props.index}}/>
          </View>
          </View>
        );
    }
}

export default class zhouyanyu extends React.Component {
  configFunc(){
    return Navigator.SceneConfigs.HorizontalSwipeJump;
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
  container4:{
    marginTop:5,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  pic:{
    width:370,
    height:180,
    opacity:1.5,
  },
  word:{
    margin:5,
    fontSize:15,
    textAlign:'center',
    backgroundColor:'black',
  },
  word2:{
    margin:5,
    marginTop:80,
    color:'#ffffff',
    fontSize:15,
    textAlign:'center',
  },
  container31: {
    flex: 0.1,
      backgroundColor:'white',
      borderBottomWidth:4,
      borderColor:'red',
      flexDirection:'row',
      flexWrap:'wrap',
  },
  boxwhite:{
    flex: 1,
    backgroundColor:'white',
    borderColor:'#cccccc',
  },
  welcomeBack: {
    fontSize: 16,
    marginTop: 20,
    marginLeft:20,
    color:'red',
  },
  flex2:{
    flex: 4,
    marginTop:15,
    marginRight:45,
    height:50,
    borderBottomWidth:3,
    borderBottomColor:'red',
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
