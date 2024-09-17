import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8300/api',
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
  response => {
    return response;
  },
  error => {
    // Manejo global de errores
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default apiClient;