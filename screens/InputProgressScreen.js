import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInputSectionButton from "../components/CustomInputSectionButton";
import Theme from "../Theme";

const InputProgressScreen = ({navigation, route}) => {

  const [locationState, changeLocationState] = route.params.locationStateData
  const [solarState, changesolarState] = route.params.solarStateData
  const [electricityState, changeelectricityState] = route.params.electricityStateData

  return (
    <View style={Theme.container}>
      <Text style={Theme.heading}>Complete each section to get an estimate on solar power generation</Text>
      <CustomInputSectionButton
        text={'Location'} 
        onPress={ () => navigation.push('Location')}
        complete={locationState}
      />
      <CustomInputSectionButton
        text={'Solar Panel Details'} 
        onPress={ () => console.log("Solar Button Pressed")}
        complete={solarState}
      />
      <CustomInputSectionButton
        text={'Electricity prices'} 
        onPress={ () => console.log("Electricity Button Pressed")}
        complete={electricityState}
      />
      <CustomButton 
        text={"Submit"} 
        onPress={ () => console.log("Submit Button Pressed")}
      />
    </View>
  );
};

export default InputProgressScreen;