import React, {useState} from "react";
import {View,Text,TouchableHighlight, StyleSheet,Image} from 'react-native'
import fontes from "./fontes";


export default props => {

    return(
        <View style={estilo.container}>
            <Text style={fontes.fontsBold}>HOME</Text>
            <Text style={fontes.fonts}>Escolha uma categoria para visualizar</Text>
            <TouchableHighlight style={estilo.pequenoBtn}>
                <Text style={estilo.textBtn}>Todos <Image style={estilo.arrowImg} source={require('../images/white-down-arrow-icon-7.jpg')}/></Text>
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
        paddingHorizontal:10,
        paddingVertical:10,
        color:"#fff",
        fontWeight:"bold",
        fontSize:15
    },
    container: {
        top:20,
        flexBasis:'20%',
        justifyContent:'center',
        margin:20
      },
      arrowImg: {
        width:40,
        height:10,
        color:'#fff'
      }
})