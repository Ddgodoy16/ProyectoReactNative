import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

export const Tareas = () => {
    const [showModal, setShowModal] = useState(false);
    const [descripcionTarea, setDescripcionTarea] = useState('');
    const [fechaEntrega, setFechaEntrega] = useState('');
    const [tareaIngresada, setTareaIngresada] = useState(null);

    const agregarTarea = () => {
        const nuevaTarea = {
            descripcion: descripcionTarea,
            fechaLimite: fechaEntrega,
        };
        setTareaIngresada(nuevaTarea);
        setShowModal(false);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Tareas</Text>
                <Button title="Agregar Tarea" onPress={() => setShowModal(true)} />
                {showModal && (
                    <View style={styles.modal}>
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.input}
                                placeholder="Descripción de la tarea"
                                onChangeText={setDescripcionTarea}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Fecha de entrega"
                                onChangeText={setFechaEntrega}
                            />
                            <Button title="Agregar" onPress={agregarTarea} />
                        </View>
                    </View>
                )}
                {tareaIngresada && (
                    <View style={styles.tareaContainer}>
                        <Text style={styles.texto}>Descripción: {tareaIngresada.descripcion}</Text>
                        <Text style={styles.texto}>Fecha Límite: {tareaIngresada.fechaLimite}</Text>
                    </View>
                )}
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modal: {
        position: 'absolute',
        top: 0,
        bottom: 0,
      
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: '100%', 
        zIndex: 1,
    },
    modalContent: {
        top: 0,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        height: '100%', 
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    tareaContainer: {
        marginTop: 20,
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 5,
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
