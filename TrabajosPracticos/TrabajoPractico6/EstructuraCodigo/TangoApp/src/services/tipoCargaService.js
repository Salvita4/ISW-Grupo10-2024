import apiClient from './apiClient';  // Reutilizamos el cliente de Axios configurado

export const getTiposDeCarga = async () => {
  try {
    const response = await apiClient.get('/tipos-carga');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los tipos de carga:', error);
    throw error;
  }
};