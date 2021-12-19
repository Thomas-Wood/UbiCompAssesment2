import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAPI } from './apis/pvwatts';

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

getAPI(exampleParams)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
