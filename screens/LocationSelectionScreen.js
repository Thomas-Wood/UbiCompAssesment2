import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const LocationSelectionScreen = ({navigation, route}) => {

  let changeLocationState = route.params.changeLocationState

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
            onPress={() => {console.log("Getting current location")}}
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