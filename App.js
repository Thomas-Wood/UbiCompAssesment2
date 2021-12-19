import React from 'react';
import { getAPI } from './apis/pvwatts';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ResultsScreen from './screens/ResultsScreen';
import { AntDesign } from '@expo/vector-icons';
import InputProgressScreen from './screens/InputProgressScreen';

let exampleParams = {
  'api_key': 'QRveUlC3ybb0cOKs6MviFSd6NvlJSufEk5VnJIJF',
  'system_capacity': '5',
  'module_type': '0',
  'losses': '14',
  'array_type': '1',
  'tilt': '30',
  'azimuth': '180',
  'lat': '51.299148',
  'lon': '-3.010852',
  'radius': '0',
  'dc_ac_ratio': '1.2',
  'dataset': 'intl'
}

//getAPI(exampleParams)

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#fff"
        inactiveColor="#aaa"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'New estimate') {
              iconName = focused ? 'addfile' : 'addfile'; // Could use a different icon or colour when not in focus
            } else if (route.name === 'Old estimates') {
              iconName = focused ? 'folder1' : 'folder1';
            }
            return <AntDesign name={iconName} size={24} color={color} />
          },
        })}
      >
        <Tab.Screen name="New estimate" component={InputProgressScreen} />
        <Tab.Screen name="Old estimates" component={ResultsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
