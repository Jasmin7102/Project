import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRef, useState, useCallback } from 'react';

import { DATA } from './data';

const endThreshold = 100;
const ITEM_HEIGHT = 320; // ItemHeight (300) + MarginBottom (20)

const App = () => {
  let flatlistRef = useRef(null).current;
  const [input, setInput] = useState('');
  const [isEnd, setIsEnd] = useState(false);

  const _keyExtractor = useCallback((item, index) => `${item.id}_${index}`, []);
  const _getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  const onEnd = () => setIsEnd(true);

  const onScrollEvent = ({ contentOffset }) =>
    contentOffset.y <= ITEM_HEIGHT * (DATA.length - 1) - endThreshold;

  const renderItem = ({ item }) => (
    <View style={styles.imageWrapper}>
      <Image style={styles.imageStyle} source={{ uri: item?.imageUrl }} />
      {item?.id && (
        <View style={styles.imageIDView}>
          <Text style={styles.imageIDText}>{item.id}</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TextInput
          keyboardType='numeric'
          style={styles.textInput}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            try {
              const index = DATA.findIndex(
                (item) => item?.id === parseInt(input)
              );

              if (typeof parseInt(input) === 'number' && index >= 0) {
                flatlistRef.scrollToIndex({
                  index: index,
                  animted: true,
                });
              } else {
                // Todo
              }
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <Text style={styles.goBtnText}>GO</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        windowSize={6}
        bounces={false}
        ref={(ref) => {
          flatlistRef = ref;
        }}
        onEndReached={onEnd}
        initialNumToRender={4}
        style={styles.flatList}
        renderItem={renderItem}
        maxToRenderPerBatch={6}
        scrollEventThrottle={160}
        keyExtractor={_keyExtractor}
        getItemLayout={_getItemLayout}
        onScroll={({ nativeEvent }) => {
          if (onScrollEvent(nativeEvent)) {
            setIsEnd(false);
          }
        }}
      />
      {isEnd && (
        <TouchableOpacity
          style={styles.scrollToTopBtn}
          onPress={() => {
            flatlistRef?.scrollToIndex({
              index: 0,
              animted: true,
              viewPosition: 1,
            });
          }}
        >
          <Image
            style={styles.scrollToTopBtnIcon}
            source={{
              uri: 'https://img.icons8.com/ios-glyphs/50/FFFFFF/long-arrow-up.png',
            }}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    width: '100%',
    marginBottom: 16,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  textInput: {
    height: 50,
    width: '82%',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderColor: '#8785A2',
  },
  goButton: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8785A2',
  },
  goBtnText: {
    fontSize: 14,
    color: '#F6F6F6',
    fontWeight: 'bold',
  },
  flatList: {
    flex: 1,
  },
  imageWrapper: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFE2E2',
  },
  imageIDView: {
    left: 0,
    width: '25%',
    height: '8%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8785A2ED',
    borderBottomRightRadius: 15,
  },
  imageIDText: {
    fontSize: 14,
    color: '#F6F6F6',
    textAlign: 'center',
  },
  scrollToTopBtn: {
    width: 50,
    right: 30,
    height: 50,
    bottom: 40,
    borderRadius: 15,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8785A2',
  },
  scrollToTopBtnIcon: {
    width: '60%',
    height: '60%',
  },
});

export default App;
