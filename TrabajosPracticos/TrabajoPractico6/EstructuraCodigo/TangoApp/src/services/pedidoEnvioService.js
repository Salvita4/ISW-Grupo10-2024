import * as Notifications from 'expo-notifications';
import apiClient from './apiClient';
import axios from 'axios';

export const sendTestNotification = async () => {
  const message = {
    to: 'ExponentPushToken[Gv5SSdG4yg5lyr4Aidu6i8]', // Usa un token válido
    sound: 'default',
    title: 'Test Notification',
    body: 'This is a test notification',
  };
  console.log(message)
  try {
    await axios.post('https://exp.host/--/api/v2/push/send', message);
    console.log('Test notification sent successfully');
  } catch (error) {
    console.error('Error sending test notification', error);
  }
};

export const getPedidosEnvio = async () => {
  try {
    const response = await apiClient.get('/pedidos');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los pedidos de envio:', error);
    throw error;
  }
};

// Función para obtener el expoPushToken
export const getExpoPushToken = async () => {
  let token;
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('No se han concedido permisos para las notificaciones push');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
  } catch (error) {
    console.error('Error al obtener el token de notificación:', error);
  }

  return token;
};

// Función para registrar el pedido
export const registrarPedido = async (pedido) => {
  try {
    // Obtener el token de notificación
    const expoPushToken = await getExpoPushToken();

    // Agregar el token de notificación al pedido
    const pedidoConToken = { ...pedido, expoPushToken };

    const response = await apiClient.post('/pedidos', pedidoConToken);
    return response.data;
  } catch (error) {
    console.error('Error al registrar pedido:', error);
    throw error;
  }
};
