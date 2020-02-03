import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import PlayBtn from './playBtn.js';
import common from '../style/common.js';
import {size} from '../utils/utils'
import { TouchableHighlight } from 'react-native-gesture-handler';


class Item extends Component {

	constructor(props) {
        super(props);
    }

    static defaultProps = {
        item: '',
        is_video: false
    }

    componentDidMount() {
    }

    toDetails = () => {
        let {navigation, item} = this.props;
        navigation.navigate('VideoDetail', {
            item: item
        });
    }

    render() {
        let {item, is_video} = this.props;
        let image_url = (item.image_url.indexOf('http') > -1 ? '' : 'https:') + item.image_url
        return <TouchableOpacity
            onPress={this.toDetails}
        >
            <View style={[style.flex, style.container]}>
                <View style={style.img}>
                    <Image
                        style={{width: size(250), height: size(250)}}
                        source={{uri: image_url}} />
                    {is_video && <View style={style.video_btn}><PlayBtn /></View>}
                </View>
                <View style={[common.flex, style.info]}>
                    <View>
                        <Text
                            style={style.title}
                            numberOfLines={2}
                        >
                            {item.title}
                        </Text>
                    </View>
                    {item.media_avatar_url && <View style={style.source}>
                        <Image
                            style={{
                                width: size(50),
                                height: size(50),
                                borderWidth: size(1),
                                borderColor: 'gray',
                                borderRadius: 50
                            }}
                            source={{uri: item.media_avatar_url}}
                        ></Image>
                        <Text style={{
                            marginLeft: 10
                        }}>{item.source}</Text>
                    </View>}
                </View>
            </View>
        </TouchableOpacity>;
    }
}

let style = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row'
    },
    container: {
        overflow: 'hidden',
        marginTop: size(10),
        marginBottom: size(10),
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
        transform: [{translate: [ -size(40), -size(40), 0]}]
    },
    info: {
        display: 'flex',
        paddingTop: size(10),
        paddingBottom: size(10),
        justifyContent: 'space-between',
        paddingLeft: size(20),
        paddingRight: size(20)
    },
    title: {
        fontSize: size(36),
        lineHeight: size(50),
        textAlign: 'justify'
    },
    source: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default withNavigation(Item)