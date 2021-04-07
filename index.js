/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
// console.disableYellowBox = true;
// console.disableYellowBox.valueOf.name='VirtualizedLists should never be nested';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
// LogBox.ignoreAllLogs();



AppRegistry.registerComponent(appName, () => App);
