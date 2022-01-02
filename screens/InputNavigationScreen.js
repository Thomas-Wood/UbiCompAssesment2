import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import ElectricitySelectionScreen from './ElectricitySelectionScreen';
import InputProgressScreen from "./InputProgressScreen";
import LocationSelectionScreen from './LocationSelectionScreen';
import SolarSelectionScreen from './SolarSelectionScreen';
import { LogBox } from 'react-native';

// State persistence and deep linking are not required for this use case, so this warning can be safely ignored.
// More information can be found: https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state',]);

const Stack = createStackNavigator();

/**
 * 
 * @param {*} param0 Requires navigation
 * @returns The stack navigator containing the progress screen and each input section
 */
const InputProgressNavigationScreen = ({navigation}) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
          name="ProgressScreen"
          component={InputProgressScreen}
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="Location"
          component={LocationSelectionScreen}
      />
      <Stack.Screen
          name="Solar"
          component={SolarSelectionScreen}
      />
      <Stack.Screen
          name="Electricity"
          component={ElectricitySelectionScreen}
      />
    </Stack.Navigator>
  );
};

export default InputProgressNavigationScreen;