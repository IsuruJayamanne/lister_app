import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Home, Login} from './screens';
import auth from '@react-native-firebase/auth'
//import {UserHandle} from './components/UserHandle';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

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

  componentDidMount() {
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });
  }

  render(){
    return (
        
          <UserHandle/>
        
    );
  }
};
