import { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, AsyncStorage } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={style.container}>
                <TouchableOpacity
                    style={style.button}
                    onPress={async () => {
                        const isLoggedIn = await AsyncStorage.getItem('text');
                        if (!isLoggedIn)
                            this.props.navigation.navigate('Login')
                        else
                            this.props.navigation.navigate('Result')
                    }}
                >
                    <Text style={style.text}>Login Screen</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: "black",
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
}); 