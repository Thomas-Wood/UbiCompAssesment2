import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";

const LocationSelectionScreen = ({navigation, route}) => {

  let changeLocationState = route.params.changeLocationState

  const submitFunction = () => {
    changeLocationState(true)
    navigation.navigate('ProgressScreen')
  }

  return (
    <View style={Theme.container}>
      <Text>Please select your location</Text>

      {/* <CustomInputBox
        label={"Panel cost"}
        prefix={'£'} 
        defaultValue={'100'} 
        numeric={true} 
        stateChangeFunction={onChangeNumber} 
        onPress={ () => console.log('Some info on this input and what it means!')}
      /> */}

      <CustomButton 
        text={"Submit"} 
        onPress={submitFunction}
      />

    </View>
  );
};

export default LocationSelectionScreen;