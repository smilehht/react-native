import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import common from './style/common.js';

import Home from './pages/home.js';
import Video from './pages/video.js';
import Me from './pages/me.js';

const TABS = [
    {
        title: '首页',
        key: 'home',
        component: <Home />,
        badgeText: '12',
        icon: 'http://img30.360buyimg.com/popshop/jfs/t19678/315/2580196661/31077/b15d01a1/5b02ce4bN8619032a.jpg',
        selectedIcon: 'http://img30.360buyimg.com/popshop/jfs/t23962/332/1017626542/24657/6999327a/5b4d9aa2N75b0e06e.jpg'
    },
    {
        title: '视频',
        key: 'video',
        badgeText: '21',
        component: <Video />,
        icon: 'http://img30.360buyimg.com/popshop/jfs/t19678/315/2580196661/31077/b15d01a1/5b02ce4bN8619032a.jpg',
        selectedIcon: 'http://img30.360buyimg.com/popshop/jfs/t23962/332/1017626542/24657/6999327a/5b4d9aa2N75b0e06e.jpg'
    },
    {
        title: '我的',
        key: 'me',
        badgeText: '21',
        component: <Me />,
        icon: 'http://img30.360buyimg.com/popshop/jfs/t19678/315/2580196661/31077/b15d01a1/5b02ce4bN8619032a.jpg',
        selectedIcon: 'http://img30.360buyimg.com/popshop/jfs/t23962/332/1017626542/24657/6999327a/5b4d9aa2N75b0e06e.jpg'
    }
]

export default class Index extends Component {
    // 声明state对象
    state = {
        currentTab: 0
    };

    changeTab(index) {
        this.setState({
            currentTab: index
        });
    }

    render() {
        let { currentTab } = this.state;
        return <View style={common.flex}>
            <TabNavigator>
                {
                    !!TABS.length && TABS.map((item, index) => {
                        return <TabNavigator.Item
                            key={'index' + index}
                            title={item.title}
                            selected={currentTab === index}
                            badgeText={item.badgeText}
                            onPress={this.changeTab.bind(this, index)}
                            renderIcon={() => <Image style={styles.tabIcon} source={{ uri: item.icon }} />}
                            renderSelectedIcon={() => <Image style={styles.tabIcon} source={{ uri: item.selectedIcon }} />}
                        >
                            <ScrollView>
                                {item.component}
                            </ScrollView>
                        </TabNavigator.Item>
                    })
                }
            </TabNavigator>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        height: 700
    },
    tabIcon: {
        width: 23,
        height: 23
    },
    bgColor: {
        backgroundColor: 'gray'
    }
})