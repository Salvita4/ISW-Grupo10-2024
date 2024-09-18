import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';
import apiClient from '../services/apiClient';

const DomicilioForm = ({ domicilio, setDomicilio, label, provincias, error }) => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    if (domicilio.provincia !== selectedProvince) {
      setSelectedProvince(domicilio.provincia);
    }
    if (domicilio.localidad !== selectedLocality) {
      setSelectedLocality(domicilio.localidad);
    }
  }, [domicilio.provincia, domicilio.localidad]);  

  const handleProvinceChange = (province) => {
    setSelectedProvince(province);
    setDomicilio((prev) => ({
      ...prev,
      provincia: province,
      localidad: '', // Reset localidad cuando cambia la provincia
    }));
  
    // Fetch localities basado en la provincia seleccionada correctamente
    apiClient.get('/soporte/Localidades').then((response) => {
      setLocalities(response.data.filter((e) => e.id_provincia === province));
    });
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <CustomInput
        label="Calle"
        placeholder="Calle"
        value={domicilio.calle}
        onChangeText={(text) => setDomicilio((prev) => ({ ...prev, calle: text }))}
        error={error?.calle}
      />
      <CustomInput
        label="Número"
        placeholder="Número"
        value={domicilio.numero}
        onChangeText={(text) => setDomicilio((prev) => ({ ...prev, numero: text }))}
        keyboardType="numeric"
        error={error?.numero}
      />
      <CustomSelect
        selectedValue={selectedProvince}
        onValueChange={handleProvinceChange}
        options={provincias}
        label="Provincia"
        placeholder="Seleccione una provincia"
        error={error?.provincia}
      />
      <CustomSelect
        selectedValue={selectedLocality}
        onValueChange={(locality) => setDomicilio((prev) => ({ ...prev, localidad: locality }))}
        options={localities}
        label="Localidad"
        placeholder="Seleccione una localidad"
        error={error?.localidad}
      />
      <CustomInput
        label="Referencia (opcional)"
        placeholder="Referencia (opcional)"
        value={domicilio.referencia}
        onChangeText={(text) => setDomicilio((prev) => ({ ...prev, referencia: text }))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default DomicilioForm;