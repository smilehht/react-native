import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Blink extends Component {
  // 声明state对象
  state = { isShowingText: true };

  onClick = () => {
    this.setState({
        isShowingText: !this.state.isShowingText
    });
  }

  render() {
      let {isShowingText} = this.state;
      return <View>
          <Text onPress={this.onClick}>状态切换</Text>
          {
              isShowingText ? <Text>isShowingText：true</Text> : <Text>isShowingText：false</Text>
          }
      </View>
  }
}