import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import CustomInputBox from "../components/CustomInputBox";
import Theme from "../Theme";
import { getObject, storeObject } from "../tools/asyncStorageHelper";

const ElectricitySelectionScreen = ({navigation, route}) => {

  let changeElectricityState = route.params.changeElectricityState

  let [electricRate, onChangeElectricRate] = React.useState('17.2')
  let [exportRate, onChangeExportRate] = React.useState('5')

  React.useEffect(() => {
    async function getValues() {
      let currentEstimate = await getObject('currentEstimate')
      if (currentEstimate != null) {
        onChangeElectricRate(currentEstimate['electricRate'])
        onChangeExportRate(currentEstimate['exportRate'])
      }
    }
    return getValues()
  }, [])

  const submitFunction = async () => {
    // TODO Check inputs are valid

    var currentEstimate = await getObject('currentEstimate')
    if (currentEstimate == null) {
      currentEstimate = {}
    }
    currentEstimate['electricRate'] = electricRate
    currentEstimate['exportRate'] = exportRate
    await storeObject('currentEstimate', currentEstimate)

    changeElectricityState(true)
    navigation.navigate('ProgressScreen')
  }

  return (
    <ScrollView>
      <View style={Theme.container}>
        <Text style={Theme.heading}>These details will help calculate how much money you could save</Text>

        <CustomInputBox
          label={"Your Electricity Rate"}
          prefix={'p/KWh'} 
          defaultValue={electricRate} 
          numeric={true} 
          stateChangeFunction={onChangeElectricRate} 
          onPress={ () => console.log('Some info on this input and what it means!')}
        />

        <CustomInputBox
          label={"Your Export Rate"}
          prefix={'p/KWh'} 
          defaultValue={exportRate}
          numeric={true} 
          stateChangeFunction={onChangeExportRate} 
          onPress={ () => console.log('Some info on this input and what it means!')}
        />

        <CustomButton 
          text={"Submit"} 
          onPress={submitFunction}
        />

      </View>
    </ScrollView>
  );
};

export default ElectricitySelectionScreen;