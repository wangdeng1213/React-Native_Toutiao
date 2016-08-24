import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';
import ThreePageComponent from './ThreePageComponent';
export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        // 为什么这里可以取得 props.navigator?请看上文:
        // <Component {...route.params} navigator={navigator} />
        // 这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
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
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.word}>我想要土豆</Text>
                </TouchableOpacity>
                <Image source={require('./img/mushroom.png')} style={styles.pic}/>
                <TouchableOpacity onPress={this._pressButton2.bind(this)}>
                    <Text style={styles.word}>我想要西红柿</Text>
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
