import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import React, { useState } from 'react'; 

export default function clip(props) {

    const [copiedText, setCopiedText] = useState('');
    
    const copyToClipboard = () => {
        Clipboard.setString(copiedText);
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
        Alert.alert('Copied Text', copiedText);

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
                        <Text style={style.buttonText}>SHOW COPIED TEXT</Text> 
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
    },
    inputTxt: {
        marginVertical: 20,
        borderWidth: 1,
        padding: 20,    
    },
    buttonText: {
        textAlign: 'center',
        backgroundColor: "orange",
        padding: 15,
        border: 0,
        borderRadius: 5,
        marginBottom: 20, 
    },
});