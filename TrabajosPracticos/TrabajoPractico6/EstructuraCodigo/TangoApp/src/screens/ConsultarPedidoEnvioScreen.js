import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import apiClient from '../services/apiClient';

const ConsultarPedidosEnviosScreen = () => {
  const [pedidosEnvios, setPedidosEnvios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los pedidosEnvios
  useEffect(() => {
    const fetchPedidosEnvios = async () => {
      try {
        const response = await apiClient.get('/pedidos');
        console.log(response)
        setPedidosEnvios(response.data); // Asigna los datos obtenidos al estado
      } catch (error) {
        setError('Error al cargar los pedidos');
        console.error(error);
      } finally {
        setLoading(false); // Detener el estado de carga una vez que los datos se obtienen
      }
    };

    fetchPedidosEnvios(); // Llamar a la función para obtener los pedidos al montar el componente
  }, []);

  // Renderizar cada item de la lista
  const renderPedidoItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>Pedido ID: {item._id}</Text>
      <Text>Tipo de carga: {item.tipoCarga}</Text>
      <Text>Retiro: {item.domicilioRetiro.calle}, {item.domicilioRetiro.numero}, {item.domicilioRetiro.localidad}, {item.domicilioRetiro.provincia}</Text>
      <Text>Entrega: {item.domicilioEntrega.calle}, {item.domicilioRetiro.numero}, {item.domicilioEntrega.localidad}, {item.domicilioRetiro.provincia}</Text>
      <Text>Fecha de Retiro: {new Date(item.fechaRetiro).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}</Text>
      <Text>Fecha de Entrega: {new Date(item.fechaEntrega).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}</Text>
    </View>
  );

  // Pantalla de carga
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando pedidos...</Text>
      </View>
    );
  }

  // Pantalla de error
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  // Pantalla de lista
  return (
    <View style={styles.container}>
      <FlatList
        data={pedidosEnvios}
        renderItem={renderPedidoItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConsultarPedidosEnviosScreen;