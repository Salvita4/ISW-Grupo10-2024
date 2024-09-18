import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colores from '../styles/colores';
import globalStyles from '../styles/globalStyles';

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
          selectionColor={colores.primary}
          itemStyle={globalStyles.inputText}
        >
          <Picker.Item label={placeholder} value=""/>
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
    color: colores.primary,
  },
  picker: {
    height: 40,
    width: '100%',
    borderColor: colores.primary,
    elevation: 5,
    borderRadius: 20,
    paddingHorizontal: 10,
    display: 'grid',
    justifyContent: 'center',
    backgroundColor: colores.background
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