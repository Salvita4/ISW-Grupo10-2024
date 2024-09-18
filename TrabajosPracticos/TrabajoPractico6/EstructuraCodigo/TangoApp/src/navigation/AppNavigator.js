import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import colores from '../styles/colores';
import HomeScreen from '../screens/HomeScreen';
import RegistrarPedidoEnvioScreen from '../screens/RegistrarPedidoEnvioScreen';
import ConsultarPedidoEnvioScreen from '../screens/ConsultarPedidoEnvioScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen styles={styles.stack}
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen styles={styles.stack}
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

const styles = StyleSheet.create({
  stack:{
    backgroundColor: colores.primary,
    color: colores.primary,
  }
})

export default AppNavigator;