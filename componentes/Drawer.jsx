import React from 'react'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from './Pantallas/Inicio';
import { Asignaturas } from './Pantallas/Asignaturas';
import { Tareas } from './Pantallas/Tareas';
import { Horarios } from './Pantallas/Horarios';
import { Calendario } from './Pantallas/Calendario';
import { Eventos } from './Pantallas/Eventos';
import { Login } from './Login';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login"> 
      <Stack.Screen name=" " component={Login} />
      <Stack.Screen name="MenuTareas" component={NavegacionGabetero} /> 
      </Stack.Navigator>
  );
}

export function NavegacionGabetero() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Asignaturas" component={Asignaturas} />
      <Drawer.Screen name="Horarios" component={Horarios} />
      <Drawer.Screen name="Tareas" component={Tareas} />
      <Drawer.Screen name="Calendario" component={Calendario} />
      <Drawer.Screen name="Eventos" component={Eventos} />
    </Drawer.Navigator>
  );
}
