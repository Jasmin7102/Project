import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated, Dimensions } from 'react-native'

const Item = (props) => {
    const textSize = useRef(new Animated.Value(0)).current;
    const spinValue = useRef(new Animated.Value(0)).current;
    const cordinateX = useRef(new Animated.Value(0)).current;
    const cordinateY = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;

    const rotateText = spinValue.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 1],
        outputRange: ['0deg', '720deg', '1220deg', '720deg', '0deg'],
    })

    useEffect(() => {
        Animated.loop(Animated.timing(textOpacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(textSize, {
            toValue: 50,
            duration: 3000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(spinValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(cordinateX, {
            toValue: props.position.x,
            duration: 3000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(cordinateY, {
            toValue: props.position.y,
            duration: 3000,
            useNativeDriver: false,
        }),).start();
    })

    return (
        <Animated.Text style={{
            color: 'red',
            fontSize: 30,
            top: props.top,
            left: props.left,
            right: props.right,
            opacity: textOpacity,
            bottom: props.bottom,
            position: 'absolute',
            transform: [{ translateX: cordinateX }, { translateY: cordinateY }, { rotate: rotateText },]
        }}>Animation</Animated.Text>
    )
}

export default nextAnimation = () => {
    const { width, height } = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <Item position={{ x: width, y: height }} left={0} top={0} />
            <Item position={{ x: -width, y: height }} right={0} top={0} />
            <Item position={{ x: -width, y: -height }} right={0} bottom={0} />
            <Item position={{ x: width, y: -height }} left={0} bottom={0} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})