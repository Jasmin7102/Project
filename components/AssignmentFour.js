import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default class AssignmentFour extends Component {
    constructor(props){
        super(props);
        this.state = { hexcode: '' ,
        hexvalue : ''
    };
    }

    onPress = () => {
        this.setState({ hexvalue: this.state.hexcode})
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            
            <View style={color(this.state.hexvalue).colorBoxxx}></View>
            <View>
            <TextInput
            style={styles.inputColor}
            onChangeText={(value) => this.setState({hexcode: value})}
            value={this.state.hexcode}
            placeholder="Enter a hexcode"
            keyboardType="numbers-and-punctuation"
            />
            </View>
            <View>
                <TouchableOpacity
                style={styles.submit}
                onPress={this.onPress}
                >
                    <Text style={styles.submitTxt}>Submit</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        );
    }
}

const color = bgcolor => 
    StyleSheet.create({
        colorBoxxx: {
            borderWidth: 1,
            height: "15%",
            width: "40%",
            margin: 20,
            backgroundColor: bgcolor,
        },
      });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    textInput: {
        marginVertical: 20,
    },
    inputColor: {
        fontSize: 18,
        margin: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#dddddd',
        padding: 10,
    },
    submit: {
        height: "28%",
        width: "80%",
        backgroundColor: 'rgb(112,116,129)',
        padding: 5,
        border: 0,
        borderRadius: 10,
    },
    submitTxt: {
        color: 'white',
        padding: 10,
        fontSize: 16,
        textAlign: 'center',
    }
})