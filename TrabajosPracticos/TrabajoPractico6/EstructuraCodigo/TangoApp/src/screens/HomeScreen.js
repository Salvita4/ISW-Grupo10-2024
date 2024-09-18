import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // O el conjunto de iconos que prefieras
import colores from '../styles/colores';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/splash.png')}  // Asegúrate de que la ruta sea correcta
        style={styles.logo}
      />

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
    backgroundColor: colores.background, // Ajusta el color de fondo según tu diseño
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0077B6', // Color de fondo del botón
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
  logo: {
    width: 450,
    height: 450,
    //marginBottom: 40,
  },
});

export default HomeScreen;
