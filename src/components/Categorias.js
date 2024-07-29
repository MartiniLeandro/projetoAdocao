import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image, Modal, FlatList, Button, TouchableOpacity } from 'react-native';
import fontes from "./fontes";

export default props => {
    const [modalVisible, setModalVisible] = useState(false);

    const options = [
        { id: '1', text: 'Cachorro' },
        { id: '2', text: 'Gato' },
        { id: '3', text: 'Coelho' },
        { id: '4', text: 'Peixe' },
    ];

    return (
        <View style={estilo.container}>
            <Text style={fontes.fontsBold}>HOME</Text>
            <Text style={fontes.fonts}>Escolha uma categoria para visualizar</Text>
            <TouchableHighlight style={estilo.pequenoBtn} onPress={() => setModalVisible(true)}>
                <Text style={estilo.textBtn}>Todos <Image style={estilo.arrowImg} source={require('../images/white-down-arrow-icon-7.jpg')} /></Text>
            </TouchableHighlight>

            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={estilo.modalBackground}>
                    <View style={estilo.modalContent}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={estilo.option}>
                                    <Text>{item.text}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <Button title="Fechar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const estilo = StyleSheet.create({
    pequenoBtn: {
        marginTop: 10,
        backgroundColor: 'orange',
        alignSelf: 'flex-start',
        borderRadius: 20
    },
    textBtn: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15
    },
    container: {
        top: 20,
        flexBasis: '20%',
        justifyContent: 'center',
        margin: 20
    },
    arrowImg: {
        width: 40,
        height: 10,
        color: '#fff'
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    option: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#DDDDDD',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    selectedText: {
        fontSize: 18,
        marginBottom: 20,
    },
});
