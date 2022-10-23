This repository contains code for application that has all previous assignments.

Set up environment for both Android and IOS devices. 
For more information, please refer to the following article: https://reactnative.dev/docs/environment-setup

For navigating between different components, please refer to the following article: https://reactnavigation.org/docs/getting-started/

On implementing Stack Navigation:
Result:
> IOS Screen
<img width="200" alt="Screenshot 2022-10-17 at 5 57 12 PM" src="https://user-images.githubusercontent.com/56545525/196225643-6e398941-63a9-41b9-bcf1-c9178b9a5494.png">

> Android Screen
<img width="200" alt="Screenshot 2022-10-17 at 5 56 57 PM" src="https://user-images.githubusercontent.com/56545525/196225761-10d3990e-978a-4c52-b861-cc5dc6c4e405.png">

Assignment 1: Counter Application

<img width="200" alt="Screenshot 2022-10-18 at 11 35 46 AM" src="https://user-images.githubusercontent.com/56545525/196348671-23b73a59-70ad-40b1-94f6-817f2b8db78f.png">

Assignment 2 : Movie Screen 

<img width="200" alt="Screenshot 2022-10-18 at 11 35 57 AM" src="https://user-images.githubusercontent.com/56545525/196348690-243d9eba-d1eb-4e61-ab45-62b6f588afcf.png">

Assignment 3: OTP Screen 

<img width="200" alt="Screenshot 2022-10-18 at 11 23 36 AM" src="https://user-images.githubusercontent.com/56545525/196348523-03a69c8d-2579-494d-ac96-d4c67576d0e4.png">

Assignment 4: Color Code Viewer

<img width="200" alt="Screenshot 2022-10-18 at 11 35 32 AM" src="https://user-images.githubusercontent.com/56545525/196348637-01dd2d80-ab03-4d75-b102-f2072110be85.png">

Assignment 5: Practice Assignment (Myntra Screen)

<img width="200" alt="Screenshot 2022-10-18 at 11 36 10 AM" src="https://user-images.githubusercontent.com/56545525/196348714-281344d6-b444-412a-9b6e-f35ce5064244.png">

After Implementing Tab Navigation and linking it with stack navigation, the screens may look somewhat like:

Android Screen:

<img width="200" alt="Screenshot 2022-10-23 at 2 08 52 AM" src="https://user-images.githubusercontent.com/56545525/197361964-5cd81b29-2836-48d3-a8db-5e2c6a999a31.png">

IOS Screen:

<img width="200" alt="Screenshot 2022-10-23 at 2 00 28 AM" src="https://user-images.githubusercontent.com/56545525/197361805-26cedc1f-6f49-47c2-a3ad-0569e3bdea26.png">

In the above screenshots, it can be seen that both stack and tab Navigation have beeen linked which can be done as:

> App.js (Stack Navigation)

```
Function App() {
return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ScreenHome" component={TabNavigation} options={{headerShown: false}}/>        //Here TabNavigation is a component that is imported from TabNavigation.js file and contains code to implement tab navigation.
        </Stack.Navigator>
      </NavigationContainer>
    );
}
```

>TabNavigation.js (Tab Navigation)

```
Function TabNavigation() {
return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
  );
}
```

On using options, we can update changes to header:

Android Screen:

<img width="200" alt="Screenshot 2022-10-23 at 2 09 02 AM" src="https://user-images.githubusercontent.com/56545525/197361900-e33a2258-901a-484d-8c80-067f6b511f21.png">
<img width="200" alt="Screenshot 2022-10-23 at 2 09 12 AM" src="https://user-images.githubusercontent.com/56545525/197361905-e93ee5cb-7b10-4ca6-8042-b0ac1109238a.png">


IOS Screen:

<img width="200" alt="Screenshot 2022-10-23 at 2 00 16 AM" src="https://user-images.githubusercontent.com/56545525/197361873-4c331ac3-5660-4e4f-a3b5-ec4820afe0d9.png">
<img width="200" alt="Screenshot 2022-10-23 at 2 00 09 AM" src="https://user-images.githubusercontent.com/56545525/197361874-1961314b-f2da-4d44-9d40-6b532f03ee33.png">
<img width="200" alt="Screenshot 2022-10-23 at 2 00 21 AM" src="https://user-images.githubusercontent.com/56545525/197361875-557a198b-3596-44e4-8c34-6b65d901c783.png">
<img width="200" alt="Screenshot 2022-10-23 at 2 24 42 AM" src="https://user-images.githubusercontent.com/56545525/197362008-9e4b98a6-58c9-44e5-851a-d47d28d3ecad.png">
<img width="200" alt="Screenshot 2022-10-23 at 2 24 29 AM" src="https://user-images.githubusercontent.com/56545525/197362015-af5b084b-d9de-48f7-b7c4-ae3fd7579f72.png">

For implementation of drawer navigation, please refer to file drawerNavigation.js .

<img width="200" alt="Screenshot 2022-10-20 at 1 41 22 AM" src="https://user-images.githubusercontent.com/56545525/196794203-f87b6770-a3dd-4a49-8860-b4163d63e45c.png">

On Implementing Drawer Navigation, one may face several problems. In that case, try the following steps:
1. Delete pods folder and podfile.lock
2. npm uninstall react-native-webview
3. npm i react-native-webview
4. cd ios
5. pod install
6. (npx) react-native run-ios
7. Reset cache
