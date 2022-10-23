import 'react-native-gesture-handler';
import {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import AssignmentOne from './components/assignmentOne';
import AssignmentTwo from './components/assignmentTwo';
import AssignmentThree from './components/assignmentThree';
import AssignmentFour from './components/AssignmentFour';
import PracticeAssignment from './components/practiceAssignment';

const Drawer = createDrawerNavigator();

export default class drawerNavigation extends Component {
  render (){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Assignment 1" component={AssignmentOne} />
          <Drawer.Screen name="Assignment 2" component={AssignmentTwo} />
          <Drawer.Screen name="Assignment 3" component={AssignmentThree} />
          <Drawer.Screen name="Assignment 4" component={AssignmentFour} />
          <Drawer.Screen name="Practice Assignment" component={PracticeAssignment} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}