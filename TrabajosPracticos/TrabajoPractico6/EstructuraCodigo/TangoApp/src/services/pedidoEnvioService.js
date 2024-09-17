import apiClient from './apiClient';

export const getPedidosEnvio = async () => {
  try {
    const response = await apiClient.get('/pedidos');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los pedidos de envio:', error);
    throw error;
  }
};

export const registrarPedido = async (pedido) => {
  try {
    const response = await apiClient.post('/pedidos', pedido);
    return response.data;
  } catch (error) {
    console.error('Error al registrar pedido:', error);
    throw error;
  }
};