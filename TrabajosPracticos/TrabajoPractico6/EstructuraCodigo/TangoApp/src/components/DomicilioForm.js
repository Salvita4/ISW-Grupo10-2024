import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';
import apiClient from '../services/apiClient';
import colores from '../styles/colores';
import globalStyles from '../styles/globalStyles';

const DomicilioForm = ({ domicilio, setDomicilio, label, provincias, error }) => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    if (domicilio.provincia !== selectedProvince) {
      setSelectedProvince(domicilio.id_provincia);
    }
    if (domicilio.id_localidad !== selectedLocality) {
      setSelectedLocality(domicilio.id_localidad);
    }
  }, [domicilio.provincia, domicilio.id_localidad]);  

  const handleProvinceChange = (provincia) => {
    setSelectedProvince(provincia);
    setDomicilio((prev) => ({
      ...prev,
      id_provincia: provincia,
      id_localidad: '', // Reset localidad cuando cambia la provincia
    }));
  
    // Fetch localidades basado en la provincia seleccionada correctamente
    apiClient.get('/soporte/Localidades').then((response) => {
      setLocalities(response.data.filter((e) => e.id_provincia === provincia));
    });
  };  

  return (
    <View>
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
        error={error?.id_provincia}
      />
      <CustomSelect
        selectedValue={selectedLocality}
        onValueChange={(locality) => setDomicilio((prev) => ({ ...prev, id_localidad: locality }))}
        options={localities}
        label="Localidad"
        placeholder="Seleccione una localidad"
        error={error?.id_localidad}
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#03045E',
  },
});

export default DomicilioForm;