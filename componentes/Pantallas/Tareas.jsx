import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export const Tareas = () => {
    const [showModal, setShowModal] = useState(false);
    const [descripcionTarea, setDescripcionTarea] = useState('');
    const [fechaEntrega, setFechaEntrega] = useState('');
    const [tareaIngresada, setTareaIngresada] = useState(null); // Nuevo estado para almacenar la tarea ingresada

    const agregarTarea = () => {
        const nuevaTarea = {
            descripcion: descripcionTarea,
            fechaLimite: fechaEntrega,
        };
        setTareaIngresada(nuevaTarea); // Guardar la tarea ingresada
        // Luego puedes cerrar el modal
        setShowModal(false);
    };

    return (
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
            {/* Agregar View para mostrar la tarea ingresada */}
            {tareaIngresada && (
                <View style={styles.tareaContainer}>
                    <Text style={styles.texto}>Descripción: {tareaIngresada.descripcion}</Text>
                    <Text style={styles.texto}>Fecha Límite: {tareaIngresada.fechaLimite}</Text>
                </View>
            )}
        </View>
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
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
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
