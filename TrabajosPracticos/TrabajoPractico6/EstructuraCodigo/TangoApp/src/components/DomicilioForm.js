import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';
import apiClient from '../services/apiClient';
import colores from '../styles/colores';
import globalStyles from '../styles/globalStyles';

const DomicilioForm = ({ domicilio, setDomicilio, label, provinces, error }) => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    if (domicilio.provincia !== selectedProvince) {
      setSelectedProvince(domicilio.provincia);
      setSelectedLocality(domicilio.localidad);
    }
  }, [domicilio.provincia]);

  const handleProvinceChange = (province) => {
    setSelectedProvince(province);
    setDomicilio((prev) => ({
      ...prev,
      provincia: province,
      localidad: '', // Reset locality when province changes
    }));
    // Fetch localities based on the selected province
    apiClient.get(`/localidades?provincia=${province}`).then((response) => {
      setLocalities(response.data);
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
        options={provinces}
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#03045E',
  },
});

export default DomicilioForm;