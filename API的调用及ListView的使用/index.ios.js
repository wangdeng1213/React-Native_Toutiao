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
     ListView,
     StyleSheet,
     TouchableOpacity
 } from 'react-native';

var REQUEST_URL = 'http://v.juhe.cn/toutiao/index?type=top&key=613dac951345cf82dd522c280f9c5b1b';

class zhouyanyu extends React.Component {
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
    renderMovieView(news){
      return (
        <View style={styles.container}>
         <View style={styles.container2}>
             <Image style={styles.pic} source={{uri:news.thumbnail_pic_s}}/>
         </View>
         <View style={styles.container3}>
         <Text style={styles.word}>{news.title}</Text>
           <Text style={styles.word}>{news.date}</Text>
         </View>
        </View>
      );
    }
   render() {
    if (this.state.loaded) {
      return(
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovieView}
          style={styles.listView}      />
      );
    }
    return this.renderLoadingView();
  }
 }

const styles = StyleSheet.create({
  container: {
    marginTop:20,
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
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap',
  },
  pic:{
    width:180,
    height:100,
  },
  word:{
    margin:5,
    fontSize:15,
    textAlign:'center',
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
