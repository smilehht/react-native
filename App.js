/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native'
import Routes from './src/routes';

import common from './src/style/common.js';


const App: () => React$Node = () => {
    return <Routes></Routes>
        {/* <View style={styles.flex}>
            <Index></Index>
        </View> */}
        // <SafeAreaView style={styles.flex}></SafeAreaView>;
};

export default App;
