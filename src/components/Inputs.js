import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import estilo from './fontes';

export default props => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <View>
            <Text style={estilos.textInput}>EMAIL</Text>
            <TextInput
                style={[estilos.input, estilo.fonts]}
                placeholder="user@exemplo.com.br"
                value={email} 
                onChangeText={text => setEmail(text)} 
            />
            <Text style={estilos.textInput}>SENHA</Text>
            <TextInput
                style={[estilos.input, estilo.fonts]}
                placeholder="****"
                secureTextEntry
                value={senha} 
                onChangeText={text => setSenha(text)} 
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    textInput: {
        color: '#881AE5',
        fontWeight: 'bold',
        paddingTop: 10
    }
});
