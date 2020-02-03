import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {size} from '../utils/utils';

export default class PlayBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={style.wrapper}>
            <View style={style.video_tri}></View>
        </View>
    }
}

let style = StyleSheet.create({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: size(80),
        height: size(80),
        borderRadius: 80,
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    video_tri: {
        marginLeft: size(30),
        borderTopWidth: size(20),
        borderLeftWidth: size(30),
        borderRightWidth: size(20),
        borderBottomWidth: size(20), 
        borderLeftColor: '#fff',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
    }
});