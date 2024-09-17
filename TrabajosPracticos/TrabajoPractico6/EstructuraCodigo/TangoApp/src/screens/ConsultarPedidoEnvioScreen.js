import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import apiClient from '../services/apiClient'; // Importar cliente Axios configurado

const ConsultarPedidoScreen = () => {
  const [pedidoId, setPedidoId] = useState(''); // Identificador del pedido
  const [pedido, setPedido] = useState(null); // Estado para almacenar la respuesta del pedido
  const [loading, setLoading] = useState(false); // Indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para manejar la consulta de un pedido
  const consultarPedido = async () => {
    if (!pedidoId) {
      alert('Por favor, ingresa el ID del pedido');
      return;
    }

    try {
      setLoading(true); // Mostrar spinner mientras carga
      const response = await apiClient.get(`/pedidos/${pedidoId}`); // Petición GET
      setPedido(response.data); // Guardar los datos del pedido en el estado
      setError(null); // Limpiar cualquier error previo
    } catch (err) {
      setError('No se pudo consultar el pedido. Por favor, intenta nuevamente.');
      setPedido(null); // Limpiar los datos del pedido si hay un error
    } finally {
      setLoading(false); // Ocultar spinner al finalizar
    }
  };

  return (
    <View>
      <TextInput
        placeholder="ID del Pedido"
        value={pedidoId}
        onChangeText={setPedidoId}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Consultar Pedido" onPress={consultarPedido} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}

      {pedido && (
        <View style={{ marginTop: 20 }}>
          <Text>ID del Pedido: {pedido.id}</Text>
          <Text>Tipo de Carga: {pedido.tipoCarga}</Text>
          <Text>Domicilio de Retiro: {pedido.domicilioRetiro}</Text>
          <Text>Fecha de Retiro: {new Date(pedido.fechaRetiro).toLocaleDateString()}</Text>
          <Text>Domicilio de Entrega: {pedido.domicilioEntrega}</Text>
          <Text>Fecha de Entrega: {new Date(pedido.fechaEntrega).toLocaleDateString()}</Text>
          {pedido.image && (
            <Image source={{ uri: pedido.image }} style={{ width: 200, height: 200 }} />
          )}
        </View>
      )}
    </View>
  );
};

export default ConsultarPedidoScreen;