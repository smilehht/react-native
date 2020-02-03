import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Video from "react-native-video";
import { withNavigation } from 'react-navigation'

class Detail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {navigation} = this.props;
        let params = navigation.state.params || {}
        console.log(params);
    }

    render() {
        return <View>
            <Text>视频详情页</Text>
            <Video
                source={require('../../../assest/video/HK.mp4')}
            />
        </View>
    }
}


export default withNavigation(Detail);