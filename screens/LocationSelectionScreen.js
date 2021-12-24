import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const LocationSelectionScreen = ({navigation, route}) => {

  let changeLocationState = route.params.changeLocationState

  let [currentLat, setLat] = React.useState(null);
  let [currentLong, setLong] = React.useState(null);
  let [errorMsg, setErrorMsg] = React.useState(null);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let newLocation = await Location.getCurrentPositionAsync({});

    let text = 'Waiting for permissions';
    if (errorMsg) {
      text = errorMsg;
    } else if (newLocation) {
      text = JSON.stringify(newLocation);
      setLat(newLocation.coords.latitude)
      setLong(newLocation.coords.longitude)
    }
  }

  const submitFunction = () => {
    changeLocationState(true)
    navigation.navigate('ProgressScreen')
  }

  const onMapPress = (event) => {
    setLat(event.nativeEvent.coordinate.latitude)
    setLong(event.nativeEvent.coordinate.longitude)
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
        }}
        onPress={onMapPress}>
        <Marker
        coordinate={{latitude: currentLat, longitude: currentLong}}
      />
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