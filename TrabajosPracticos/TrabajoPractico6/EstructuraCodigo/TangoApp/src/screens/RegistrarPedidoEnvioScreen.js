import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import apiClient from '../services/apiClient';
import CustomSelect from '../components/CustomSelect';
import CustomButton from '../components/CustomButton';
import CustomImagePicker from '../components/CustomImagePicker';
import CustomDatePicker from '../components/CustomDatePicker';
import DomicilioForm from '../components/DomicilioForm';
import globalStyles from '../styles/globalStyles';
import colores from '../styles/colores';
// import usePushNotifications from '../hooks/usePushNotifications';
// import Toast from 'react-native-toast-message';

const RegistrarPedidoEnvioScreen = () => {
  // const expoPushToken = usePushNotifications();
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
  const [fechaEntrega, setFechaEntrega] = useState(() => {
    const initialDate = new Date();
    initialDate.setDate(initialDate.getDate() + 1); // Establece la fecha de entrega como un día después
    return initialDate;
  });
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
  
    // Validar tipo de carga
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
      errors.domicilioRetiroNumero = "El número es requerido, ingrese un 0 si no tiene";
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
    if (domicilioRetiro.referencia.length > 150) {
      errors.domicilioRetiroReferencia = "La referencia no puede exceder los 150 caracteres";
      valid = false;
    }
  
    // Validar domicilio de entrega
    if (!domicilioEntrega.calle) {
      errors.domicilioEntregaCalle = "La calle es requerida";
      valid = false;
    }
    if (!domicilioEntrega.numero) {
      errors.domicilioEntregaNumero = "El número es requerido, ingrese un 0 si no tiene";
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
    if (domicilioEntrega.referencia.length > 150) {
      errors.domicilioEntregaReferencia = "La referencia no puede exceder los 150 caracteres";
      valid = false;
    }
  
    // Validar fechas
    if (fechaRetiro >= fechaEntrega) {
      errors.fechaRetiro = "La fecha de retiro debe ser menor a la fecha de entrega";
      valid = false;
    }
    if ((fechaEntrega - fechaRetiro) < 24 * 60 * 60 * 1000) { // Menos de 1 día
      errors.fechaEntrega = "La fecha de entrega debe ser al menos un día después de la fecha de retiro";
      valid = false;
    }
  
    setErrors(errors);
    return valid;
  };  

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        // console.log({
        //   tipoCarga,
        //   domicilioRetiro,
        //   fechaRetiro,
        //   domicilioEntrega,
        //   fechaEntrega,
        //   imagenes,
        //   expoPushToken
        // });
        await apiClient.post('/pedidos', {
          tipoCarga,
          domicilioRetiro,
          fechaRetiro,
          domicilioEntrega,
          fechaEntrega,
          imagenes,
          //expoPushToken 
        }).then((res) => {
          const showAlert = () => {
            Alert.alert(
              '¡Nuevo Pedido!', // Título del Alert
              '¡Hay un nuevo pedido! Ingrese a su aplicativo para ver más info. Asegúrese de revisar todos los detalles importantes para no perder ninguna información crítica del pedido.',
              [
                { text: 'OK', onPress: () => console.log('OK Pressed') }, // Botón para cerrar el Alert
              ],
              { cancelable: false } // Evita que se cierre al tocar fuera del Alert
            );
          };

          if (res?.status === 201) {
            showAlert();
          } else {
            Alert.alert(
              'Oops :(', // Título del Alert
              'Ha ocurrido un error.',
              [
                { text: 'OK', onPress: () => console.log('OK Pressed') }, // Botón para cerrar el Alert
              ],
              { cancelable: false } // Evita que se cierre al tocar fuera del Alert
            );
          }
        }).catch(() => {
          Alert.alert(
            'Oops :(', // Título del Alert
            'Ha ocurrido un error.',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') }, // Botón para cerrar el Alert
            ],
            { cancelable: false } // Evita que se cierre al tocar fuera del Alert
          );
        });

        // const showToast = () => {
        //   Toast.show({
        //     type: 'success', 
        //     position: 'top',
        //     text1: '¡Nuevo Pedido!',
        //     text2: '¡Hay un nuevo pedido! Ingrese a su aplicativo para ver más info.',
        //     bottomOffset: 40,
        //     text1Style: styles.text1,
        //     text2Style: styles.text2,
        //     style: styles.toastContainer,
        //   });
        //};
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
        label="Información de Retiro"
        provincias={provincias}
        error={{
          calle: errors.domicilioRetiroCalle,
          numero: errors.domicilioRetiroNumero,
          id_localidad: errors.domicilioRetiroLocalidad,
          id_provincia: errors.domicilioRetiroProvincia,
        }}
      />

      <CustomDatePicker
        date={fechaRetiro}
        onDateChange={setFechaRetiro}
        label="Fecha de Retiro"
        minDate={new Date()}
        error={errors.fechaRetiro}
      />
      </View>
      
      <View style={globalStyles.container}>
        <DomicilioForm
          domicilio={domicilioEntrega}
          setDomicilio={setDomicilioEntrega}
          label="Información de Entrega"
          provincias={provincias}
          error={{
            calle: errors.domicilioEntregaCalle,
            numero: errors.domicilioEntregaNumero,
            id_localidad: errors.domicilioEntregaLocalidad,
            id_provincia: errors.domicilioEntregaProvincia,
          }}
        />

        <CustomDatePicker
          date={fechaEntrega}
          onDateChange={setFechaEntrega}
          label="Fecha de Entrega"
          minDate={new Date(fechaRetiro).setDate(fechaRetiro.getDate() + 1)}
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
  text1: {
    fontSize: 20, // Ajusta el tamaño del texto principal
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16, // Ajusta el tamaño del texto secundario
    color: 'gray',
  },
  toastContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#333',
    marginHorizontal: 20, // Agrega margen horizontal
    width: '90%', // Ajusta el ancho del Toast
  },
});

export default RegistrarPedidoEnvioScreen;