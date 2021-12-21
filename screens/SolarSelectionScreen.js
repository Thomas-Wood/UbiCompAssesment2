import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";

const SolarSelectionScreen = ({navigation, route}) => {

  let changeSolarState = route.params.changeSolarState

  const submitFunction = () => {
    changeSolarState(true)
    navigation.navigate('ProgressScreen')
  }

  return (
    <View style={Theme.container}>
      <Text>Please select your solar details</Text>

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

export default SolarSelectionScreen;