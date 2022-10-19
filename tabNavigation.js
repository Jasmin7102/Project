import { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AssignmentOne from './components/assignmentOne';
import AssignmenTwo from './components/assignmentTwo';
import AssignmentThree from './components/assignmentThree';
// import AssignmentFour from './components/AssignmentFour';
// import PracticeAssignment from './components/practiceAssignment';
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();
export default class tabNavigation extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Assignment 1" component={AssignmentOne} />
                <Tab.Screen name="Assignment 2" component={AssignmenTwo} />
                <Tab.Screen name="Assignment 3" component={AssignmentThree} />
            </Tab.Navigator>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeTxt: {
        fontSize: 20,
    }
});

