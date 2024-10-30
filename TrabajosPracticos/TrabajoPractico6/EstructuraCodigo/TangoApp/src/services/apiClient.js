import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:8300/api',
  timeout: 10000, // Tiempo máximo de espera para una petición (en milisegundos)
  headers: {
    'Content-Type': 'application/json',
    // Se puede agregar encabezados adicionales aquí, por ejemplo, tokens de autenticación.
  },
});

// Interceptores para manejar errores y agregar lógica adicional a cada solicitud/respuesta
apiClient.interceptors.request.use(
  config => {
    // Se puede agregar lógica aquí antes de que se envíe la solicitud, como agregar un token
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango de 2xx
      console.error('Error en la respuesta del servidor:', error.response.data);
    } else if (error.request) {
      // La solicitud fue enviada pero no hubo respuesta
      console.error('No hubo respuesta del servidor:', error.request);
    } else {
      // Algo sucedió al configurar la solicitud
      console.error('Error al configurar la solicitud:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;