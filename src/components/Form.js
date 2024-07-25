import React from "react";
import {Text,View,StyleSheet,Image} from 'react-native'
import estilo from './fontes'

export default props => {

    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={require('../images/ico.png')}/>
            <Text style={estilo.fontsBold}>LOGIN</Text>
            <Text style={estilo.fonts}>Insira seus dados para continuar</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    imagem: {
        width: 50,
        height: 50,

        marginBottom: 20
    },
    form: {
        backgroundColor:'blue'
    },
    
})