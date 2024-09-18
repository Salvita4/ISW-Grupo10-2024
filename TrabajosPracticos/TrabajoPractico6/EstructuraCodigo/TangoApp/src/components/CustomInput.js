import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colores from '../styles/colores';

const CustomInput = ({ label, value, onChangeText, placeholder, error, secureTextEntry, onErrorClear, keyboardType = 'text'}) => {
  const handleChangeText = (text) => {
    if (onErrorClear) {
      onErrorClear(); // Limpia el error
    }
    onChangeText(text); // Actualiza el texto
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
      />
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
    // borderWidth: 1,
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