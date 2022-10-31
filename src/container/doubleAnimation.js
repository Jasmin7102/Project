import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Dimensions, SafeAreaView } from 'react-native';

console.log('Dimensions', Dimensions.get('screen').height);

export default App = () => {

  const coordinateXFirst = useRef(
    new Animated.Value(0)
  ).current;

  const coordinateYFirst = useRef(
    new Animated.Value(0)
  ).current;

  const coordinateXSecond = useRef(
    new Animated.Value(0)
  ).current;

  const coordinateYSecond = useRef(
    new Animated.Value(0)
  ).current;

  const coordinateXThird = useRef(
    new Animated.Value(0)
  ).current;

  const coordinateYThird = useRef(
    new Animated.Value(Dimensions.get('window').height)
  ).current;

  const coordinateXFourth = useRef(
    new Animated.Value(Dimensions.get('window').width)
  ).current;

  const coordinateYFourth = useRef(
    new Animated.Value(Dimensions.get('window').height)
  ).current;

  const sizeValue =
    useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.loop(
      Animated.timing(sizeValue, {
        toValue: 80,
        duration: 8000,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(coordinateXFirst, {
        duration: 8000,
        toValue: Dimensions.get('window').width - 180,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(coordinateYFirst, {
        duration: 8000,
        toValue: Dimensions.get('window').height - 200,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(coordinateXSecond, {
        duration: 8000,
        toValue: - Dimensions.get('window').width + 200,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(coordinateYSecond, {
        duration: 8000,
        toValue: Dimensions.get('window').height - 300,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(coordinateXThird, {
        duration: 8000,
        toValue: Dimensions.get('window').width - 200,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(coordinateYThird, {
        duration: 8000,
        toValue: 0,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(coordinateXFourth, {
        duration: 8000,
        toValue: 0,
        useNativeDriver: false,
      }),
    ).start();

    Animated.loop(
      Animated.timing(coordinateYFourth, {
        duration: 8000,
        toValue: 0,
        useNativeDriver: false,
      }),
    ).start();

  }, []);

  const interpolateItem =
    sizeValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg','90deg'],
    })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={{ flexDirection: 'row' }}>
        <Animated.Text style={{
          color: 'orange',
          fontSize: sizeValue,
          transform: [{ translateX: coordinateXFirst }, { translateY: coordinateYFirst }, { rotate: interpolateItem }],
        }}>Text1</Animated.Text>
      </Animated.View>
      <Animated.View style={{ flexDirection: 'row' }}>
        <Animated.Text style={{
          color: 'orange',
          fontSize: sizeValue,
          right: 0,
          position: 'absolute',
          transform: [{ translateX: coordinateXSecond }, { translateY: coordinateYSecond }, { rotate: interpolateItem }],
        }}>Text2</Animated.Text>
      </Animated.View>
      <Animated.View style={{ flexDirection: 'row' }}>
        <Animated.Text style={{
          color: 'orange',
          fontSize: sizeValue,
          position: 'absolute',
          transform: [{ translateX: coordinateXThird }, { translateY: coordinateYThird }, { rotate: interpolateItem }],
        }}>Text3</Animated.Text>
      </Animated.View>
      <Animated.View style={{ flexDirection: 'row' }}>
        <Animated.Text style={{
          color: 'orange',
          fontSize: sizeValue,
          position: 'absolute',
          transform: [{ translateX: coordinateXFourth }, { translateY: coordinateYFourth }, { rotate: interpolateItem }],
        }}>Text4</Animated.Text>
      </Animated.View>
    </SafeAreaView>
  );
};