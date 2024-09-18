import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import apiClient from '../services/apiClient';
import CustomSelect from '../components/CustomSelect';
import CustomButton from '../components/CustomButton';
import CustomImagePicker from '../components/CustomImagePicker';
import CustomDatePicker from '../components/CustomDatePicker';
import DomicilioForm from '../components/DomicilioForm';
import globalStyles from '../styles/globalStyles';
import colores from '../styles/colores';

const RegistrarPedidoEnvioScreen = () => {
  const [tipoCarga, setTipoCarga] = useState("");
  const [domicilioRetiro, setDomicilioRetiro] = useState({
    calle: '',
    numero: '',
    id_provincia: '',
    id_localidad: '',
    referencia: ''
  });
  const [domicilioEntrega, setDomicilioEntrega] = useState({
    calle: '',
    numero: '',
    id_provincia: '',
    id_localidad: '',
    referencia: ''
  });
  const [fechaRetiro, setFechaRetiro] = useState(new Date());
  const [fechaEntrega, setFechaEntrega] = useState(new Date());
  const [imagenes, setImagenes] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [errors, setErrors] = useState({});
  const [tipoCargaOptions, setTipoCargaOptions] = useState([]);

  useEffect(() => {
    apiClient.get('/soporte/TiposCarga').then((response) => {
      setTipoCargaOptions(response.data);
    });

    // Fetch provincias once when the component mounts
    apiClient.get('/soporte/Provincias').then((response) => {
      setProvincias(response.data);
    });
  }, []);

  const validateForm = () => {
    let valid = true;
    let errors = {};
  
    if (!tipoCarga) {
      errors.tipoCarga = "Selecciona un tipo de carga";
      valid = false;
    }
  
    // Validar domicilio de retiro
    if (!domicilioRetiro.calle) {
      errors.domicilioRetiroCalle = "La calle es requerida";
      valid = false;
    }
    if (!domicilioRetiro.numero) {
      errors.domicilioRetiroNumero = "El número es requerido";
      valid = false;
    }
    if (!domicilioRetiro.id_localidad) {
      errors.domicilioRetiroLocalidad = "La localidad es requerida";
      valid = false;
    }
    if (!domicilioRetiro.id_provincia) {
      errors.domicilioRetiroProvincia = "La provincia es requerida";
      valid = false;
    }
  
    // Validar domicilio de entrega
    if (!domicilioEntrega.calle) {
      errors.domicilioEntregaCalle = "La calle es requerida";
      valid = false;
    }
    if (!domicilioEntrega.numero) {
      errors.domicilioEntregaNumero = "El número es requerido";
      valid = false;
    }
    if (!domicilioEntrega.id_localidad) {
      errors.domicilioEntregaLocalidad = "La localidad es requerida";
      valid = false;
    }
    if (!domicilioEntrega.id_provincia) {
      errors.domicilioEntregaProvincia = "La provincia es requerida";
      valid = false;
    }
  
    setErrors(errors);
    return valid;
  };  

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        console.log({
          tipoCarga,
          domicilioRetiro,
          fechaRetiro,
          domicilioEntrega,
          fechaEntrega,
          imagenes,
        });
        const response = await apiClient.post('/pedidos', {
          tipoCarga,
          domicilioRetiro,
          fechaRetiro,
          domicilioEntrega,
          fechaEntrega,
          imagenes,
        });
      
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={globalStyles.container}>
        <CustomSelect
          selectedValue={tipoCarga}
          onValueChange={(itemValue) => setTipoCarga(itemValue)}
          onErrorClear={() => setErrors((prevErrors) => ({ ...prevErrors, tipoCarga: undefined }))}
          options={tipoCargaOptions}
          label="Tipo de carga"
          placeholder="Seleccione un tipo de carga"
          error={errors.tipoCarga}
        />
      </View>

      <View style={globalStyles.container}>
      <DomicilioForm
        domicilio={domicilioRetiro}
        setDomicilio={setDomicilioRetiro}
        label="Informacion de Retiro"
        provincias={provincias}
        error={{
          calle: errors.domicilioRetiroCalle,
          numero: errors.domicilioRetiroNumero,
          localidad: errors.domicilioRetiroLocalidad,
          provincia: errors.domicilioRetiroProvincia,
        }}
      />

      <CustomDatePicker
        date={fechaRetiro}
        onDateChange={setFechaRetiro}
        label="Fecha de Retiro"
        error={errors.fechaRetiro}
      />
      </View>
      
      <View style={globalStyles.container}>
        <DomicilioForm
          domicilio={domicilioEntrega}
          setDomicilio={setDomicilioEntrega}
          label="Informacion de Entrega"
          provincias={provincias}
          error={{
            calle: errors.domicilioEntregaCalle,
            numero: errors.domicilioEntregaNumero,
            localidad: errors.domicilioEntregaLocalidad,
            provincia: errors.domicilioEntregaProvincia,
          }}
        />

        <CustomDatePicker
          date={fechaEntrega}
          onDateChange={setFechaEntrega}
          label="Fecha de Entrega"
          error={errors.fechaEntrega}
        />
      </View>

      <CustomImagePicker imagenes={imagenes} setImagenes={setImagenes} />

      <CustomButton title="Publicar Pedido" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colores.background,
  },
});

export default RegistrarPedidoEnvioScreen;