import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colores from '../styles/colores';

const CustomImagePicker = ({ images, setImages }) => {
  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.assets.map(asset => asset.uri)); 
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImages}>
        <Text style={styles.buttonText}>Seleccionar Imágenes</Text>
      </TouchableOpacity>
      <ScrollView horizontal style={styles.imageContainer}>
        {images.map((image, index) => (
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
    elevation: 10
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