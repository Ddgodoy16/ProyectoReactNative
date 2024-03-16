import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const Horarios = () => {
    const [selectedDay, setSelectedDay] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFinal, setHoraFinal] = useState('');
    const [asignatura, setAsignatura] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [horarioIngresado, setHorarioIngresado] = useState([]);
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    const agregarHorario = () => {
        const nuevoHorario = {
            dia: selectedDay,
            inicio: horaInicio,
            fin: horaFinal,
            asignatura: asignatura,
        };
        setHorarioIngresado([...horarioIngresado, nuevoHorario]);
        setShowModal(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HORARIOS</Text>
            <Button color="#042558" title="Agregar Horario" onPress={() => setShowModal(true)} />
            {showModal && (
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Picker
                            selectedValue={selectedDay}
                            onValueChange={(itemValue) => setSelectedDay(itemValue)}
                        >
                            <Picker.Item label="Selecciona un día" value="" />
                            {daysOfWeek.map((day, index) => (
                                <Picker.Item label={day} value={day} key={index} />
                            ))}
                        </Picker>
                        <TextInput
                            style={styles.input}
                            placeholder="Hora de inicio"
                            onChangeText={setHoraInicio}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Hora final"
                            onChangeText={setHoraFinal}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Asignatura"
                            onChangeText={setAsignatura}
                        />
                        <Button color="#042558"  title="Agregar" onPress={agregarHorario} />
                    </View>
                </View>
            )}
            <FlatList
                data={horarioIngresado}
                renderItem={({ item }) => (
                    <View style={styles.horarioItem}>
                        <Text style={styles.texto}>{item.dia}</Text>
                        <Text style={styles.texto}>{item.inicio}-{item.fin}</Text>
                        <Text style={styles.texto}>{item.asignatura}</Text>
                 
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
    horarioItem: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});
