import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { getObject, storeObject } from "../tools/asyncStorageHelper";
import CustomModal from "../components/CustomModal";

const LocationSelectionScreen = ({navigation, route}) => {

  let changeLocationState = route.params.changeLocationState

  let [currentLat, setLat] = React.useState(null);
  let [currentLong, setLong] = React.useState(null);
  let [errorMsg, setErrorMsg] = React.useState(null);

  let [modalVisible, setModalVisible] = React.useState(false);
  let [modalContent, setModalContent] = React.useState("Placeholder Text");

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

  React.useEffect(() => {
    async function getValues() {
      let currentEstimate = await getObject('currentEstimate')
      if (currentEstimate != null) {
        (currentEstimate['latitude'] != null) ? setLat(parseFloat(currentEstimate['latitude'])) : null;
        (currentEstimate['longitude'] != null) ? setLong(parseFloat(currentEstimate['longitude'])) : null;
      }
    }
    return getValues()
  }, [])

  const submitFunction = async () => {
    if (currentLat != null && currentLong != null) {
      var currentEstimate = await getObject('currentEstimate')
      if (currentEstimate == null) {
        currentEstimate = {}
      }
      currentEstimate['latitude'] = currentLat
      currentEstimate['longitude'] = currentLong
      await storeObject('currentEstimate', currentEstimate)

      changeLocationState(true)
      navigation.navigate('ProgressScreen')
    } else {
      showModal("Please select a location on the map or using the GPS button")
    }
  }

  const showModal = (content) => {
    setModalContent(content)
    setModalVisible(!modalVisible)
  }

  const onMapPress = (event) => {
    setLat(event.nativeEvent.coordinate.latitude)
    setLong(event.nativeEvent.coordinate.longitude)
  }

  const getMarker = () => {
    if (currentLat != null && currentLong != null) {
      return (<Marker coordinate={{latitude: currentLat, longitude: currentLong}}/>)
    } else {
      return null
    }
  }

  const getMap = () => {
    if (currentLat != null && currentLong != null) {
      return (
        <MapView
        style={{height: '50%', width: '100%'}}
        region={{
          latitude: currentLat,
          longitude: currentLong,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={onMapPress}>
        {getMarker()}
      </MapView>
      )
    } else {
      return (
        <MapView
        style={{height: '50%', width: '100%'}}
        initialRegion={{
          latitude: 50.742845,
          longitude: -1.897201,
          latitudeDelta: 8,
          longitudeDelta: 8,
        }}
        onPress={onMapPress}>
        {getMarker()}
      </MapView>
      )
    }
  }

  return (
    <View>

      <CustomModal
          content={modalContent}
          visible={modalVisible}
          changeVisibleFunction={setModalVisible}/>

      <View style={{height: '30%', width: '100%'}}>
        <View style={Theme.container}>
          <Text style={{...Theme.heading, paddingTop: 5, marginBottom: 0}}>This helps find how much sun light your panels could get. Use your current GPS or tap a location on the map</Text>

          <CustomButton 
            text={"Use Current GPS"} 
            onPress={getCurrentLocation}
          />


        </View>
      </View>

      {getMap()}

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