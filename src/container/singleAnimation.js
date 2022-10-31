import React, { Component } from 'react';  
import {StyleSheet,Text, View,Animated,Easing} from 'react-native';  
  
export default class  App extends Component {  
    constructor () {  
        super();
        this.spinValue = new Animated.Value(0)
        this.fadeAnim = new Animated.Value(0)
    }  
    componentDidMount () {  
        this.spin()  
        this.fade()
    }   
    fade = () => {  
        
        Animated.timing(    
            this.fadeAnim,
            {          
                toValue: 1, 
                duration: 2000,
                useNativeDriver: true,
                easing: Easing.linear  
            }  
        ).start()  
    }   
    spin = () => {  
        
        Animated.timing(    
            this.spinValue,
            {          
                toValue: 1, 
                duration: 6000,
                useNativeDriver: false
            }  
        ).start()  
    }  
    render () {  
        
        const spin = this.spinValue.interpolate({  
            inputRange: [0,0.5,0.7,0.9,1],  
            outputRange: ['0deg','920deg', '-110deg', '180deg', '360deg']  
        })  
        const textSize = this.spinValue.interpolate({  
            inputRange: [0, 1],  
            outputRange: [10, 100]  
        })  
        return (  
            <View style={styles.container}>  
                <Animated.View 
                    style={{
                        opacity:this.fadeAnim,
                    }
                    }
                > 
                <Animated.Text style={{
                    fontSize: textSize,
                    color: 'red',
                    transform: [{rotate: spin}],
                    }}>React Native</Animated.Text>
                </Animated.View> 
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    }  
})