import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import InputNavigationScreen from './screens/InputNavigationScreen';
import Theme from "./Theme";
import ResultsNavigationScreen from './screens/ResultsNavigationScreen';

const Tab = createMaterialBottomTabNavigator();

/**
 * 
 * @returns The Navigation container containing the application
 */
export default function App() {
  return (
    <NavigationContainer theme={Theme.navigationTheme}>
      <Tab.Navigator
        activeColor="#fff"
        inactiveColor="#aaa"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Calculate Estimate') {
              iconName = 'addfile'
            } else if (route.name === 'History') {
              iconName = 'folder1'
            }
            return <AntDesign name={iconName} size={24} color={color} />
          },
        })}
      >
        <Tab.Screen name="Calculate Estimate" component={InputNavigationScreen} />
        <Tab.Screen name="History" component={ResultsNavigationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
