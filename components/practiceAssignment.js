import React, { Component } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,TextInput,Button,Image,View,TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false
    }
  }

  handleEmail = (text) => {
    this.setState({email : text})
  }

  handlePassword = (text) => {
    this.setState({password : text})
  }

  logIn = (email, password) => {
    alert('Welcome')
    
  }

  render() {
    
    return (
      <SafeAreaView style={Styles.container}>
        <Image
          style={Styles.logo}
          source={{ uri: "https://img.icons8.com/fluency-systems-regular/344/shopping-bag--v1.png" }}
        />

        <Text style={Styles.signIn}>Sign Up with Myntra</Text>
        <Text style={Styles.options}>EASILY USING</Text>
        <View style={Styles.login}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.facebook.com");
            }}
            style= {Styles.button}
            >
            <Image
            style={Styles.logoButtonFacebook}
            source={{ uri: "https://img.icons8.com/color/344/facebook.png" }}
            />
            <Text style={Styles.Facebook}>FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://accounts.google.com/v3/signin/identifier?dsh=S-1475571407%3A1665481970911673&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWrSs8EniJyjyIWj8bSAS-ihEkJLldMix_mTYblnZ8P7m3umxaNQUXG5g8Lv2zMlahKhHiL5uQ");
            }}
            style= {Styles.button}
            >
            <Image
            style={Styles.logoButtonGoogle}
            source={{ uri: "https://img.icons8.com/fluency/344/google-logo.png" }}
            />
            <Text style={Styles.Google}>GOOGLE</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={Styles.email}>- OR USING EMAIL -</Text>
        </View>
          <TextInput
          style={Styles.inputEmail}
          onChangeText={this.handleEmail}
          placeholder="Your Email Address"
          keyboardType="email-address"
          />
          <TextInput
          style={Styles.inputPassword}
          onChangeText={this.handlePassword}
          placeholder="Set Password"
          keyboardType="default"
          />
          <View>
          {
          (this.state.checked)
          ?
          (<TouchableOpacity 
          style={Styles.checkbox}
          onPress={() => {
            this.setState({
              checked: !this.state.checked
            })
          }
          }
          >
            <Image
            style={Styles.right}
            source={{ uri: "https://img.icons8.com/emoji/344/check-mark-emoji.png" }}
            />
          </TouchableOpacity>) 
          :
          (<TouchableOpacity 
          style={Styles.checkbox}
          onPress = {() => {
            this.setState({
          checked: !this.state.checked
          })
          }}
          >
            <Image
            style={Styles.wrong}
            source={{ uri: "https://img.icons8.com/emoji/344/cross-mark-emoji.png" }}
            />
          </TouchableOpacity>)
          }
          </View>

          <Text style={Styles.label}>I have a referral registration code </Text>
      
      </SafeAreaView>

    )
  }

}
const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: "#fff",
    flex:1,
    //marginHorizontal:20,
    // marginVertical: 30
  },
  logo: {
    width: 75,
    height: 75,
    marginTop: 10,
  },
  signIn: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#808080",
    fontWeight: 'normal',
    paddingVertical: 10,
  },
  options: {
    paddingTop: 20,
    fontSize: 7,
    fontFamily: "Arial",
    color: "#808080",
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '130%',
    width: '48%',
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoButtonFacebook: {
    padding: 20,
  },
  logoButtonGoogle: {
    padding: 15,
    margin: 2,
  },
  email: {
    fontSize: 7,
    color: "#696969",
    padding: 15,
  },
  Facebook: {
    fontFamily: "Arial",
    fontSize: 11,
    color: "#696969",
    fontWeight: 'bold',
    
  },
  Google: {
    fontFamily: "Arial",
    fontSize: 11,
    fontWeight: 'bold',
    color: "#696969",
  },
  inputEmail: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    color: "#696969",
    fontSize: 10,
    padding: 10,
    textAlign: 'left',
    borderColor: "#DDDDDD",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  inputPassword: {
    height: 40,
    width: "80%",
    color: "#696969",
    fontSize: 10,
    padding: 10,
    textAlign: 'left',
    borderTopWidth:0,
    borderLeftWidth:1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#DDDDDD",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  label: {
    margin: 8,
    // padding: 20,
    fontSize: 10,
    color: "#696969"
  },
  checkbox: {
      backgroundColor: '#FFFFFF',
      height: 25,
      width: 25,
      margin: 7,
      borderColor: "#DDDDDD",
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center'
  },
  right: {
    height: 25,
    width: 25,
  },
  wrong: {
    height: 25,
    width: 25,
  }
  
})