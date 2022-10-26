import { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTxt}>Welcome Home</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Assignment 1')}
        >
          <Text style={styles.text}>Assignment 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Assignment 2')}
        >
          <Text style={styles.text}>Assignment 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Assignment 3')}
        >
          <Text style={styles.text}>Assignment 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Assignment 4')}
        >
          <Text style={styles.text}>Assignment 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Practice Assignment')}
        >
          <Text style={styles.text}>Practice Assignment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Alert')}
        >
          <Text style={styles.text}>Clipboard & Alert</Text>
        </TouchableOpacity>
      </View>
    );}}

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