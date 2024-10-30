import { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

export default usePushNotifications = () => {
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const notificationListener = useRef();
  // const responseListener = useRef();

  // useEffect(() => {
  //   // Solicitar permisos para notificaciones
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   // Escuchar cuando llega una notificación
  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     console.log('Notificación recibida: ', notification);
  //   });

  //   // Escuchar cuando el usuario interactúa con una notificación
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log('Notificación interactuada: ', response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  // return expoPushToken;
}

const registerForPushNotificationsAsync = async () => {
  let token;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }

  // Aquí debes incluir el projectId
  token = (await Notifications.getExpoPushTokenAsync({
    projectId: '58bea572-f1f5-4ad4-b795-d80c03933353',
  })).data;

  console.log('Expo Push Token:', token);
  return token;
};