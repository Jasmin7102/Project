/* eslint-disable no-alert */
import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import { data } from '../utils/data';
import CompTextInput from '../component/CompTextInput';

const Login = (props) => {
  let inputTextRefArray = useRef(null);

  const [text, setText] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    verifypassword: '',
  });

  const _onChangeText = useCallback(
    (value, type) => {
      setText({ ...text, [type]: value });
    },
    [text]
  );

  const sendUserInfo = async () => {
    if (
      text.name === '' ||
      text.email === '' ||
      text.contact === '' ||
      text.password === '' ||
      text.verifypassword === ''
    ) {
      alert('Empty Fields');
    } else {
      try {
        await AsyncStorage.setItem('text', JSON.stringify(text));
        props.navigation.navigate('Result');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOsrwLnNBFZmXf2oJQUkE-X9BZC14fgXJWg&usqp=CAU',
      }}
      style={style.backgroundImage}
    >
      <View style={style.container}>
        <View style={style.card}>
          <View style={style.topSpace} />

          <View style={style.topTextView}>
            <Text style={style.textStarted}>Let's Get Started!</Text>
            <Text style={style.textAccount}>
              Create an account to Q Allure to get all features
            </Text>
          </View>

          <View style={style.component}>
            {data.map((item, index) => {
              return (
                <CompTextInput
                  getTextRef={(ref) => {
                    inputTextRefArray[item.type] = ref;
                  }}
                  key={index}
                  changeText={_onChangeText}
                  text={text}
                  index={index}
                  {...item}
                />
              );
            })}
          </View>

          <View style={style.createView}>
            <TouchableOpacity style={style.button} onPress={sendUserInfo}>
              <Text style={style.createTxt}>CREATE</Text>
            </TouchableOpacity>
          </View>

          <View style={style.bottomView}>
            <Text style={style.accountTextBottom}>
              Already have an account?{' '}
            </Text>
            <Text style={style.loginTxt}>Login Here</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
  },
  card: {
    backgroundColor: 'rgb(250,250,250)',
    borderRadius: 20,
  },
  topSpace: {
    height: 80,
  },
  topTextView: {
    width: 350,
    height: 90,
  },
  textStarted: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  textAccount: {
    fontSize: 14,
    color: 'rgb(159,159,159)',
    textAlign: 'center',
  },
  component: {
    paddingVertical: 15,
  },
  createView: {
    height: 50,
    width: 150,
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(27,86,200)',
    widtth: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 30,
  },
  createTxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 30,
  },
  accountTextBottom: {
    color: 'rgb(81,87,93)',
    fontSize: 14,
    //paddingVertical: 20,
  },
  loginTxt: {
    fontWeight: 'bold',
    color: 'rgb(64,128,244)',
  },
});
