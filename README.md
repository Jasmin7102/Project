This repository contains code for application that has all previous assignments.

Set up environment for both Android and IOS devices. 
For more information, please refer to the following article: https://reactnative.dev/docs/environment-setup

For navigating between different components, please refer to the following article: https://reactnavigation.org/docs/getting-started/

On Implementing stack navigation:
Result:
> IOS Screen

<img width="413" alt="Screenshot 2022-10-17 at 5 57 12 PM" src="https://user-images.githubusercontent.com/56545525/196225643-6e398941-63a9-41b9-bcf1-c9178b9a5494.png">

> Android Screen

<img width="403" alt="Screenshot 2022-10-17 at 5 56 57 PM" src="https://user-images.githubusercontent.com/56545525/196225761-10d3990e-978a-4c52-b861-cc5dc6c4e405.png">


Assignment 1: Counter App

<img width="413" alt="Screenshot 2022-10-18 at 11 35 46 AM" src="https://user-images.githubusercontent.com/56545525/196348671-23b73a59-70ad-40b1-94f6-817f2b8db78f.png">

Assignment 2: Movie Screen

<img width="413" alt="Screenshot 2022-10-18 at 11 35 57 AM" src="https://user-images.githubusercontent.com/56545525/196348690-243d9eba-d1eb-4e61-ab45-62b6f588afcf.png">

Assignment 3: OTP Screen 

<img width="413" alt="Screenshot 2022-10-18 at 11 23 36 AM" src="https://user-images.githubusercontent.com/56545525/196348523-03a69c8d-2579-494d-ac96-d4c67576d0e4.png">

Assignment 4: Color Code Viewer

<img width="413" alt="Screenshot 2022-10-18 at 11 35 32 AM" src="https://user-images.githubusercontent.com/56545525/196348637-01dd2d80-ab03-4d75-b102-f2072110be85.png">

Assignment 5: Practice Assignment (Myntra Screen)

<img width="413" alt="Screenshot 2022-10-18 at 11 36 10 AM" src="https://user-images.githubusercontent.com/56545525/196348714-281344d6-b444-412a-9b6e-f35ce5064244.png">




On Implementing Tab Navigation:

> ios Screen

<img width="412" alt="Screenshot 2022-10-20 at 1 24 52 AM" src="https://user-images.githubusercontent.com/56545525/196791599-7c9bd7ae-63a2-46df-97c1-adbe4098fc3a.png">

> Counter Application 

<img width="412" alt="Screenshot 2022-10-20 at 1 24 41 AM" src="https://user-images.githubusercontent.com/56545525/196791628-95277690-cee6-4bf2-a12c-4f268ceecbe2.png">

> Movie Screen

<img width="412" alt="Screenshot 2022-10-20 at 1 24 34 AM" src="https://user-images.githubusercontent.com/56545525/196791650-c2a47125-e664-48af-922d-4cb24f4f5ea2.png">

> OTP Screen

<img width="412" alt="Screenshot 2022-10-20 at 1 24 46 AM" src="https://user-images.githubusercontent.com/56545525/196791673-691bf919-7ac3-472f-91ba-d2f5141f79b2.png">

In the above screenshots, it can be seen that both stack and tab Navigation have beeen linked which can be done as:

> App.js (Stack Navigation)
Function App() {
return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ScreenHome" component={TabNavigation} options={{headerShown: false}}/>        //Here TabNavigation is a component that is imported from TabNavigation.js file and contains code to implement tab navigation.
        </Stack.Navigator>
      </NavigationContainer>
    );
}

>TabNavigation.js (Tab Navigation)

Function TabNavigation() {
return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
  );
}




On Implementing Drawer Navigation, one may face several problems. In that case, try the following steps:
1. Delete pods folder and podfile.lock
2. npm uninstall react-native-webview
3. npm i react-native-webview
4. cd ios
5. pod install
6. (npx) react-native run-ios
7. Reset cache

Drawer Navigation Implementation:
<img width="412" alt="Screenshot 2022-10-20 at 1 41 22 AM" src="https://user-images.githubusercontent.com/56545525/196794203-f87b6770-a3dd-4a49-8860-b4163d63e45c.png">

Linking Drawer Navigation and other Navigation isn't performed by me yet.
