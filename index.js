/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import {createAppContainer} from 'react-navigation'
// import Navigator from './navigators/index'
import {name as appName} from './app.json';

// const container = createAppContainer(Navigator);

AppRegistry.registerComponent(appName, () => App);
