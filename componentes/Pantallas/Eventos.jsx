import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList, Modal, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export const Eventos = () => {
    const [showModal, setShowModal] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [clima, setClima] = useState('');
    const [climaIcono, setClimaIcono] = useState(''); // Nuevo estado para el icono del clima
    const [climaError, setClimaError] = useState('');
    const [evento, setEvento] = useState('');
    const [ciudad, setCiudad] = useState('');

    const agregarEvento = () => {
        const nuevoEvento = {
            titulo,
            fecha,
            hora,
            descripcion,
        };
        setEvento([...evento, nuevoEvento]);
        setShowModal(false);
        setTitulo('');
        setFecha('');
        setHora('');
        setDescripcion('');
    };

    const obtenerClima = async () => {
        try {
            const apiKey = '71f0fec5f754d6a4d37e4c72f18923ad';

            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`);
            const climaData = response.data.weather[0];
            setClima(climaData.description);
            setClimaIcono(climaData.icon); // Guardar el código del icono del clima
            setClimaError('');
        } catch (error) {
            console.error('Error al obtener el clima:', error);
            setClima('');
            setClimaIcono('');
            setClimaError('Error al obtener el clima');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>EVENTOS</Text>
            <TouchableOpacity style={styles.boton} onPress={() => setShowModal(true)}>
                <Text style={styles.botonTexto}>Agregar Evento</Text>
            </TouchableOpacity>

            <Modal visible={showModal} transparent={true} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Título"
                            value={titulo}
                            onChangeText={setTitulo}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Fecha (DD/MM/AAAA)"
                            value={fecha}
                            onChangeText={setFecha}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Hora (HH:MM)"
                            value={hora}
                            onChangeText={setHora}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Descripción"
                            value={descripcion}
                            onChangeText={setDescripcion}
                            multiline
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ciudad"
                            value={ciudad}
                            onChangeText={setCiudad}
                        />
                        <TouchableOpacity style={styles.boton} onPress={agregarEvento}>
                            <Text style={styles.botonTexto}>Agregar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton} onPress={() => setShowModal(false)}>
                            <Text style={styles.botonTexto}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <FlatList
                data={evento}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.texto}>Título: {item.titulo}</Text>
                        <Text style={styles.texto}>Fecha: {item.fecha}</Text>
                        <Text style={styles.texto}>Hora: {item.hora}</Text>
                        <Text style={styles.texto}>Descripción: {item.descripcion}</Text>
                        <Button color="#042558" title="Ver Clima" onPress={obtenerClima} />
                        {clima && <Text style={styles.texto}>Clima: {clima}</Text>}
                        {climaIcono && ( // Mostrar el icono del clima si está disponible
                            <Image
                                source={{ uri: `http://openweathermap.org/img/w/${climaIcono}.png` }}
                                style={styles.iconoClima}
                            />
                        )}
                        {climaError && <Text style={styles.errorText}>{climaError}</Text>}
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
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
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Roboto',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    modalContainer: {
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
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
    eventoItem: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        marginTop: 20,
    },
    texto: {
        fontSize: 25,
        marginBottom: 10,
        fontFamily: 'Roboto',
    },
    boton: {
        backgroundColor: '#042558',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,

    },
    botonTexto: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'Roboto',
    },
});