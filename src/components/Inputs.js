import React from "react";
import {View,Text,TextInput, StyleSheet} from 'react-native'
import estilo from './fontes'

export default props => {

    return(
        <View>
            <Text style={estilos.textInput}>EMAIL</Text>
            <TextInput style={[estilos.input,estilo.fonts]} placeholder="user@exemplo.com.br"/>
            <Text style={estilos.textInput}>SENHA</Text>
            <TextInput style={[estilos.input,estilo.fonts]} placeholder="****" secureTextEntry/>
        </View>
          )
}

const estilos = StyleSheet.create({
    input: {
        borderBottomWidth:1,
        borderBottomColor: 'black'
    },
    textInput: {
        color: '#881AE5',
        fontWeight:'bold',
        paddingTop: 10

    }
})
  
