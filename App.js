/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import Index from './view/index';


const App: () => React$Node = () => {
    return <SafeAreaView>
        {/* <StatusBar barStyle="dark-content" ></StatusBar> */}
        <Text>hello world</Text>
        <Index></Index>
    </SafeAreaView>;
};


export default App;
