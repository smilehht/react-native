import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Page1 extends Component {

  navigateTo = () => {
        const {navigation} = this.props;
        alert('page1');
        // navigation.goBack();
        navigation.navigate('page2');
  }

  render() {
      return <View onPress={this.navigateTo}>
          welcome to page1
      </View>
  }
}