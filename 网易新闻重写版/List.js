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
  View
} from 'react-native';

class ListRow extends Component {
  render() {
    return(
      <View style={styles.list_item}>
        <Text onPress={this.props.press} style={styles.list_item_font}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

class List extends Component {
  show (title){
    this.props.navigator.push({name:'detail',index:title});
  }
  render() {
    var news = [];

    for (var i in this.props.news) {
      var text = (
        <ListRow
          press={this.show.bind(this,i)}
          title={this.props.news[i]}
          style={styles.list_item_font}>
        </ListRow>
      );
      news.push(text);
    }

    return(
      <View>
        {news}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  list_item:{
    flex:1,
    marginLeft:10,
    marginRight:10,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#dddddd',
    justifyContent:'center',
  },
  list_item_font:{
    fontSize:18,
  }
});
module.exports = List;
