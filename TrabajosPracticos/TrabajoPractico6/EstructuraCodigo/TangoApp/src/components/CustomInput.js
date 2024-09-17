import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

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
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
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