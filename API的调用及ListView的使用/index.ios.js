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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

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
  componentDidMount(){//{ this.fetchData(); }生命周期函数，自动调用。
      fetch(REQUEST_URL)
      .then(
        (response) => response.json()//把网络上的数据进行json数据解析ß
        )
      .then(
        (responseData)=>
        this.setState(
        {
          dataSource:
          this.state.dataSource.cloneWithRows(responseData.movies),
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
    renderMovieView(movie){
      return (
        <View style={styles.container}>
         <View style={styles.container2}>
             <Image style={styles.pic} source={{uri:movie.posters.thumbnail}}/>
         </View>
         <View style={styles.container3}>
         <Text style={styles.word}>{movie.title}</Text>
           <Text style={styles.word}>{movie.year}</Text>
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
    marginTop:5,
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
    margin:10,
    fontSize:20,
    textAlign:'center',
  }
});

AppRegistry.registerComponent('zhouyanyu', () => zhouyanyu);
