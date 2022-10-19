import { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
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
          <Stack.Screen name="Assignment 2" component={AssignmentTwo} options={{
                    headerRight: () => (
                        <Image style={styles.logo} source={{ uri: "https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png" }} />
                    ),
                }} />
          <Stack.Screen name="Assignment 3" component={AssignmentThree} options={{
            headerTitle: "Log Into Saavn",
            headerTintColor: "#ffff",
            headerBackground: 'rgb(110,186,121)',

          }}/>
          <Stack.Screen name="Assignment 4" component={AssignmentFour} options={{
            headerTitle: "Color Code Viewer"
            }}/>
          <Stack.Screen name="Practice Assignment" component={PracticeAssignment} options={{
            headerTitle: "Myntra"
            }}/>
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