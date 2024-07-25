import React from "react";
import {View,Text,StyleSheet,Image, TouchableHighlight} from 'react-native'
import fontes from "../src/components/fontes";

export default props => {

    return(
    <>
        <View style={estilos.bigContainer}>
            <View style={estilos.container}>
                <Image  style={estilos.img} source={require('../src/images/peixe.jpg')}/>
                <Text style={[fontes.fonts,estilos.textStyle]}>Nome: Sharkinho</Text>
                <Text style={[fontes.fonts,estilos.textStyle]}>Idade: 11 meses</Text>
                <Text style={[fontes.fonts,estilos.textStyle]}>Contato para adoção: +55 (99) 99999-9999</Text>
                <Text style={[fontes.fonts,estilos.textP]}>   Sharkinho com sua bela cor vermelha e dourada, está precisando de um novo lar
                    para se divertir. gosta de se esconder no seu aquário e ficar em sombras ou locais mais escuros, mas quando há comida por perto,
                    é o primeiro a aparecer e devorar tudo. Caso queira adota-lo, entre em contato!!!
                </Text>
            <View>
                <TouchableHighlight style={[estilos.btn]}><Text style={estilos.textBtn}>Visualizar mais fotos</Text></TouchableHighlight>
            </View>
            </View>
        </View>
        
    </>
    )
}

const estilos = StyleSheet.create({
    bigContainer: {
        backgroundColor: '#FBE8FE',
        flex:1
    },
    container: {
        flex:1,
        backgroundColor: 'white',
        margin:20,
        borderRadius: 10
    },
    img: {
        width:'100%',
        resizeMode: 'stretch',
        height:200,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        
    },
    textStyle: {
        margin:7,
        fontSize:16,
        fontWeight:'400'
    },
    textP: {
        margin:7,
        paddingHorizontal:10,
        fontSize:18,
        fontWeight:'600',
        textAlign: 'justify'
        
    },
    btn: {
        backgroundColor: '#881AE5',
        padding: 8,
        borderRadius: 30,
        marginTop:40,
        width:250,
        margin:'auto',
        left:-10

      },
      textBtn: {
          color:'#fff',
          padding: 8,
          textAlign:'center',
          fontSize: 18,
          fontWeight:'700'
      }
})
