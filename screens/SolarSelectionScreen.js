import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomMultipleChoice from "../components/CustomMultipleChoice";
import Theme from "../Theme";

const SolarSelectionScreen = ({navigation, route}) => {

  let changeSolarState = route.params.changeSolarState

  let [moduleType, onChangeModuleType] = React.useState(0)

  const submitFunction = () => {
    changeSolarState(true)
    navigation.navigate('ProgressScreen')
  }

  return (
    <View style={Theme.container}>
      <Text style={Theme.heading}>Please select your solar details</Text>

      <CustomMultipleChoice
        label={'Module Type'}
        options={['Standard', 'Premium', 'Thin Film']}
        currentState={moduleType}
        stateChangeFunction={onChangeModuleType}
        onPress={() => console.log('This describes what each module name means')}
      />

      <CustomButton 
        text={"Submit"} 
        onPress={submitFunction}
      />

    </View>
  );
};

export default SolarSelectionScreen;