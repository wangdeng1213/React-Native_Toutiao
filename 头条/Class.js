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
     ScrollView,
     TouchableOpacity,
     WebView
 } from 'react-native';

import Swiper from 'react-native-swiper';
import Home from './List';
import Home_2 from './List2';
import Home_3 from './List3';
import Home_4 from './List4';
import Home_5 from './List5';
import Home_6 from './List6';
import Home_7 from './List7';
import Home_8 from './List8';
import Home_9 from './List9';
var Header = require('./Header');

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
         <ListView
           navigator={this.props.navigator}
           dataSource={this.state.dataSource}
           renderRow={this.renderNewsView.bind(this)}
           style={styles.list}      />
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
              <Header><Text onPress={()=>{this.props.navigator.pop();}} style={styles.word}>
                返回
              </Text></Header>
              <WebView source={{uri:this.props.index}}/>
              <Text onPress={()=>{this.props.navigator.pop();}} style={styles.word}>
                返回
              </Text>
              <Text>
              {this.props.index}
              </Text>
            </View>
        );
    }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={{
      position: 'absolute',
      bottom: -25,
      right: 10
    }}>
      <Text>
        <Text style={{
          color: '#007aff',
          fontSize: 20
        }}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

class ClassPage extends React.Component {
  PressMe (title){
    this.props.navigator.push({name:'Home',index:title});
  }
  PressMe_2 (title){
    this.props.navigator.push({name:'Home_2',index:title});
  }
  PressMe_3 (title){
    this.props.navigator.push({name:'Home_3',index:title});
  }
  PressMe_4 (title){
    this.props.navigator.push({name:'Home_4',index:title});
  }
  PressMe_5 (title){
    this.props.navigator.push({name:'Home_5',index:title});
  }
  PressMe_6 (title){
    this.props.navigator.push({name:'Home_6',index:title});
  }
  PressMe_7 (title){
    this.props.navigator.push({name:'Home_7',index:title});
  }
  PressMe_8 (title){
    this.props.navigator.push({name:'Home_8',index:title});
  }
  PressMe_9 (title){
    this.props.navigator.push({name:'Home_9',index:title});
  }
  render() {
    return(
      <View style={styles.box_1}>
      <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay={true}>
        <View style={styles.slide1}>
          <Image source={{uri:'http://06.imgmini.eastday.com/mobile/20160906/20160906164426_71467a627a8733bb2060aa56a087df0b_1_mwpm_03200403.jpeg'}} style={styles.pic_2}>
            <Text style={styles.text}>    定义未来手机全球最薄精品手机MotoZ正式登陆中国   </Text>
          </Image>
        </View>
        <View style={styles.slide2}>
          <Image source={{uri:'http://05.imgmini.eastday.com/mobile/20160906/20160906163852_7454bc5cb8eddce51340b068695242a8_1_mwpm_03200403.jpeg'}} style={styles.pic_2}>
            <Text style={styles.text}>           马云凭一本《道德经》缔造起阿里巴巴帝国             </Text>
          </Image>
        </View>
        <View style={styles.slide3}>
          <Image source={{uri:'http://03.imgmini.eastday.com/mobile/20160906/20160906162728_5f926d40887c68d64cfb0b23ee89b64e_1_mwpm_03200403.jpeg'}} style={styles.pic_2}>
            <Text style={styles.text}>                   魅族Flyme，腰圆键拯救大屏手机                      </Text>
          </Image>
        </View>
      </Swiper>
      <View style={styles.box_2}>
        <View style={styles.box_3}>
          <Image source={require('./image/keji.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe.bind(this,'keji')}>科技</Text>
        </View>
        <View style={styles.box_3}>
          <Image source={require('./image/guonei.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe_2.bind(this,'guonei')}>国内</Text>
        </View>
        <View style={styles.box_3}>
          <Image source={require('./image/guoji.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe_3.bind(this,'guoji')}>国际</Text>
        </View>
      </View>
      <View style={styles.box_2}>
        <View style={styles.box_3}>
          <Image source={require('./image/shehui.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe_4.bind(this,'shehui')}>社会</Text>
        </View>
        <View style={styles.box_3}>
          <Image source={require('./image/tiyu.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe_5.bind(this,'tiyu')}>体育</Text>
        </View>
        <View style={styles.box_3}>
          <Image source={require('./image/caijing.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe_6.bind(this,'caijing')}>财经</Text>
        </View>
      </View>
      <View style={styles.box_2}>
        <View style={styles.box_3}>
          <Image source={require('./image/yule.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe_7.bind(this,'yule')}>娱乐</Text>
        </View>
        <View style={styles.box_3}>
          <Image source={require('./image/junshi.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe_8.bind(this,'junshi')}>军事</Text>
        </View>
        <View style={styles.box_3}>
          <Image source={require('./image/shishang.png')} style={styles.pic_3}/>
          <Text style={styles.word_2} onPress={this.PressMe_9.bind(this,'shishang')}>时尚</Text>
        </View>
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
        return(<DetailPage navigator={navigator}></DetailPage>);
      case 'class':
        return(<ClassPage navigator={navigator}></ClassPage>);
      case 'Home':
        return(<Home navigator={navigator} index={route.index}></Home>);
      case 'Home_2':
        return(<Home_2 navigator={navigator} index={route.index}></Home_2>);
      case 'Home_3':
        return(<Home_3 navigator={navigator} index={route.index}></Home_3>);
      case 'Home_4':
        return(<Home_4 navigator={navigator} index={route.index}></Home_4>);
      case 'Home_5':
        return(<Home_5 navigator={navigator} index={route.index}></Home_5>);
      case 'Home_6':
        return(<Home_6 navigator={navigator} index={route.index}></Home_6>);
      case 'Home_7':
        return(<Home_7 navigator={navigator} index={route.index}></Home_7>);
      case 'Home_8':
        return(<Home_8 navigator={navigator} index={route.index}></Home_8>);
      case 'Home_9':
        return(<Home_9 navigator={navigator} index={route.index}></Home_9>);

    }
  }

   render() {
       return (
         <Navigator
           initialRoute={{ name: 'class' }}
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
  box_1:{
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap',
  },
  box_2:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  box_3:{
    flex:1,
    borderWidth:0.5,
    borderColor:'#666666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_4:{
    flex:1,
  },
  list:{
    marginTop:25,
  },
  pic:{
    margin:1,
    width:120,
    height:80,
  },
  pic_2:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  pic_3:{
    height:50,
    width:50,
  },
  word:{
    margin:5,
    fontSize:15,
    textAlign:'center',
  },
  word_2:{
    margin:5,
    fontSize:20,
    textAlign:'center',
  },
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },

  image: {
    flex: 1,
  }
});
