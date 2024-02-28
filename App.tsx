/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './src/screens/SignIn';
import Reset from './src/screens/Reset';
import InitalSreen from './src/screens/StartPage/InitalScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName={'Login'}>
  //       <Stack.Screen
  //         name="Login"
  //         component={Login}
  //         options={{
  //           headerShown: false,
  //         }}
  //       />
  //       <Stack.Screen
  //         name="Signin"
  //         component={Signin}
  //         options={{
  //           headerTitle: ' ',
  //           headerStyle: {
  //             backgroundColor: 'white',
  //           },
  //           headerShadowVisible: false,
  //         }}
  //       />
  //       <Stack.Screen
  //         name="Reset"
  //         component={Reset}
  //         options={{
  //           headerTitle: ' ',
  //           headerStyle: {
  //             backgroundColor: 'white',
  //           },
  //           headerShadowVisible: false,
  //         }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  // return <Login />;
  return <InitalSreen />;
};

export default App;
