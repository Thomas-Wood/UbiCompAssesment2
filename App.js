import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import InputNavigationScreen from './screens/InputNavigationScreen';
import Theme from "./Theme";
import ResultsNavigationScreen from './screens/ResultsNavigationScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={Theme.navigationTheme}>
      <Tab.Navigator
        activeColor="#fff"
        inactiveColor="#aaa"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'New estimate') {
              iconName = focused ? 'addfile' : 'addfile'; // Could use a different icon or colour when not in focus
            } else if (route.name === 'Saved estimates') {
              iconName = focused ? 'folder1' : 'folder1';
            }
            return <AntDesign name={iconName} size={24} color={color} />
          },
        })}
      >
        <Tab.Screen name="New estimate" component={InputNavigationScreen} />
        <Tab.Screen name="Saved estimates" component={ResultsNavigationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
