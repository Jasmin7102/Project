import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Alert, TouchableOpacity, StyleSheet, ImageBackground, AsyncStorage } from 'react-native';

export default ShowResult = (props) => {
    const [userData, setUserData] = useState({});
    

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        try {
            const value = await AsyncStorage.getItem('text');

            if (value !== null) {
                setUserData(JSON.parse(value));
            }
        } catch (e) {
            console.error(e);
        }
    }

    const clearUserInfo = async () => {
        try {
            await AsyncStorage.clear();
            props.navigation.replace('Login')
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        Alert.alert('Alert', 'Are you sure you want to logout?', [
            {
                text: 'NO',
                onPress: () => '',
            },
            {
                text: 'YES',
                onPress: () => { clearUserInfo() },
            },
        ]);
    };
    return (
        <SafeAreaView style={style.container}>
            <View style={style.textView}>
                <Text style={style.text}>Name:  <Text style={style.resultTxt}>{userData.name}</Text></Text>
                <Text style={style.text}>Email:  <Text style={style.resultTxt}>{userData.email}</Text></Text>
                <Text style={style.text}>Contact No:  <Text style={style.resultTxt}>{userData.contact}</Text></Text>
            </View>
            <View style={style.buttonView}>
                <TouchableOpacity onPress={logout} style={style.button}>
                    <Text style={style.buttonTxt}>Log Out</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    textView: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '100%',
        height: '20%',
        padding: 15,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        padding: 5,
    },
    resultTxt: {
        color: 'rgb(27,86,200)',
        fontSize: 20
    },
    buttonView: {
        height: 40,
        width: 100,
        alignSelf: 'center',
    },
    button: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(27,86,200)',
        padding: 10,
        borderRadius: 20,
    },
    buttonTxt: {
        fontSize: 15,
        color: '#FFFF',
        textAlign: 'center',
    }
});