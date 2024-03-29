import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {All, Lists, Completed, Settings, New} from '..'
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
    }
});

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'lightsalmon',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: 'beige',
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'ToDo') {
                    iconName = 'pricetags-sharp'
                  } else if (route.name === 'Info') {
                    iconName = 'information-circle-sharp'
                  } else if (route.name === 'Completed') {
                    iconName = 'checkmark-done-circle-sharp'
                  } else if (route.name === 'New') {
                    iconName = 'add-circle-sharp'
                  } else if (route.name === 'Settings') {
                    iconName = 'md-settings-sharp'
                  }
      
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Info" component={Lists} />
            <Tab.Screen name="ToDo" component={All} />
            <Tab.Screen name="Completed" component={Completed} />
            <Tab.Screen name="New" component={New} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Home;
