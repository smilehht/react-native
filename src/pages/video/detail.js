import React, { Component } from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import Video from "react-native-video";
import PlayBtn from '../../components/playBtn';
import {size} from '../../utils/utils';
import common from '../../style/common.js';
import { withNavigation } from 'react-navigation'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: false
        }
        this.isEnd = false;
    }

    componentDidMount() {
        let {navigation} = this.props;
        let params = navigation.state.params || {}
        console.log(params);
    }

    clickVideo = () => {
        let {paused} = this.state;
        !this.isEnd && this.setState({
            paused: !paused
        });
    }

    onLoad = (obj) => {
        console.log('obj----------');
        console.log(obj);
    }

    onEnd = () => {
        console.log('end, end');
        this.isEnd = true;
    }

    onProgress = () => {

    }
    // 音频变得嘈杂时的回调 - 应暂停视频
    onAudioBecomingNoisy = () => {

    }

    // 音频变得嘈杂时的回调 - 应暂停视频
    onAudioFocusChanged = () => {

    }

    render() {
        let {
            rate,
            volume,
            muted,
            resizeMode,
            duration,
            currentTime,
            paused
        } = this.state;
        return <View style={[common.flex]}>
            <TouchableHighlight
                onPress={this.clickVideo}
            >
                <View style={{
                    position: 'relative'
                }}>
                    <Video
                        style={style.video}
                        rate={rate}//播放速率
                        paused={paused}//暂停
                        volume={volume}//调节音量
                        muted={muted}//控制音频是否静音
                        source={require('../../../assest/video/HK.mp4')}
                        onLoad={this.onLoad}
                        onProgress={this.onProgress}
                        onEnd={this.onEnd}
                        onAudioFocusChanged={this.onAudioFocusChanged}
                        onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                    />
                    {paused && <View style={style.paused_btn}><PlayBtn /></View>}
                </View>
            </TouchableHighlight>
            <View>
                <Text>1111111</Text>
                <Text>2222222</Text>
            </View>
        </View>
    }
}

let style = StyleSheet.create({
    video: {
        width: '100%',
        height: size(500),
        backgroundColor: '#000'
    },
    paused_btn: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: [{translate: [ -size(40), -size(40), 0]}]
    }
});


export default withNavigation(Detail);