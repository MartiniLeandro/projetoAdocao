import React, {Component, useState} from "react";
import { View,Text,TextInput,StyleSheetProperties, StyleSheet } from "react-native";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pumpkin from "./screens/Pumpkin";
import Frumpkin from "./screens/Frumpkin";
import Floquinho from "./screens/Floquinho";
import Sharkinho from "./screens/Sharkinho";

const Stack = createNativeStackNavigator()

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Pumpkin" component={Pumpkin}/>
          <Stack.Screen name="Frumpkin" component={Frumpkin}/>
          <Stack.Screen name="Floquinho" component={Floquinho}/>
          <Stack.Screen name="Sharkinho" component={Sharkinho}/>
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}
