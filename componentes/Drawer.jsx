

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Inicio } from './Pantallas/Inicio';
import { Asignaturas } from './Pantallas/Asignaturas';
import { Tareas } from './Pantallas/Tareas';
import { Horarios } from './Pantallas/Horarios';
import { Calendario } from './Pantallas/Calendario';
import { Eventos } from './Pantallas/Eventos';

const Drawer = createDrawerNavigator();

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