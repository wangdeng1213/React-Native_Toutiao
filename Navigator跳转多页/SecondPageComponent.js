import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';
import ThreePageComponent from './ThreePageComponent';

export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'ThreePageComponent',
                component: ThreePageComponent,
            })
        }
    }

    _pressButton2() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._pressButton2.bind(this)}>
                    <Text style={styles.word}>我想要蘑菇</Text>
                </TouchableOpacity>
                <Image source={require('./img/potato.png')} style={styles.pic}/>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.word}>我想要西红柿</Text>
                </TouchableOpacity>
            </View>
    );
    }
}


const styles = StyleSheet.create({
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
  },
  pic: {
    width:64,
    height:64,
  }
});
