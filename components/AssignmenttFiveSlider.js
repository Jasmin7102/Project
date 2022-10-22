import { SafeAreaView, View, Text, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider';

const sliderComp = () => {
    const [showSlider, setShowSlider] = useState(false);
    const [value, setValue] = useState(0);
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.mainTxt}>Let's see how Slider & switch work</Text>
            <View style={styles.switch}>
                <Switch
                    value={showSlider}
                    style={styles.switchBtn}
                    onValueChange={(switchValue) => setShowSlider(switchValue)} />
            </View>
            {showSlider && <View>
                <Text style={styles.textValue}>
                    {value}
                </Text>
                <Slider
                    style={styles.sliderBar}
                    maximumValue={100}
                    minimumValue={0}
                    step={1}
                    minimumTrackTintColor="gray"
                    maximumTrackTintColor="black"
                    value={value}
                    onValueChange={sliderValue => setValue(sliderValue)}
                /></View>}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainTxt: {
        textAlign: 'center',
        fontSize: 14,
        padding: 20,
        fontWeight: 'bold',
    },
    switch: {
        alignSelf: 'center',
    },
    switchBtn: {
        alignItems: 'center'
    },
    sliderBar: {
        width: 250,
        alignSelf: 'center',
    },
    textValue: {
        margin: 20,
        textAlign: 'center',
        fontSize: 80,
        fontWeight: '300',
    }
})

export default sliderComp;