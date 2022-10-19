import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const DATA = [
    {
        image: { uri: "https://diariolibre.blob.core.windows.net.optimalcdn.com/images/binrepository/actor-de-365-michele-morrone_15949464_20210310185052.jpg" },
        brand: "Tommy Hilfiger",
        info: "Men's Morrison Stripe Polo, Limelight Combo",
        price: 'USD 23',
        
    },
    {
        image: { uri: "https://cdn.shopify.com/s/files/1/1414/2498/products/CS_ClassicWhite_06_1080x.jpg?v=1614938700" },
        brand: "Tommy Hilfiger",
        info: "Men's Longsleeve White Shirt, White/Black/Red",
        price: 'USD 23',
    },
    {
        image: { uri: "https://cdn-fnknc.nitrocdn.com/jwqHRGAzpUgGskUSHlppNQzwuXgXIKwg/assets/static/optimized/rev-88d21a1/wp-content/uploads/2021/11/Luca_Faloni_Moss-Green-Brushed-Cotton-Shirt_Editorial_Hero_Desktop_Made_in_Italy_2.jpeg" },
        brand: "Louis Vuitton",
        info: "Men's Fullsleeve Shirt, Olive Green",
        price: 'USD 25',
    },
    {
        image: { uri: "https://assets.teenvogue.com/photos/6192959423b6e1fb7c3dfef6/4:3/w_625,h_468,c_limit/Dazed_Winter_2021_Harry_Styles_inside11%20copy.jpg" },
        brand: "H&M",
        info: "Single Breasted Blazer, White/Black",
        price: 'USD 30',
    },
];
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false
        };
    }

    onClick = () => {
        this.setState({ check: !this.state.check })
    }
    render() {
        return (
            <SafeAreaView style={style.container}>

                <View style={style.firstRow}>
                    <Text style={style.itemsTxt}>195 items</Text>
                    <View style={style.sort}>
                        <Image
                            style={style.sortImg}
                            source={{ uri: "https://img.icons8.com/pastel-glyph/344/sorting-arrows.png" }}
                        />
                        <Text style={style.sortTxt}>SORT</Text>

                        <View style={style.verticalLine} />
                        <Image
                            style={style.filterImg}
                            source={{ uri: "https://img.icons8.com/android/344/filter.png" }}
                        />
                        <Text style={style.filterTxt}>FILTER</Text>
                    </View>

                </View>

                <View style={style.line} />

                <View style={style.scroll}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity
                            style={style.menu}
                            onPress={this.onPress}
                        >
                            <Text style={style.menuTxt}>Polo Shirts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.menu}
                            onPress={this.onPress}
                        >
                            <Text style={style.menuTxt}>Dress Shirts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.menu}
                            onPress={this.onPress}
                        >
                            <Text style={style.menuTxt}>Shorts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.menu}
                            onPress={this.onPress}
                        >
                            <Text style={style.menuTxt}>T-Shirts &amp; Shirts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.menu}
                            onPress={this.onPress}
                        >
                            <Text style={style.menuTxt}>Jeans</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>


                <ScrollView contentContainerStyle={{ paddingTop: 10 }} style={style.productScroll}>
                    <View style={style.productSection}>
                        {DATA.map(item => {
                            return (
                                <View style={style.product}>

                                    <Image
                                        style={style.productImg}
                                        // resizeMode={'contain'}
                                        source={item.image}
                                    />

                                    <Text style={style.newTxt}>NEW</Text>
                                    <TouchableOpacity onPress={this.onClick}>

                                        {this.state.check == 0 ?
                                            <Image style={style.wishlist} resizeMode={'contain'} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2767/2767018.png" }} /> :

                                            <Image style={style.wishlist} resizeMode={'contain'} source={{ uri: "https://cdn-icons-png.flaticon.com/128/2767/2767003.png" }} />}

                                    </TouchableOpacity>

                                    <Text style={style.productInfoTxtOne}>{item.brand}</Text>
                                    <Text style={style.productInfoTxtTwo}>{item.info}</Text>
                                    <Text style={style.productInfoTxtThree}>{item.price}</Text>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>

            </SafeAreaView>


        );
    }
}
class Category extends Component {
    render() {
        return (
            Alert.alert("You pressesd Categories")
        );
    }
}
class Cart extends Component {
    render() {
        return (
            Alert.alert("You pressesd My Cart")
        );
    }
}
class Wishlist extends Component {
    render() {
        return (
            Alert.alert("You pressesd Wishlist")
        );
    }
}
class Account extends Component {
    render() {
        return (
            Alert.alert("You pressesd Account")
        );
    }
}
const Tab = createBottomTabNavigator();

export default class MyntraShop extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/512/709/709873.png" }} />
                        )
                    }} />
                    <Tab.Screen name="Categories" component={Category} options={{
                        tabBarLabel: 'Categories',
                        tabBarIcon: ({ color, size }) => (
                            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/512/82/82122.png" }} />
                        )
                    }} />
                    <Tab.Screen name="My Cart" component={Cart} options={{
                        tabBarLabel: 'My Cart',
                        tabBarIcon: ({ color, size }) => (
                            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/512/34/34568.png" }} />
                        )
                    }} />
                    <Tab.Screen name="Wishlist" component={Wishlist} options={{
                        tabBarLabel: 'Wishlist',
                        tabBarIcon: ({ color, size }) => (
                            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/512/3870/3870922.png" }} />
                        )
                    }} />
                    <Tab.Screen name="Account Settings" component={Account} options={{
                        tabBarLabel: 'Account',
                        tabBarIcon: ({ color, size }) => (
                            <Image style={style.home} source={{ uri: "https://cdn-icons-png.flaticon.com/512/709/709579.png" }} />
                        )
                    }} />
                </Tab.Navigator>
            </NavigationContainer>

        );
    }
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    itemsTxt: {
        color: 'black',
        fontSize: 12,
    },
    sort: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    verticalLine: {
        borderLeftColor: "rgb(224,224,224)",
        borderLeftWidth: 1,
        marginHorizontal: 10,
    },
    sortImg: {
        height: 15,
        width: 15,
        marginHorizontal: 2,
    },
    sortTxt: {
        color: 'rgb(41,41,41)',
        marginHorizontal: 5,
        fontSize: 12,
    },
    filterImg: {
        height: 15,
        width: 15,
        marginHorizontal: 5,
    },
    filterTxt: {
        color: 'rgb(41,41,41)',
        marginLeft: 5,
        fontSize: 12,
    },
    line: {
        borderBottomColor: "rgb(242,243,248)",
        borderBottomWidth: 1,
        marginBottom: 1,
    },
    scroll: {
        marginTop: 10,
        marginLeft: 2,
    },
    menu: {
        width: '20%',
        height: "70%",
        marginHorizontal: 7,
        border: 0,
        borderRadius: 8,
        backgroundColor: 'rgb(244,244,244)',
    },
    menuTxt: {
        color: 'black',
        textAlign: 'center',
        padding: 8,
        fontSize: 12,
        fontWeight: '500',
    },
    productSection: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    product: {
        height: 390,
        width: "49%"
    },
    productImg: {
        height: "75%",
        width: "95%",
        marginBottom: 2,
    },
    productInfo: {
        padding: 10,
        textAlign: 'left',
    },
    productInfoTxtOne: {
        fontWeight: '500',
        color: 'rgb(5,5,5)',
        paddingTop: 5,
        paddingBottom: 2,
    },
    productInfoTxtTwo: {
        color: 'rgb(56,56,56)',
        fontSize: 12,
        padding: 2,
    },
    productInfoTxtThree: {
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 2,
    },
    home: {
        width: 20,
        height: 20,
        fontSize: 10
    },

    newTxt: {
        position: "absolute",
        backgroundColor: 'rgb(66,149,66)',
        width: 50,
        height: 20,

        textAlign: 'center',
        padding: 3,
        color: 'white',
        fontSize: 10,
    },
    wishlist: {
        width: 20,
        height: 30,
        position: 'absolute',
        right: 20,
        bottom: 260,
    },
    productScroll: {
        flex: 1,
        //backgroundColor: 'black',
    },
    heightView: {
        height: 80,
    }

});