import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {All, Lists, Completed, Settings} from '..'

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
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'lightsalmon',
                inactiveTintColor: 'gray',
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = 'Home'
                  } else if (route.name === 'Settings') {
                    iconName = 'Settings'
                  }
      
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="ToDo" component={All} />
            <Tab.Screen name="Lists" component={Lists} />
            <Tab.Screen name="Completed" component={Completed} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default Home;
