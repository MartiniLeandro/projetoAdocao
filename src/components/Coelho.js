import React from "react";
import { View,Text,Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Coelho() {

    const navigation = useNavigation()

    const irParaDetalhes = () =>{
        navigation.navigate("Floquinho")
    }

    return(
        <TouchableOpacity onPress={irParaDetalhes}>
            <View style={estilos.containerAnimals}>
                <Image style ={estilos.imagem} source={require('../images/coelho.jpg')}/>
                <View style={estilos.containerText}>
                    <Text style={[estilos.textos,estilos.title]}>Coelho 01</Text>
                    <Text style={estilos.textos}><Image style={estilos.imgDog} source={require('../images/rabbit.png')}/> Floquinho</Text>
                    <Text style={estilos.textos}>07 Anos</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    imagem : {
        width:95,
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