import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const CompTextInput = ({ img, placeholder, index, changeText, type }) => {
  const [focus, setFocus] = useState(false);

  return (
    <View key={index} style={style.componentView(focus)}>
      <View style={style.imgView}>
        <Image style={style.logo} source={{ uri: img }} />
      </View>

      <TextInput
        style={style.textinput}
        placeholder={placeholder}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onChangeText={(value) => changeText(value, type)}
      />
    </View>
  );
};

export default CompTextInput;

const style = StyleSheet.create({
  componentView: (focus) => ({
    flexDirection: 'row',
    borderRadius: 30,
    width: 320,
    height: 60,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: 'rgb(255,255,255)',
    borderColor: focus ? 'blue' : 'transparent',
    borderWidth: 1,
  }),
  imgView: {
    width: 18,
    height: 18,
    marginHorizontal: 10,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  textinput: {
    fontSize: 16,
  },
});
