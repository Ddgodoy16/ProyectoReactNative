import 'react-native-gesture-handler';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavegacionGabetero, AuthStack } from './componentes/Drawer';



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    
     <NavigationContainer>
      {isLoggedIn ? <NavegacionGabetero /> : <AuthStack onLoginSuccess={handleLoginSuccess} />}
    </NavigationContainer>

   
    
    
  );
}