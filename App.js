import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import TelaPrincipalScreen from './screens/TelaPrincipalScreen';
import AdicionarRemedioScreen from './screens/AdicionarRemedioScreen';
import BoasVindasScreen from './screens/BoasVindasScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Entrar' }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: 'Cadastrar' }}
        />
        <Stack.Screen
          name="AdicionarRemedio"
          component={AdicionarRemedioScreen}
          options={{ title: 'Novo Remédio' }}
        />

        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipalScreen}
          options={{ title: 'Tela Principal' }}
        />
         <Stack.Screen
          name="BoasVindas"
          component={BoasVindasScreen}
          options={{ title: 'Boas Vindas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
