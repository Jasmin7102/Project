import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Text, SafeAreaView ,View} from 'react-native';
import { WebView } from 'react-native-webview';


export default class AssignmentFiveWebview extends Component {
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
            <SafeAreaView style={style.container}>
            <Text style={style.mainTxt}>Let's see how webview works</Text>
                {this.state.loading &&
                <View style={style.webView}>
                <ActivityIndicator size="large" color="#00ff00" hidesWhenStopped={true} />
                </View>
                  }
                
                <WebView source={{ uri: 'https://www.linkedin.com' }} 
                onLoadStart={() => this.setState({loading: false})}
                />
            </SafeAreaView>

        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainTxt: {
        textAlign: 'center',
        fontSize: 14,
        padding: 20,
        fontWeight: 'bold',
    },
    webView: {
        flex:1,
        justifyContent:'center',
    }
});