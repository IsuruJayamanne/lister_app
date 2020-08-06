import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Home, Login} from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
};

export default App;