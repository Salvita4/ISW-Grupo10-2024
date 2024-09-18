import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colores from '../styles/colores';

const MAX_IMAGES = 3;
const MAX_TOTAL_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_TOTAL_SIZE_MB * 1024 * 1024; // Convertir MB a bytes

const CustomImagePicker = ({ imagenes, setImagenes }) => {
  const [selectedImages, setSelectedImages] = useState(imagenes);

  const convertToBase64 = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const selected = result.assets;

      // Verificar si se excede el número máximo de imágenes
      if (selected.length + selectedImages.length > MAX_IMAGES) {
        Alert.alert('Error', `Puedes seleccionar un máximo de ${MAX_IMAGES} imágenes.`);
        return;
      }

      // Verificar el tamaño total y el tipo de archivo de las imágenes
      let totalSize = 0;
      const validImages = [];

      for (const image of selected) {
        // Obtener el tamaño del archivo en bytes
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const size = blob.size;

        // Verificar el tipo de archivo
        const mimeType = blob.type;
        if (mimeType !== 'image/jpeg' && mimeType !== 'image/png') {
          Alert.alert('Error', 'Solo se pueden cargar imágenes en formato JPG o PNG.');
          continue; // Ignorar la imagen si no es jpg o png
        }

        totalSize += size;

        if (totalSize <= MAX_SIZE_BYTES) {
          // Convertir la imagen a base64
          const base64Image = await convertToBase64(image.uri);
          validImages.push(base64Image);
        } else {
          Alert.alert('Error', `El tamaño total de las imágenes no debe superar los ${MAX_TOTAL_SIZE_MB} MB.`);
          break;
        }
      }

      // Actualizar el estado con las imágenes válidas en base64
      setSelectedImages([...selectedImages, ...validImages]);
      setImagenes([...selectedImages, ...validImages]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImages}>
        <Text style={styles.buttonText}>Seleccionar Imágenes</Text>
      </TouchableOpacity>
      <ScrollView horizontal style={styles.imageContainer}>
        {selectedImages.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    elevation: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: colores.secondary,
  },
  buttonText: {
    color: colores.containterBackground,
    fontSize: 16,
  },
  imageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default CustomImagePicker;