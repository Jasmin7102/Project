// For working with alert during BackPress
import React, { Component } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";

class AlertComp extends Component {
  backPress = () => {
    Alert.alert("Alert", "Please confirm you want to go back!", [
      {
        text: "CANCEL",
        onPress: () => null,
        style: "cancel"
      },
      { text: "CONFIRM", onPress: () => this.props.navigation.goBack() }
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backPress
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Click back button to verify back handler is throwing an alert!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center'
  }
});

export default AlertComp;

//For working with Alert on IOS device:

// import React, { Component } from "react";
// import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";


// export default class AlertComp extends Component {
//   createButtonAlert = () => {
//     Alert.alert(
//       "Alert",
//       "Press confirm to back",
  
//       [
//         {
//           text: "CANCEL",
//           onPress: () => null,
//           // style: "button"
//         },
//         {
//           text: "CONFIRM",
//           onPress: () => this.props.navigation.goBack(),
//           // style: "button"
//         }
//       ]
//     );
//   }


//   render() {
//     return (
//       <View style={style.container}>
//       <Text style={style.alertTxt}>Alert launches an alert dialog with the specified title and message.</Text>

//       <TouchableOpacity  style={style.pressButton} onPress={this.createButtonAlert}>
//         <Text> PRESS ME</Text>
//       </TouchableOpacity>
       
//       </View>
//     );
//   }
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: "space-around",
//     alignItems: "center",
  
//   },
//   alertTxt: {
//     textAlign: 'center',
//     fontSize: 17,
//     margin: 25,
//   },
//   pressButton: {
//     backgroundColor: "#dddd",
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     // position: 'absolute',
//     // top: "55%",
//   },
// });