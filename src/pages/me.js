import React, { Component } from 'react';
import { Text, View } from 'react-native';
import common from '../style/common.js';

export default class Me extends Component {

    render() {
        return <View style={common.flex}>
            <Text>我的</Text>
        </View>
    }
}