import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Text, SafeAreaView ,View} from 'react-native';
import { WebView } from 'react-native-webview';


export default class MyWebComponent extends Component {
    constructor(props){
        super(props)
        {
            this.state={
                loading: true
            }
        }
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
            <Text>Let's see how webview works</Text>
                {this.state.loading &&
                <View style={{flex:1,justifyContent:'center'}}>
                <ActivityIndicator size="large" color="#00ff00" hidesWhenStopped={true} />
                </View>
                  }
                
                <WebView source={{ uri: 'https://reactnative.dev' }} 
                    // onLoadProgress

                onLoadStart={() => this.setState({loading: false})}
                />
            </SafeAreaView>

        );
    }
}