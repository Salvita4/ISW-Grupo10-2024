import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // O el conjunto de iconos que prefieras

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegistrarPedidoEnvioScreen')}
      >
        <Icon name="add-circle" size={30} color="#fff" />
        <Text style={styles.buttonText}>Registrar Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ConsultarPedidoEnvioScreen')}
      >
        <Icon name="search" size={30} color="#fff" />
        <Text style={styles.buttonText}>Consultar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Ajusta el color de fondo según tu diseño
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff', // Color de fondo del botón
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: '80%', // Ajusta el ancho del botón según tu diseño
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10, // Espacio entre el icono y el texto
  },
});

export default HomeScreen;
