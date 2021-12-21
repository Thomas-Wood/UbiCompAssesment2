import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import InputProgressScreen from "./InputProgressScreen";
import LocationSelectionScreen from './LocationSelectionScreen';

const Stack = createStackNavigator();

const InputProgressNavigationScreen = ({navigation}) => {

  const [locationState, changeLocationState] = React.useState(false);
  const [solarState, changesolarState] = React.useState(false);
  const [electricityState, changeelectricityState] = React.useState(false);

  return (
    <Stack.Navigator>
      <Stack.Screen
          name="ProgressScreen"
          component={InputProgressScreen}
          options={{ headerShown: false }}
          initialParams={{
            locationStateData: [locationState, changeLocationState],
            solarStateData: [solarState, changesolarState],
            electricityStateData: [electricityState, changeelectricityState]
          }}
      />
      <Stack.Screen
          name="Location"
          component={LocationSelectionScreen}
          initialParams={{
            locationStateData: [locationState, changeLocationState]
          }}
      />
      <Stack.Screen
          name="Solar"
          component={InputProgressScreen}
          initialParams={{
            solarStateData: [solarState, changesolarState]
          }}
      />
      <Stack.Screen
          name="Electricity"
          component={InputProgressScreen}
          initialParams={{
            electricityStateData: [electricityState, changeelectricityState]
          }}
      />
    </Stack.Navigator>
  );
};

export default InputProgressNavigationScreen;