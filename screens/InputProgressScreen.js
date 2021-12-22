import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInputSectionButton from "../components/CustomInputSectionButton";
import Theme from "../Theme";

const InputProgressScreen = ({navigation, route}) => {

  const [locationState, changeLocationState] = React.useState(false);
  const [solarState, changeSolarState] = React.useState(false);
  const [electricityState, changeElectricityState] = React.useState(false);

  return (
    <View style={Theme.container}>
      <Text style={Theme.heading}>Complete each section to get an estimate on solar power generation</Text>
      <CustomInputSectionButton
        text={'Location'} 
        onPress={ () => navigation.push('Location', {changeLocationState: changeLocationState})}
        complete={locationState}
      />
      <CustomInputSectionButton
        text={'Solar Panel Details'} 
        onPress={ () => navigation.push('Solar', {changeSolarState: changeSolarState})}
        complete={solarState}
      />
      <CustomInputSectionButton
        text={'Electricity prices'} 
        onPress={ () => navigation.push('Electricity', {changeElectricityState: changeElectricityState})}
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