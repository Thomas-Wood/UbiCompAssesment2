import { createStackNavigator } from '@react-navigation/stack';
import ResultsScreen from './ResultsScreen';
import React from "react";
import ResultsSelectionScreen from './ResultsSelectionScreen';

const Stack = createStackNavigator();

const ResultsNavigationScreen = ({navigation}) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
          name="ResultSelection"
          component={ResultsSelectionScreen}
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{ title: 'Results' }}
      />
    </Stack.Navigator>
  );
};

export default ResultsNavigationScreen;