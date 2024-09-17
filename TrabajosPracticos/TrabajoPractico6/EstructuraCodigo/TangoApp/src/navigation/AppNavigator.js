import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RegistrarPedidoEnvioScreen from '../screens/RegistrarPedidoEnvioScreen';
import ConsultarPedidoEnvioScreen from '../screens/ConsultarPedidoEnvioScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="RegistrarPedidoEnvioScreen" 
        component={RegistrarPedidoEnvioScreen} 
        options={{ title: 'Registrar Pedido de Envío' }}
      />
      <Stack.Screen 
        name="ConsultarPedidoEnvioScreen" 
        component={ConsultarPedidoEnvioScreen} 
        options={{ title: 'Consultar Pedido de Envío' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;