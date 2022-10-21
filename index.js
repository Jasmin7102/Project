/**
 * @format
 */

import {AppRegistry, SectionList} from 'react-native';
//import App from './App';
//import counterApp from './counterApp';
//import Screen from './Screen';
//import OtpScreen from './OtpScreen';
//import colorView from './colorView'
//import navigationIndex from './navigationIndex';
//import RNComponents_Three from './components/RNComponents_Three';
//import tabNavigation from './tabNavigation';
//import drawerNavigation from './drawerNavigation';

import SectionListFile from './components/SectionListFile';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SectionListFile);
