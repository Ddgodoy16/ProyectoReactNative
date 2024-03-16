import React, { useState } from 'react';
import {Modal, View, TouchableOpacity, Text, Button, StyleSheet, TextInput, Image, FlatList, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const Tareas = () => {
  const [showModal, setShowModal] = useState(false);
  const [descripcionTarea, setDescripcionTarea] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [tareas, setTareas] = useState([]);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [imagenSeleccionadaParaModal, setImagenSeleccionadaParaModal] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const uri = result.uri || (result.assets && result.assets.length > 0 && result.assets[0].uri);
      setImagenSeleccionada(uri);
    } else {
      Alert.alert('Error', 'No seleccionó una imagen.');
    }
  };

  const agregarTarea = () => {
    const nuevaTarea = {
      descripcion: descripcionTarea,
      fechaLimite: fechaEntrega,
      imagen: imagenSeleccionada,
    };
    setTareas([...tareas, nuevaTarea]);
    setShowModal(false);
    setDescripcionTarea('');
    setFechaEntrega('');
    setImagenSeleccionada(null);
  };

  const handleImagePress = (imagen) => {
    setImagenSeleccionadaParaModal(imagen);
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TAREAS</Text>
      <TouchableOpacity style={styles.boton} onPress={() => setShowModal(true)}>
                <Text style={styles.botonTexto}>Agregar Tarea</Text>
            </TouchableOpacity>
        {showModal && (
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Descripción de la tarea"
              onChangeText={setDescripcionTarea}
            />
            <TextInput style={styles.input} placeholder="Fecha de entrega" onChangeText={setFechaEntrega} />
            <TouchableOpacity style={styles.boton} onPress={pickImageAsync}>
              <Text style={styles.botonTexto}>Agregar Imagen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={agregarTarea}>
              <Text style={styles.botonTexto}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => setShowModal(false)}>
              <Text style={styles.botonTexto}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <FlatList
        data={tareas}
        renderItem={({ item }) => (
          <View style={styles.tareaContainer}>
            <Text style={styles.texto}>Descripción: {item.descripcion}</Text>
            <Text style={styles.texto}>Fecha de Entrega: {item.fechaLimite}</Text>
            {item.imagen && (
              <TouchableOpacity onPress={() => handleImagePress(item.imagen)}>
                <Image source={{ uri: item.imagen }} style={{ width: 200, height: 200 }} />
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Image source={{ uri: imagenSeleccionadaParaModal }} style={styles.modalImage} />
          <Button title="Cerrar" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  modalContainer: {
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  boton: {
    backgroundColor: '#042558',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  botonTexto: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});
