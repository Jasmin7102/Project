import { useState } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { DATA } from './data';

export default App = () => {
  const [id, setId] = useState("");
    return (
      <SafeAreaView style={styles.component}>
        <View style={styles.mainRow}>
          <TextInput onChange={(value) => setId(value)} style={styles.txt}></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={this.go}
          >
            <Text style={styles.goTxt}>Go</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          keyExtriactor={(index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.flatView}>

                {item.imageUrl && (
                  <View style={styles.flatIcon}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={styles.flatImgIcons}
                    />
                  </View>
                )}

                {!!item.id && (
                  <View style={styles.flatTxtView}>
                    <Text
                      style={styles.flatTxt}>
                      {item.id}
                    </Text>
                  </View>
                )}

              </View>
            );
          }}
        />
      </SafeAreaView>

    );
  }


const styles = StyleSheet.create({

  component: {
    backgroundColor: 'white',
    border: 0,
    borderRadius: 15,
    alignItems: 'flex-start'
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
    alignItems: 'center'
  },
  flatIcon: {
    border: 0,
    borderRadius: 100,
    padding: 12,
  },
  flatImgIcons: {
    height: 100,
    width: 100,
  },
  flatTxtView: {
    width: 90,
    paddingTop: 5,
    paddingBottom: 20,
  },
  flatTxt: {
    textAlign: 'center',
    fontSize: 10,
    color: 'rgb(133,136,140)',
  },
  goTxt: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    border: 0,
    borderRadius: 5,
    margin: 10,
  },

})