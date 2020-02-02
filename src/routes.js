import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer, createStackNavigator
} from 'react-navigation'

import Home from './pages/home.js';
import Video from './pages/video';
import Me from './pages/me.js';
import Login from './pages/login.js';

const styles = StyleSheet.create({
    tabIcon: {
        width: 23,
        height: 23
    }
})

let routes = {
    Home: {
        screen: Home,
        path: 'home',
        navigationOptions: {
            title: '首页',
            tabBarIcon: () => {
                return <Image
                    source={{uri: 'http://img30.360buyimg.com/popshop/jfs/t23962/332/1017626542/24657/6999327a/5b4d9aa2N75b0e06e.jpg'}}
                    style={styles.tabIcon}
                />
            }

        }
    },
    Video: {
        screen: Video,
        path: 'video',
        navigationOptions: {
            title: '视频',
            tabBarIcon: <Image
                source={{uri: 'http://img30.360buyimg.com/popshop/jfs/t23962/332/1017626542/24657/6999327a/5b4d9aa2N75b0e06e.jpg'}}
                style={styles.tabIcon}
            />

        }
    },
    Me: {
        screen: Me,
        path: 'me',
        navigationOptions: {
            title: '我的',
            tabBarIcon: <Image
                source={{uri: 'http://img30.360buyimg.com/popshop/jfs/t23962/332/1017626542/24657/6999327a/5b4d9aa2N75b0e06e.jpg'}}
                style={styles.tabIcon}
            />

        }
    }
}

const TabNavigator = createBottomTabNavigator(routes);

const AppRouter = createStackNavigator({
    TabNavigator: {
        screen: TabNavigator
    },
    Login: {
        screen: Login
    }
}, {
    initialRouteName: 'TabNavigator'
});

export default createAppContainer(AppRouter);