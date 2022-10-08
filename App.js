// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

// import React, {Component} from 'react';
// import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       counter: 0
//     };
//   }

//   onPress = () => {
//     this.setState({
//       counter: this.state.counter +1
//     });
//   };
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//     <View>
//       <Text style={styles.title}>
//       Counter Application
//       Counter: 
//       </Text>
//       <View style={styles.fixToText}>
//         <Button
//           title="-"
//           onPress={() => Alert.alert('Counter incremented')}
//         />
//         <Button
//           title="+"
//           onPress={() => Alert.alert('Counter decremented')}
//         />
//       </View>
//     </View>
//   </SafeAreaView>    
//     )
//   }
  
// }

// export default App;

// const styles = StyleSheet.create({

//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

// });

// import React, { Component } from "react";
// import { StyleSheet, Alert, Button, Text, TouchableOpacity, View } from "react-native";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   onPress1 = () => {
//     if (this.state.count>=10){
//       Alert.alert('Value of counter cant be incremented')
//     }
//     else{
//       this.setState({
//       count: this.state.count + 1
//     });
//   }
//   };
  
//   onPress2 = () => {
//     if (this.state.count<=0){
//       Alert.alert('Negative values are not allowed')
//     }
//     else{
//     this.setState({

//       count: this.state.count - 1
//     });
//   }
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <View style={styles.container}>
//         <View style={styles.countContainer}>
//           <Text>Count: {count}</Text>
//         </View>
//         
//         <TouchableOpacity 
//         style={styles.button} 
//         onPress={this.onPress1} 
//         >
//            <Text>+</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={this.onPress2}
//         >
//           <Text>-</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 10
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10
//   },
//   countContainer: {
//     alignItems: "center",
//     padding: 10
//   }
// });

// export default App;

import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 };
  }
  onIncrement = () => {
    if (this.state.counter >= 10){
      Alert.alert("Value of counter cannot be incremented");
    }
    else{
      this.setState({
        counter : this.state.counter + 1
      })
    }
  }
  onDecrement = () => {
    if (this.state.counter <= 0){
      Alert.alert("Value of counter cannot be less than 0");
    }
    else{
      this.setState({
        counter : this.state.counter - 1
      }
      )
    }
  }

  onReset = () => {
    this.setState({
      counter : this.state.counter = 0
    })
  }

  render(){
    const { counter } = this.state;
    return(
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            Counter Application
          </Text>
          
          <Text style={styles.count}>
            {counter}
          </Text>
          <TouchableOpacity 
          style={styles.Increment} 
          onPress={this.onIncrement} 
          >
          <Text style= {styles.text}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.Decrement}
          onPress={this.onDecrement}
          >
          <Text style= {styles.text}>-</Text>
          </TouchableOpacity>
        </View>
      <View>
         <TouchableOpacity
           style={styles.button}
           onPress={this.onReset}
         >
           <Text style={styles.reset}>Reset</Text>
         </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    

  },
  
  title: {
    top: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  
  count: {
    top: 250,
    padding: 0,
    fontSize: 90,
    textAlign: 'center',
    fontFamily: 'arial',
  },

  Increment: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 400,
    marginLeft: 40,
    width: 100,
    height: 40,
    padding: 10,
  },

  text: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'arial',
  },

  Decrement: {
    alignItems: 'center',
    backgroundColor:'#DDDDDD',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 400,
    marginLeft: 250,
    width: 100,
    height: 40,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 400,
    marginLeft: 10,
    width: 370,
    height: 40,  
  },

  reset: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'arial',
  }

})