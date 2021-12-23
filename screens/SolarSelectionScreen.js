import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import CustomMultipleChoice from "../components/CustomMultipleChoice";
import Theme from "../Theme";

const SolarSelectionScreen = ({navigation, route}) => {

  let changeSolarState = route.params.changeSolarState

  let [moduleType, onChangeModuleType] = React.useState(0)
  let [arrayType, onChangeArrayType] = React.useState(1)

  const submitFunction = () => {
    changeSolarState(true)
    navigation.navigate('ProgressScreen')
  }

  return (
    <ScrollView>
      <View style={Theme.container}>
        <Text style={Theme.heading}>Please select your solar details</Text>

        <CustomMultipleChoice
          label={'Module Type'}
          options={['Standard', 'Premium', 'Thin Film']}
          currentState={moduleType}
          stateChangeFunction={onChangeModuleType}
          onPress={() => console.log('This describes what each module name means')}
        />

        <CustomMultipleChoice
          label={'Array Type'}
          options={['Fixed - Open Rack', 'Fixed - Roof Mounted', '1-Axis tracking', '1-Axis Backtracking', '2-Axis tracking']}
          currentState={arrayType}
          stateChangeFunction={onChangeArrayType}
          onPress={() => console.log('This describes what each array type means')}
        />

        <CustomButton 
          text={"Submit"} 
          onPress={submitFunction}
        />
      </View>
    </ScrollView>
  );
};

export default SolarSelectionScreen;