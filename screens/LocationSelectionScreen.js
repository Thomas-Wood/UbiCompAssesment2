import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const LocationSelectionScreen = ({navigation, route}) => {

  let changeLocationState = route.params.changeLocationState

  let [location, setLocation] = React.useState(null);
  let [errorMsg, setErrorMsg] = React.useState(null);

  let currentLat = 0
  let currentLong = 0
  let text = 'Waiting for permissions';

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let newLocation = await Location.getCurrentPositionAsync({});
    setLocation(newLocation);

    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      currentLat = location.coords.latitude
      currentLong = location.coords.longitude
    }
  
    console.log("Lat: " + currentLat + " Long: " + currentLong)
  }

  const submitFunction = () => {
    changeLocationState(true)
    navigation.navigate('ProgressScreen')
  }

  return (
    <View>
      <View style={{height: '30%', width: '100%'}}>
        <View style={Theme.container}>
          <Text style={Theme.heading}>This helps find how much sun light your panels could get</Text>

          <CustomButton 
            text={"Use Current GPS"} 
            onPress={getCurrentLocation}
          />


        </View>
      </View>

      <MapView
          style={{height: '50%', width: '100%'}}
          initialRegion={{
            latitude: 50.742845,
            longitude: -1.897201,
            latitudeDelta: 0.09,
            longitudeDelta: 0.09,
          }}>
      </MapView>

      <View style={{height: '20%', width: '100%'}}>
        <View style={Theme.container}>
          <CustomButton 
            text={"Submit"} 
            onPress={submitFunction}
          />
        </View>
      </View>

    </View>
  );
};

export default LocationSelectionScreen;