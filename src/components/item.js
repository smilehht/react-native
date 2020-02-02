import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import common from '../style/common.js';

export default class Home extends Component {

    static defaultProps = {
        item: ''
    }

    render() {
        let {item} = this.props;
        return <View style={style.flex}>
            <View>
                <Image
                style={{width: 193, height: 110}}
                source={{uri: 'https:' + item.image_url}} />
            </View>
            <View>
                <Text>{item.title}</Text>
            </View>
        </View>;
    }
}

let style = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row'
    }
});