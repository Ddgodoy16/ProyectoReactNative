import { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, StatusBar, Image, Alert} from 'react-native';
import { Button } from 'react-native';


const image = require("../assets/Image.png");

const USUARIO = "godoy@gmail.com"
const CONTRASENA = "1234"

export function Login({navigation}){
  
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsuarioChange = (text) => {
    setUsuario (text)
    }
    const handlePasswordChange = (text) => {
      setPassword (text)
      }

  const handleSubmit = () => {
    if ( usuario === USUARIO && password === CONTRASENA) {
        Alert.alert(`Inicio de sesion Exitoso`, `Bienvenido` )
      navigation.navigate('MenuTareas');
         
    } else {
      Alert.alert(`Error de inicio de sesion`, `Usuario o Contraseña incorrecto ` )   }
  };
  

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 38 }}>AGENDA</Text>
      </View>
      <Image source={image} style={styles.image} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
        <Text style={{ marginBottom:10,fontFamily:  'Roboto', color: '#fff', fontWeight: '600', fontSize: 18 }}>Ingrese su Correo</Text>
        
         <TextInput
          style={styles.input}         
          autoCapitalize="none"
          autoFocus={true}
          value={usuario}
          onChangeText={handleUsuarioChange}
        />
         <Text style={{ marginBottom:10, fontFamily:  'Roboto', color: '#fff', fontWeight: '600', fontSize: 18 }}>Ingrese su Contraseña</Text>
       
        <TextInput
          label='Usuario'
          style={styles.input}    
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={handlePasswordChange}
        />
        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ fontFamily:  'Roboto', color: '#fff', fontWeight: '600', fontSize: 14, paddingEnd: 85, textDecorationLine: 'underline' }}>Olvido su contraseña?</Text>
          <Text style={{ fontFamily:  'Roboto', color: '#fff', fontWeight: '600', fontSize: 14, textDecorationLine: 'underline' }}>Registrarse</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Iniciar Sesión"
            color="#C4141B"
            onPress={handleSubmit}
          />
        </View>
       
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

  
  const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%', 
        backgroundColor: "#fff",
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 0,
      },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: "#fff",
      alignSelf: "center",
      paddingBottom: 24,
      fontFamily:  'Roboto',
    },
    input: {
      backgroundColor: "#F6F7FB",
      height: 50,
      width: 300,
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
    },
    image: {
      width: 260,
      height: 230,
      position: "absolute",
      top: 55,
      

    },
    whiteSheet: {
      width: '100%',
      height: '60%',
      position: "absolute",
      bottom: 0,
      left: 0,
      backgroundColor: '#042558',
      borderTopLeftRadius: 60,
      marginTop: 600,
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 30,
      marginTop: 220,
    },
    button: {
      backgroundColor: '#f57c00',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 80,
    },
  });
  