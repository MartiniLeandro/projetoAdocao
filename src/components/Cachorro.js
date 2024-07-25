import React, { Component } from "react";
import { View,Text,Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Cachorro() {

    const navigation = useNavigation()

    const irParaDetalhes = () =>{
        navigation.navigate("Pumpkin")
    }

        return(
            <TouchableOpacity onPress={irParaDetalhes} >
                <View style={estilos.containerAnimals}>
                    <Image style ={estilos.imagem} source={require('../images/cachorro.jpg')}/>
                    <View style={estilos.containerText}>
                        <Text style={[estilos.textos,estilos.title]}>Cachorro 01</Text>
                        <Text style={estilos.textos}><Image style={estilos.imgDog} source={require('../images/dog.png')}/> Pumpkin</Text>
                        <Text style={estilos.textos}>03 Anos</Text>
                    </View>
                </View>
            </TouchableOpacity>
            )
}


const estilos = StyleSheet.create({
    imagem : {
        width:80,
        height:'100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius:8,
    },
    containerAnimals: {
        flexDirection:'row',

        borderRadius: 8,
        backgroundColor: '#fff',
        marginHorizontal:20
    },
    containerText: {
        padding:4
    },
    textos:{
        marginVertical:3,
        color:'#000',
        fontWeight:'600'
    },
    title: {
        fontSize:18
    },
    imgDog: {
        width:16,
        height:16,
    }
})