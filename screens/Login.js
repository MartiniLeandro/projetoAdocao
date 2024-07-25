import React, {Component, useState} from "react";
import { View,StyleSheet, TouchableHighlight,Text } from "react-native";
import Form from "../src/components/Form";
import Inputs from "../src/components/Inputs";


export default class Login extends Component{

  constructor(props){
    super(props)
    this.irPara = this.irPara.bind(this)
}

irPara(){
    this.props.navigation.navigate("Home")
}


  render(){
    return(
      <View style={estilos.container}>
        <Form/>
        <Inputs/>
        <TouchableHighlight style={estilos.btn} onPress={this.irPara}>
          <Text style={estilos.textBtn}>Entrar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

      



const estilos = StyleSheet.create({
  container: {
    top:-40,
    flex:1,
    justifyContent:'center',
    gap:20,
    margin:20
  },
  btn: {
    backgroundColor: '#881AE5',
    padding: 10,
    borderRadius: 5,
    borderRadius: 30,
    marginTop:20
  },
  textBtn: {
      color:'#fff',
      padding: 5,
      textAlign:'center',
      fontSize: 20,
      fontWeight:'700'
  }
})