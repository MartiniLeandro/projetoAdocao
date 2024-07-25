import React, {useState} from "react";
import {View,Text,TouchableHighlight, StyleSheet} from 'react-native'
import fontes from "./fontes";


export default props => {

    return(
        <View style={estilo.container}>
            <Text style={fontes.fontsBold}>HOME</Text>
            <Text style={fontes.fonts}>Escolha uma categoria para visualizar</Text>
            <TouchableHighlight style={estilo.pequenoBtn}>
                <Text style={estilo.textBtn}>Todos ↓</Text>
            </TouchableHighlight>
        </View>
    )
}

const estilo = StyleSheet.create({
    pequenoBtn: {
        marginTop:10,
        backgroundColor: 'orange',
        alignSelf: 'flex-start',
        borderRadius:20
    },
    textBtn: {
        paddingHorizontal:30,
        paddingVertical:10,
        color:"#fff",
        fontWeight:"700",
        fontSize:15
    },
    container: {
        top:20,
        flexBasis:'20%',
        justifyContent:'center',
        margin:20
      },
})