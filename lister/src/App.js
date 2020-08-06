import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Home, Login} from './screens';
import auth from '@react-native-firebase/auth'
//import {UserHandle} from './components/UserHandle';

function UserHandle() {
  // Set an initializing state whilst Firebase connects
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

// Handle user state changes
function onAuthStateChanged(user) {
  setUser(user);
  if (initializing) setInitializing(false);
}

useEffect(() => {
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber; // unsubscribe on unmount
}, []);

if (initializing) return null;

if (!user) {
  return (
    <Login/>
  );
}

return (
    <Home/>
);
}

export default class App extends React.Component {
  render(){
    return (
        
          <UserHandle/>
        
    );
  }
};
