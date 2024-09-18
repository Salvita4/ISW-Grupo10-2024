import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colores from '../styles/colores';

const CustomButton = ({ title, onPress, color = '#0077B6' }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5
  },
  buttonText: {
    color: colores.containterBackground,
    fontSize: 16,
  },
});

export default CustomButton;