import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

export const Asignaturas = () => {
  const [nuevaAsignatura, setNuevaAsignatura] = useState('');
  const [asignaturas, setAsignaturas] = useState([]);

  const agregarAsignatura = () => {
    if (nuevaAsignatura.trim() !== '') {
      setAsignaturas([...asignaturas, nuevaAsignatura]);
      setNuevaAsignatura('');
    }
  };

  const eliminarAsignatura = (index) => {
    const nuevasAsignaturas = [...asignaturas];
    nuevasAsignaturas.splice(index, 1);
    setAsignaturas(nuevasAsignaturas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ASIGNATURAS</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la asignatura"
          value={nuevaAsignatura}
          onChangeText={setNuevaAsignatura}
        />
        <TouchableOpacity style={styles.boton} onPress={agregarAsignatura}>
          <Text style={styles.botonTexto}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={asignaturas}
        renderItem={({ item, index }) => (
            <View style={styles.asignaturaItem}>
            <View style={styles.textContainer}>
              <Text style={styles.texto}>{item}</Text>
           
            </View>
            <TouchableOpacity onPress={() => eliminarAsignatura(index)}>
              <Icon name="trash-2" size={40} color="#C4141B" /> 
            </TouchableOpacity>
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
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  boton: {
    backgroundColor: '#042558',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  asignaturaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
