import React, { Component } from 'react';
import {SafeAreaView, Text, ActivityIndicator, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
 
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            animating: true
        };
    }
    
    animation = () => {
        if(this.state.animating = true){
        onLoad = () => {
            this.setState({animating: !this.state.animating})
        }
        }
        else {
            onLoad = () => {
                this.setState({animating: this.state.animating})
            }
            
        }
    }
    render(){
        return (
            <SafeAreaView>
            <Text style={style.mainText}>Hey Let's see how Webview works</Text>
            <ActivityIndicator animating={this.state.animating} size="large" color="#00ff00" hidesWhenStopped = {true} />
            <WebView 

            source={{ uri: 'https://reactnative.dev/' }}
            renderLoading={this.animation}
            // renderLoading={()=> <ActivityIndicator size="large" color="#00ff00" /> }
            />
            </SafeAreaView>
            
        );
    }
}
const style = StyleSheet.create ({
    mainText: {
        fontSize:14,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 20,
    }
});