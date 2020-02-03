import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import common from '../style/common.js';
import {size} from '../utils/utils'


export default class Home extends Component {

    static defaultProps = {
        item: '',
        is_video: false
    }

    render() {
        let {item, is_video} = this.props;
        let image_url = (item.image_url.indexOf('http') > -1 ? '' : 'https:') + item.image_url
        return <View style={[style.flex, style.container]}>
            <View style={style.img}>
                <Image
                    style={{width: size(250), height: size(250)}}
                    source={{uri: image_url}} />
                {is_video && <View style={style.video_btn}>
                    <View style={style.video_tri}></View>
                </View>}
            </View>
            <View style={[common.flex, style.info]}>
                <Text
                    style={style.title}
                    numberOfLines={2}
                >
                    {item.title}
                </Text>
            </View>
        </View>;
    }
}

let style = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row'
    },
    container: {
        overflow: 'hidden',
        marginTop: size(20),
        backgroundColor: '#fff',
        borderRadius: size(8)
    },
    img: {
        position: 'relative'
    },
    video_btn: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: size(80),
        height: size(80),
        transform: [{translate: [ -size(40), -size(40), 0]}],
        borderRadius: 80,
        backgroundColor: 'rgba(0,0,0,.7)',
    },
    video_tri: {
        marginLeft:size(30),
        marginTop:size(20),
        borderTopWidth: size(20),
        borderLeftWidth: size(30),
        borderRightWidth: size(20),
        borderBottomWidth: size(20), 
        borderLeftColor: '#fff',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
        // borderColor: ['transparent', 'transparent', '#fff', 'transparent']
    },
    info: {
        paddingLeft: size(20),
        paddingRight: size(20)
    },
    title: {
        paddingTop: size(10),
        fontSize: size(36),
        lineHeight: size(50),
        textAlign: 'justify'
    }
});