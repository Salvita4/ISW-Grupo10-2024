import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CustomSelect = ({ label, selectedValue, onValueChange, options, placeholder, error, onErrorClear }) => {
  const handleValueChange = (itemValue) => {
    if (onErrorClear) {
      onErrorClear(); // Limpia el error
    }
    onValueChange(itemValue); // Actualiza el valor seleccionado
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.picker, error && styles.pickerError]}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={handleValueChange}
          style={[error && styles.pickerError]}
        >
          <Picker.Item label={placeholder} value="" />
          {options.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>
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
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  pickerError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomSelect;