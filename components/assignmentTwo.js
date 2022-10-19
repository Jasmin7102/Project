import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, Button, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';

export default class AssignmentTwo extends Component {
    onPress = () => {
        alert("Please select method of payment");
     }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={{ uri: "https://img.icons8.com/external-basicons-line-edtgraphics/344/external-Left-arrows-basicons-line-edtgraphics.png" }}
                    />
                    <Text style={styles.productDetails}>Product Details </Text>
                    <Image
                        style={styles.logo}
                        source={{ uri: "https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png" }}
                    />
                </View>
                <ScrollView>
                    <View style={styles.main}>
                        <Image
                            style={styles.poster}
                            source={{ uri: "https://i.pinimg.com/736x/7e/93/a5/7e93a573ab8f7f333f99a10a1e0a70c5.jpg" }}
                        />
                        <Text style={styles.title}> The Intern </Text>
                        <Text style={styles.part}> Part I </Text>
                        <View>
                            <View style={styles.genreView}>
                                <Text style={styles.genre}>Comedy</Text>
                                <Text style={styles.genre}>Drama</Text>
                                <Text style={styles.genre}>Family</Text>
                            </View>
                        </View>

                        <View style={styles.space}/>
                        <View style={styles.line}/>
                        <View style={styles.Description}>
                            <View >
                                <Text style={styles.info}>Year</Text>
                                <Text style={styles.infoValue}>2015</Text>
                            </View>
                            <View >
                                <Text style={styles.info}>Country</Text>
                                <Text style={styles.infoValue}>USA</Text>
                            </View>
                            <View >
                                <Text style={styles.info}>Length</Text>
                                <Text style={styles.infoValue}>121 min</Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.About}>About Movie</Text>
                            <Text style={styles.AboutValue}>Harried fashion entrepreneur Jules gets a surprise boost from Ben, a 70-year-old widower who answers an ad seeking a senior intern.</Text>
                        </View>
                        <View>
                            <Text style={styles.Screenshot}>Screenshots</Text>
                        </View>
                    </View>
                    <ScrollView horizontal={true}>
                        <Image
                            style={styles.screenshotImg}
                            source={{ uri: "https://nypost.com/wp-content/uploads/sites/2/2015/09/318781id1a_theintern_intl_27x40_1sheet_5c-indd.jpg?quality=75&strip=all" }}
                        />
                        <Image
                            style={styles.screenshotImg}
                            source={{ uri: "https://m.media-amazon.com/images/M/MV5BMzUzNzUwMjY3Ml5BMl5BanBnXkFtZTgwNDIxNjA4NjE@._V1_.jpg" }}
                        />
                        <Image
                            style={styles.screenshotImg}
                            source={{ uri: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c3add5201e8adb319bf77ac98bdd760c2aa25741065033528c696233ea022b82._SX1080_.jpg" }}
                        />
                    </ScrollView>
                </ScrollView>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.ticket}
                        onPress={this.onPress}
                    >
                        <Text style={styles.ticketText}>BUY TICKET</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "rgb(255,255,255)",
        marginHorizontal: 15,
        marginBottom: 10,
    },
    logo: {
        height: 20,
        width: 20,
    },
    productDetails: {
        padding: 5,
        color: "rgb(114,118,126)",
        fontSize: 12,
    },
    main: {
        backgroundColor: "rgb(248,249,252)",
    },
    poster: {
        border: 1,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal:70,
        height: 350,
        width: 250,
        resizeMode: 'stretch',

    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 10,
        marginHorizontal: 15,

    },
    part: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 15,
        color: "rgb(112,116,129)",
        marginHorizontal: 15,

    },
    genreView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 80,
        width: '60%',
        
    },
    genre: {
        padding: 10,
        fontSize: 12,
        color: "white",
        textAlign: 'center',
        backgroundColor: "rgb(58,106,244)",
        borderRadius: 17,
        overflow: 'hidden',

    },
    space: {
        height: 70,
    },
    line: {
        borderBottomColor: "rgb(242,243,248)",
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    Description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginHorizontal: 95,
        marginBottom: 25,
    },
    info: {
        color: "rgb(172,178,191)",
        fontSize: 10,
        textAlign: 'center',
        padding: 5,
    },
    infoValue: {
        color: "rgb(74,76,94)",
        fontSize: 12,
        textAlign: 'center',
    },
    About: {
        fontSize: 11,
        color: "rgb(103,106,112)",
        marginBottom: 20,
    },
    AboutValue: {
        color: "rgb(172,178,191)",
        fontSize: 11,
        marginBottom: 10,

    },
    Screenshot: {
        fontSize: 11,
        color: "rgb(103,106,112)",
        marginHorizontal: 15,
    },
    ticket: {
        marginTop: 20,
        backgroundColor: "rgb(59,107,246)",
        borderRadius: 5,
    },
    button: {
        backgroundColor: "rgb(248,249,252)",
        marginHorizontal: 15,
    },
    ticketText: {
        color: "white",
        textAlign: 'center',
        padding: 10,

    },
    screenshotImg: {
        width: 140,
        height: 100,
        borderWidth: 0.5,
        borderRadius: 5,
        marginVertical: 15,
        marginLeft: 15,
        marginRight: 0,
    }
}) 