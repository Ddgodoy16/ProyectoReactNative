import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const usuario = "Elvin Godoy"
export const Inicio = () => {
  
  const frasesMotivadoras = [
    "¡Qué bueno verte de nuevo!",
    "¡Espero que tengas un gran día!",
    "¡Vamos a hacer grandes cosas hoy!",
    "¡El éxito te está esperando!",
    "¡Haz que hoy cuente!",
    "¡Eres increíble!",
    "¡Tú puedes hacerlo!",
    "¡Sigue adelante con confianza!",
  ];

   const indiceAleatorio = Math.floor(Math.random() * frasesMotivadoras.length);
  const fraseMotivadora = frasesMotivadoras[indiceAleatorio];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.usuario}>{usuario}</Text>
      <Text style={styles.mensaje}>{fraseMotivadora}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily:  'Roboto',
    marginBottom: 0,
  },
  usuario: {
    fontSize: 30,
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  mensaje: {
    fontSize: 25,
    
    fontFamily: 'Roboto',
  },
});