import React from "react";
import { View,Text,Image, StyleSheet,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Peixe() {

    const navigation = useNavigation()

    const irParaDetalhes = () =>{
        navigation.navigate("Sharkinho")
    }

    return(
        <TouchableOpacity onPress={irParaDetalhes}>
            <View style={estilos.containerAnimals}>
                <Image style ={estilos.imagem} source={require('../images/peixe.jpg')}/>
                <View style={estilos.containerText}>
                    <Text style={[estilos.textos,estilos.title]}>Peixe 01</Text>
                    <Text style={estilos.textos}><Image style={estilos.imgDog} source={require('../images/cat.png')}/> Sharkinho</Text>
                    <Text style={estilos.textos}>11 Meses</Text>
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