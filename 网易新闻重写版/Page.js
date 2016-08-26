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

 class Page extends Component {
   render()
     {
   var detail=[
   '北京时间23日下午1时许，第73届雨果奖正式揭晓，中国作家刘慈欣凭借科幻小说《三体》获最佳长篇故事奖。本届雨果奖的长篇小说单元，刘慈欣的《三体》受小狗门事件影响，历经两进两出终获提名。刘慈欣并未亲自前往美国参加本届世界科幻大会，作为译者的刘宇昆代表刘慈欣上台领奖。另据澎湃新闻报道，颇震撼人心的细节是，《三体》获奖的结果是由宇航员兼科幻作家Kjill在太空站宣布的。',
   '从1965年7月15日NASA向火星发射Mariner 4号探测器至今，NASA对火星的探索已整整过去50年。日前，NASA特此发布4分钟的短片纪念美国科研团队对这颗红色星球的50年征程，配以大气磅礴的背景乐，画面让观者泪目。',
   '酷似“阮经天”奇葩男给女友吃一周苦瓜亲爱的，我知道，其实你不容易。。不论男人女人，常常满身疲惫，却有卸不下的压力与责任。有时候，一肚子苦衷，也有不能说的时候亲爱的，我知道，其实你不容易。',
   '中新网8月23日电 据美媒报道，近日，一名10岁的小女孩在佛州海边游泳时突然遭到鲨鱼袭击，小女孩在上岸后发现自己的小伙伴还在海上，勇敢的她再次跳入水中，帮助小伙伴脱险。据报道，当时，10岁的女孩斯扎马克在佛罗里达州杰克逊维尔海滩游泳时遭到鲨鱼攻击。这是不到两个月来，这片海滩第二次发生鲨鱼伤人事件。'];

   var img=[
   require('./img/1631.png'),
   require('./img/1632.png'),
   require('./img/1633.png'),
   require('./img/1634.png'),];

   return(
   <View style={styles.container}>
   <Image source={img[this.props.index]}
   style={styles.pic}>
   </Image>
     <Text style={styles.word}>
        {detail[this.props.index]}
     </Text>
     <Text onPress={()=>{this.props.navigator.pop();}} style={styles.word}>
        返回
     </Text>
   </View>
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

module.exports = Page;
