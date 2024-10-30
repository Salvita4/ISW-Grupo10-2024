const fetch = require('node-fetch');

const sendPushNotification = async (expoPushToken, message) => {
  try {
    const body = {
      to: expoPushToken,
      sound: 'default',
      title: message.title,
      body: message.body,
      data: message.data || {},
    };

    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Manejar errores HTTP
      const error = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}. Details: ${error}`);
    }

    const result = await response.json();
    console.log('Push notification sent successfully:', result);
  } catch (error) {
    console.error('Error sending push notification:', error.message);
  }
};

module.exports = {
  sendPushNotification,
};