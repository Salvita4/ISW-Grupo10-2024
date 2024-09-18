import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

// Función para solicitar permisos y obtener el token de notificación
export const registerForPushNotificationsAsync = async () => {
  let token;
  
  // Verifica si las notificaciones ya están permitidas
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  // Si las notificaciones no están permitidas, solicita el permiso
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Si el permiso no se concede, devuelve null
  if (finalStatus !== 'granted') {
    alert('No se han permitido las notificaciones push.');
    return null;
  }

  // Obtén el token del dispositivo
  token = (await Notifications.getExpoPushTokenAsync()).data;

  // Si es un dispositivo Android, configurar el canal de notificación
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
};