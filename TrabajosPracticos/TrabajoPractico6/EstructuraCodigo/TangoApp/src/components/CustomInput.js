import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colores from '../styles/colores';

const CustomInput = ({ label, value, onChangeText, placeholder, error, secureTextEntry, onErrorClear, keyboardType = 'text'}) => {
  const [charLimitWarning, setCharLimitWarning] = useState(false); // Estado para manejar la advertencia

  const handleChangeText = (text) => {
    if (onErrorClear) {
      onErrorClear(); // Limpia el error si existe
    }
    
    // Verifica si se alcanzó el límite de caracteres
    if (text.length >= 150) {
      setCharLimitWarning(true); // Muestra la advertencia
    } else {
      setCharLimitWarning(false); // Oculta la advertencia
    }

    onChangeText(text); // Actualiza el valor del texto
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={'black'}
        maxLength={150}
      />
      {/* Muestra el mensaje de advertencia si se alcanza el límite */}
      {charLimitWarning && <Text style={styles.errorText}>No se pueden ingresar más de 150 caracteres</Text>}
      {/* Muestra el mensaje de error si existe */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colores.primary,
  },
  input: {
    height: 40,
    borderColor: colores.primary,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: colores.background,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomInput;