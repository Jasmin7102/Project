import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, Modal, Pressable, Image, Button, TouchableOpacity, Alert, stylesheet, ScrollView } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            input: {
                otpDigit1: '',
                otpDigit2: '',
                otpDigit3: '',
                otpDigit4: '',
            }
        }
    }

    render() {
        const { otpDigit1, otpDigit2, otpDigit3, otpDigit4 } = this.state;

        return (
            <View style={styles.Component}>
                <SafeAreaView style={styles.SafeAreaComponent}>
                    <View style={styles.header}>
                        <Text style={styles.loginText}>
                            Log into Saavn
                        </Text>
                    </View>
                </SafeAreaView>
                <View>
                    <Text style={styles.codeText}>Enter your code</Text>
                </View>
                <View style={styles.Digit}>

                    <TextInput
                        style={styles.inputDigit}
                        maxLength={1}
                        ref={"refnum1"}

                        onChangeText={(otpDigit1) => {
                            this.setState({ otpDigit1: otpDigit1 });
                            if (otpDigit1 != "") {
                                this.refs.refnum2.focus()
                            }

                        }}
                        
                        // placeholder="Set Password"
                        keyboardType='numeric'
                    />


                    <TextInput
                        style={styles.inputDigit}
                        maxLength={1}
                        ref={"refnum2"}
                        onChangeText={(otpDigit2) => {
                            this.setState({ otpDigit2: otpDigit2 });
                            if (otpDigit2 != "") {
                                this.refs.refnum3.focus()
                            }

                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if(nativeEvent.key === 'Backspace'){
                              this.refs.refnum1.focus();
                            }
                          }}
                        // placeholder="Set Password"
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={styles.inputDigit}
                        maxLength={1}
                        ref={"refnum3"}
                        onChangeText={(otpDigit3) => {
                            this.setState({ otpDigit3: otpDigit3 });
                            if (otpDigit3 != "") {
                                this.refs.refnum4.focus()
                            }


                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if(nativeEvent.key === 'Backspace'){
                              this.refs.refnum2.focus();
                            }
                          }}
                        // placeholder="Set Password"
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={styles.inputDigit}
                        maxLength={1}
                        ref={"refnum4"}
                        onChangeText={(otpDigit4) => {
                            this.setState({ otpDigit4: otpDigit4 });

                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if(nativeEvent.key === 'Backspace'){
                              this.refs.refnum3.focus();
                            }
                          }}
                        // placeholder="Set Password"
                        keyboardType='numeric'
                    />

                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => { alert("Verifying the code") }}
                        style={styles.continue}
                    >
                        <Text style={styles.continueTxt}>Continue</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.space} />
                <View style={styles.keyboard}>
                    <View style={styles.firstRow}>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress1}
                        >
                            <Text style={styles.number}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>2</Text>
                            <Text style={styles.alphabet}>A B C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>3</Text>
                            <Text style={styles.alphabet}>D E F</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.firstRow}>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>4</Text>
                            <Text style={styles.alphabet}>G H I</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>5</Text>
                            <Text style={styles.alphabet}>J K L</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>6</Text>
                            <Text style={styles.alphabet}>M N O</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.firstRow}>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>7</Text>
                            <Text style={styles.alphabet}>P Q R S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>8</Text>
                            <Text style={styles.alphabet}>T U V</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.digit1}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>9</Text>
                            <Text style={styles.alphabet}>W X Y Z</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.firstRow}>
                        <TouchableOpacity
                            style={styles.blank}
                            onPress={this.onPress}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.digit}
                            onPress={this.onPress}
                        >
                            <Text style={styles.number}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.img}
                            onPress={this.onPress}
                        >
                            <Image
                                style={styles.screenshotImg}
                                source={{ uri: "https://img.icons8.com/ios/344/clear-symbol--v1.png" }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    Component: {
        flex: 1,
    },
    SafeAreaComponent: {
        flex: 0,
        backgroundColor: 'rgb(110,186,121)',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    backgroundColor: {
        flex: 1,
        top: 0,
        backgroundColor: 'rgb(110,186,121)',
    },

    header: {
        padding: 10,

    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    codeText: {
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 30,
        marginTop: 75,
        marginBottom: 60,
        color: "rgb(85,85,85)",
    },
    Digit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginHorizontal: 80,
        marginBottom: 60,
    },
    inputDigit: {
        borderWidth: 2,
        borderRadius: 4,
        height: 40,
        width: 40,
        textAlign: 'center',
        borderColor: 'rgb(225,225,225)',
        marginBottom: 20,
    },
    continue: {
        borderWidth: 1,
        borderColor: 'rgb(166,199,186)',
        alignSelf: 'center',
        width: '65%'

    },
    space: {
        height: 195,
    },
    continueTxt: {
        color: 'rgb(166,199,186)',
        textAlign: 'center',
        padding: 14,
        fontSize: 16
    },
    keyboard: {
        backgroundColor: 'rgb(212,214,222)',
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
        marginHorizontal: 6,
        shadowColor: 'rgb(176,175,179)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1
    },
    digit1: {
        height: "100%",
        width: '32%',
        backgroundColor: 'white',
        border: 0,
        borderRadius: 5,
        padding: 5,
    },
    number: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '500'
    },
    alphabet: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    lastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
        shadowColor: 'rgb(176,175,179)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1
    },
    img: {
        height: "55%",
        width: '32%',
        padding: 15,
    },
    blank: {
        height: "55%",
        width: '32%',
        padding: 5,
    },
    digit: {
        height: "55%",
        width: '32%',
        backgroundColor: 'white',
        border: 0,
        borderRadius: 5,
        padding: 10,
    },

    screenshotImg: {
        width: 25,
        height: 20,
        margintop: 15,
        marginBottom: 40,
        alignSelf: 'center',
    }

})