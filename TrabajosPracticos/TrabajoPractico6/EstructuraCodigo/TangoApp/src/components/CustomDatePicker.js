import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colores from '../styles/colores';

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const CustomDatePicker = ({ label, date, onDateChange, minDate, maxDate, placeholder, error }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      // Si hay fecha mínima y la fecha seleccionada es menor
      if (minDate && selectedDate < minDate) {
        return; // No permite seleccionar fechas menores a minDate
      }
      // Si hay fecha máxima y la fecha seleccionada es mayor
      if (maxDate && selectedDate > maxDate) {
        return; // No permite seleccionar fechas mayores a maxDate
      }
      onDateChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        value={date ? formatDate(date) : ''}
        onFocus={() => setShowPicker(true)}
      />
      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
          minimumDate={minDate}
          maximumDate={maxDate}
        />
      )}
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
    width: '100%',
    borderColor: colores.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    elevation: 5,
    backgroundColor: colores.background,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomDatePicker;