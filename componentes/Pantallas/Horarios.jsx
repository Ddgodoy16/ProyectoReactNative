import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const Horarios = () => {
    const [selectedDay, setSelectedDay] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFinal, setHoraFinal] = useState('');
    const [asignatura, setAsignatura] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [horarioIngresado, setHorarioIngresado] = useState(null); // Nuevo estado para almacenar el horario ingresado
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

    const agregarHorario = () => {
         const nuevoHorario = {
            dia: selectedDay,
            inicio: horaInicio,
            fin: horaFinal,
            asignatura: asignatura,
        };
        setHorarioIngresado(nuevoHorario); // Guardar el horario ingresado
        // Luego puedes cerrar el modal
        setShowModal(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Horarios</Text>
            <Button title="Agregar Horario" onPress={() => setShowModal(true)} />
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
                        <Button title="Agregar" onPress={agregarHorario} />
                    </View>
                </View>
            )}
            {/* Agregar View para mostrar el horario ingresado */}
            {horarioIngresado && (
                <View style={styles.horarioContainer}>
                    <Text style={styles.texto}>
                        {horarioIngresado.dia},  
                    </Text>
                    <Text style={styles.texto}>
                    {horarioIngresado.inicio}, {horarioIngresado.fin},  </Text>
                    <Text style={styles.texto}>
                    {horarioIngresado.asignatura} </Text>
               
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
    horarioContainer: {
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
