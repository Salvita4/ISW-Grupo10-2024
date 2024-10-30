import { StyleSheet } from 'react-native';
import colores from './colores';

const globalStyles = StyleSheet.create({
    container: {
      marginVertical: 10,
      borderRadius: 15,
      padding: 20,
      shadowColor: '#000',
      elevation: 10,
      backgroundColor: colores.containterBackground
    },
    inputText: {
      color: colores.primary,
    }
});

export default globalStyles;