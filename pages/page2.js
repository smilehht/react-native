import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Page1 extends Component {

  navigateTo = () => {
    alert('page2');
  }

  render() {
      return <View onPress={this.navigateTo}>
          welcome to page2
      </View>
  }
}