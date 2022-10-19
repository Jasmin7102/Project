import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AssignmentOne from './components/assignmentOne';
import AssignmentTwo from './components/assignmentTwo';
import AssignmentThree from './components/assignmentThree';
import AssignmentFour from './components/AssignmentFour';
import PracticeAssignment from './components/practiceAssignment';
import TabNavigation from './tabNavigation';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ScreenHome" component={TabNavigation} options={{headerShown: false}}/>
          <Stack.Screen name="Assignment 1" component={AssignmentOne} options={{ headerTitleAlign: "center" }} />
          <Stack.Screen name="Assignment 2" component={AssignmentTwo} />
          <Stack.Screen name="Assignment 3" component={AssignmentThree} />
          <Stack.Screen name="Assignment 4" component={AssignmentFour} />
          <Stack.Screen name="Practice Assignment" component={PracticeAssignment} />
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
  }
})