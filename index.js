/**
 * @format
 */

import {Alert, AppRegistry} from 'react-native';
//import App from './App';
//import AlertComp from './components/Alert';
import clip from './components/clip';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => clip);
