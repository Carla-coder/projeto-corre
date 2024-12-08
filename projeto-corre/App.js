
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screens/Inicio';
import Corre from './screens/Corre';
import Pergunta from './screens/Pergunta';
import Fim from './screens/Fim';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Corre" component={Corre} />
        <Stack.Screen name="Pergunta" component={Pergunta} />
        <Stack.Screen name="Fim" component={Fim} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
