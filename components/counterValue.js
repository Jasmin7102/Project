import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';

class CounterValue extends Component {
    constructor(props){
        super(props);
        console.log("calling the child constructor");
        this.state= {}
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("inside getDerivedStateFromProps()");
        return null;
    }

    render(){
        console.log("calling the child render()");
        return (
            <Text style={styles.count}>
            {this.props.counter}
          </Text> 
        )
    }
    componentDidMount(){
        console.log("calling the child DidMount()");
    }

    static getDerivedStateFromProps(props, state){
        console.log("calling child getDerivedStateFromProps()");
        return null;
    }

    shouldComponentUpdate() {
        console.log("calling child shouldComponentUpdate()")
        return true;
    }
      
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("calling child getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate() {
        console.log("calling the child DidUpdate()");
    }

    componentWillUnmount() {
        console.log("calling the child WillUnmount()");
    }
}

export default CounterValue;

const styles = StyleSheet.create({
    count: {
        top: 250,
        padding: 0,
        fontSize: 90,
        textAlign: 'center',
        fontFamily: 'arial',
      }
})