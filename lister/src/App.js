import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Home, All} from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  );
};

export default App;