import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor="transparent" 
        barStyle="dark-content" 
        translucent={true}
      />
      <AppNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;