import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Project/src/container/HomeScreen';
import Alert from  '../Project/src/components/Alert';
import Clip from './src/components/Clip';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Alert" component={Alert} options={{
            headerTitle: "Clipboard & Alert",
            headerTitleAlign: "center",
          }} />
          <Stack.Screen name="Clip" component={Clip} options={{
            headerTitle: "Clipboard & Alert",
            headerTitleAlign: "center",
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  welcomeTxt: {
    marginVertical: 30,
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: '500',
    color: 'white',
  },
  button: {
    width: "80%",
    height: "7%",
    margin: 10,
    backgroundColor: "rgb(172,178,191)",
    border: 0,
    borderRadius: 10,
    padding: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'arial',
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    height: 20,
    width: 20,
    margin: 5,
  }
})