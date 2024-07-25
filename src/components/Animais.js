import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import Cachorro from './Cachorro'
import Gato from "./Gato";
import Coelho from "./Coelho";
import Peixe from "./Peixe";


export default props => {

    return(

    <View style={estilos.bigContainer}>
        <Text style={estilos.texto}>Resultado da Busca:</Text>
        <Cachorro/>
        <Gato/>
        <Coelho/>
        <Peixe/>
    </View>
    )
}

const estilos = StyleSheet.create({
    bigContainer: {
        backgroundColor: '#FBE8FE',
        gap:10,
        justifyContent:'center',
        paddingBottom:25,
    },
    texto:{
        color:'#9215AF',
        fontSize:18,
        paddingTop:20,
        marginHorizontal:10,
        fontWeight:'bold'
    }

})