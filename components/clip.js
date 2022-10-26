import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
    BackHandler
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';


import React, { useEffect, useState } from 'react';


export default function ClipboardUI(props) {

    const [copiedText, setCopiedText] = useState('');
    const [showCopiedText, setShowCopiedText] = useState(false);

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => props.navigation.goBack() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const copyToClipboard = () => {
        Clipboard.setString(copiedText);
        // Alert.alert('Copied to clipboard');
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
        await Alert.alert('Copied Text', copiedText);

    }



    return (
        <SafeAreaView style={style.container}>
            <View style={style.container}>
                <TextInput
                    onChangeText={text => setCopiedText(text)}
                    value={copiedText}
                    style={style.inputTxt}
                    placeholder="Enter Text To Be Copied"></TextInput>
                <TouchableOpacity onPress={copyToClipboard} style={style.button}>
                    <Text style={style.buttonText}>COPY</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={style.button} onPress={fetchCopiedText}>
                        <Text style={style.buttonText}>SHOW COPIED TEXT</Text> dsfdss
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15,
        alignItems: 'center',
        
    },
    inputTxt: {
        marginVertical: 20,
        borderWidth: 1,
        padding: 20,
        width: "80%"
        
    },
    copyButton: {
        width: '80%',
    },
    buttonText: {
        backgroundColor: "orange",
        padding: 15,
        border: 0,
        borderRadius: 5,
        marginBottom: 20,
        
    },
});