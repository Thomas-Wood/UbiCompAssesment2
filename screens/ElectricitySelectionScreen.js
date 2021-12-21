import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";

const ElectricitySelectionScreen = ({navigation, route}) => {

  let changeElectricityState = route.params.changeElectricityState

  const submitFunction = () => {
    changeElectricityState(true)
    navigation.navigate('ProgressScreen')
  }

  return (
    <View style={Theme.container}>
      <Text>Please select your electricity details</Text>

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

export default ElectricitySelectionScreen;