
import { View, Text, TextInput, SafeAreaView, StyleSheet, StatusBar, Image} from 'react-native';
import { Button } from 'react-native';


const image = require("../assets/Image.png");


export const Login = () => {
    return (
      <View style={styles.container}>
        <View >
            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 38,  }}>AGENDA</Text>
        
        </View>
           <Image source={image} style={styles.image} />
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}>Log In</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su Correo"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su Contrasena"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', alignSelf: 'center',  }}>
              <Text style={{ color: '#fff', fontWeight: '600', fontSize: 14, paddingEnd: 85, textDecorationLine: 'underline'}}> Olvido Su contrasena?</Text>
              <Text style={{ color: '#fff', fontWeight: '600', fontSize: 14, textDecorationLine: 'underline' }}> Registarse</Text>
         
          </View>
          <View style={{ marginTop: 20 }}>
  <Button
    title="Iniciar Sesion"
    color="#C4141B"
  />
  
</View>   
<View style={{marginTop: 20}}>
<Button
    title="Iniciar sesión con Google"
    color="#1e90ff"
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
    },
    input: {
      backgroundColor: "#F6F7FB",
      height: 58,
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
  