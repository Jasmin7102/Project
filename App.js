import { useCallback, useRef, useState } from "react";
import { View, Text, SafeAreaView, FlatList, Alert, TouchableOpacity, Image, StyleSheet, TextInput, LogBox } from 'react-native';
import { DATA } from './data';

export default App = () => {

  const [input, setInput] = useState('');
  const [isEnd, setIsEnd] = useState(false)
  var flatlistRef = useRef(null).current
  const _keyExtractor = useCallback((_, index) => index.toString());
  const _getItemLayout = useCallback(((_, index) => (
    { length: 400, offset: 400 * index, index }
  )))

  const onEnd = () => {
    setIsEnd(true);
  }

  let len = DATA.length;
  let total = len*400;
  const onScrollEvent = ({contentOffset}) => { 
    return contentOffset.y <= 15370
  };

  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.mainRow}>
        <TextInput
          keyboardType="numeric"
          onChangeText={
            (text) => setInput(text)
          }
          style={styles.txt}>
        </TextInput>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            try {
              const index = DATA.findIndex((item) => item?.id === parseInt(input));

              if (typeof (parseInt(input)) === 'number' && index >= 0) {
                flatlistRef.scrollToIndex({
                  index: index,
                  animted: true
                })
              } else {
                // Todo
              }
            } catch (error) {
              console.error(error);
            }

          }}
        >
          <Text style={styles.scrollTxt}>GO</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        getItemLayout={_getItemLayout}
        keyExtractor={_keyExtractor}
        ref={(ref) => {
          flatlistRef = ref
        }}
        onEndReached={onEnd}
        onScroll={({nativeEvent}) => {
          if(onScrollEvent(nativeEvent)){
            
            setIsEnd(false)
          }
          
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatView}>
              {item?.imageUrl && (
                <View style={styles.flatIcon}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.flatImgIcons}
                  />
                </View>
              )}
              {item?.id && (
                <View style={styles.flatTxtView}>
                  <Text style={styles.flatTxt}>
                    {item.id}
                  </Text>
                </View>
              )}


            </View>
          );
        }}
      />
      {isEnd && <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            flatlistRef.scrollToIndex({
              index: 0,
              animted: true,
              viewPosition: 1,
            })
          }}
        >
          <Text style={styles.scrollTxt}>SCROLL TO TOP</Text>
        </TouchableOpacity>
      </View>}
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({

  component: {
    flex: 1,
    backgroundColor: 'white',
    border: 0,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txt: {
    padding: 20,
    alignSelf: 'center',
    fontSize: 14,
    margin: 10,
    borderWidth: 1,
    fontWeight: 'bold',
    height: "70%",
    width: "78%",
  },
  flatView: {
    marginBottom: 20,
    alignItems: 'center',
  },
  flatIcon: {
    width: 300,
    height: 360,
    borderRadius: 30,
    overflow: 'hidden',
  },
  flatImgIcons: {
    height: '100%',
    width: '100%'
  },
  flatTxtView: {
    paddingTop: 5,
  },
  flatTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgb(133,136,140)',
  },
  goTxt: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
  button: {
    backgroundColor: 'rgb(133,136,140)',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  scrollTxt: {
    fontSize: 14,
    padding: 20,
    color: 'white',
  }
})