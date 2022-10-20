import { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AssignmentOne from './components/assignmentOne';
import AssignmenTwo from './components/assignmentTwo';
import AssignmentThree from './components/assignmentThree';

import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();
export default class tabNavigation extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Assignment 1" component={AssignmentOne} options={{
                    headerTitle: "Counter Application",
                }}/>
                <Tab.Screen name="Assignment 2" component={AssignmenTwo} options={{
                    headerTitle: "Product Details",
                    headerRight: () => (
                        <Image style={styles.logo} source={{ uri: "https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png" }} />
                    ),
                }} />
                <Tab.Screen name="Assignment 3" component={AssignmentThree} options={{
                    headerTitle: "Log Into Saavn",
                    headerTintColor: "#ffff",
                    headerStyle: {
                        backgroundColor: 'rgb(110,186,121)'
                        },

                }} />
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
    },
    logo: {
        height: 15,
        width: 15,
        padding: 10,
        margin: 10,
    }
});
