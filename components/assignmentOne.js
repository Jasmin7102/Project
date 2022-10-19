import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import CounterValue from './counterValue';

export default class AssignmentOne extends Component {
  
  constructor(props){
    super(props);
    this.state = { counter: 0 };
    console.log("calling the constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("inside getDerivedStateFromProps()");
    return null;
  }

  onIncrement = () => {
    if (this.state.counter >= 10){
      Alert.alert("Value of counter cannot be incremented");
    }
    else{
      this.setState({
        counter : this.state.counter + 1
      })
    }
  }
  onDecrement = () => {
    if (this.state.counter <= 0){
      Alert.alert("Value of counter cannot be less than 0");
    }
    else{
      this.setState({
        counter : this.state.counter - 1
      }
      )
    }
  }

  onReset = () => {
    this.setState({
      counter : this.state.counter = 0
    })
  }

  render(){
    const { navigation } = this.props;
    console.log("calling the render()");
    const { counter } = this.state;
    return(
      <SafeAreaView style={styles.container}>
        <View>
          {/* <Text style={styles.title}>
            Counter Application
          </Text> */}
          <CounterValue counter={this.state.counter}/>
          

          <TouchableOpacity 
          style={styles.Decrement} 
          onPress={this.onDecrement} 
          >
          <Text style= {styles.text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.Increment}
          onPress={this.onIncrement}
          >
          <Text style= {styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      <View>
         <TouchableOpacity
           style={styles.button}
           onPress={this.onReset}
         >
           <Text style={styles.reset}>Reset</Text>
         </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
  componentDidMount(){
    console.log("calling the DidMount()");
  }

  static getDerivedStateFromProps(props, state){
    console.log("calling getDerivedStateFromProps()");
    return null;
  }

  shouldComponentUpdate() {
    console.log("calling shouldComponentUpdate()")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("calling getSnapshotBeforeUpdate()");
    return null;
  }

  componentDidUpdate() {
    console.log("calling the DidUpdate()");
  }
  
  componentWillUnmount() {
    console.log("calling the WillUnmount()");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
  },
  
  title: {
    top: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },

  Decrement: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top:200,
    marginLeft: 40,
    width: 100,
    height: 40,
    padding: 10,
  },

  text: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'arial',
  },

  Increment: {
    alignItems: 'center',
    backgroundColor:'#DDDDDD',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 200,
    marginLeft: 250,
    width: 100,
    height: 40,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 220,
    marginLeft: 35,
    width: "80%",
    height: 40,  
  },

  reset: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'arial',
  }

})