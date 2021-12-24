import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import CustomMultipleChoice from "../components/CustomMultipleChoice";
import CustomInputBox from "../components/CustomInputBox"
import Theme from "../Theme";
import { getObject, storeObject } from "../tools/asyncStorageHelper";

const SolarSelectionScreen = ({navigation, route}) => {

  let changeSolarState = route.params.changeSolarState

  let [moduleType, onChangeModuleType] = React.useState(0)
  let [arrayArea, onChangeArrayArea] = React.useState('4')
  let [panelRating, onChangePanelRating] = React.useState('1')
  let [arrayType, onChangeArrayType] = React.useState(1)
  let [tilt, onChangeTilt] = React.useState('30')
  let [azimuth, onChangeAzimuth] = React.useState('180')

  React.useEffect(() => {
    async function getValues() {
      let currentEstimate = await getObject('currentEstimate')
      if (currentEstimate != null) {
        (currentEstimate['moduleType'] != null) ? onChangeModuleType(parseInt(currentEstimate['moduleType'])) : null;
        (currentEstimate['arrayArea'] != null) ? onChangeArrayArea(currentEstimate['arrayArea']) : null;
        (currentEstimate['panelRating'] != null) ? onChangePanelRating(currentEstimate['panelRating']) : null;
        (currentEstimate['arrayType'] != null) ? onChangeArrayType(parseInt(currentEstimate['arrayType'])) : null;
        (currentEstimate['tilt'] != null) ? onChangeTilt(currentEstimate['tilt']) : null;
        (currentEstimate['azimuth'] != null) ? onChangeAzimuth(currentEstimate['azimuth']) : null;
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
    currentEstimate['moduleType'] = moduleType
    currentEstimate['arrayArea'] = arrayArea
    currentEstimate['panelRating'] = panelRating
    currentEstimate['arrayType'] = arrayType
    currentEstimate['tilt'] = tilt
    currentEstimate['azimuth'] = azimuth
    await storeObject('currentEstimate', currentEstimate)

    changeSolarState(true)
    navigation.navigate('ProgressScreen')
  }

  const angleInputs = () => {
    if (arrayType == 0 || arrayType == 1 || arrayType == 2 || arrayType == 3) {
      return (
        <View>
          <CustomInputBox
            label={"Panel Tilt Angle"}
            prefix={'deg'} 
            defaultValue={tilt} 
            numeric={true} 
            stateChangeFunction={onChangeTilt} 
            onPress={ () => console.log('This is the angle from horizontal such at horizontal is 0 and vertical is 90.')}
          />

          <CustomInputBox
            label={"Angle from north"}
            prefix={'deg'} 
            defaultValue={azimuth} 
            numeric={true} 
            stateChangeFunction={onChangeAzimuth} 
            onPress={ () => console.log('Some info on this input and what it means!')}
          />
        </View>
      )
    } else {
      return null
    }
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

        <CustomInputBox
          label={"Array Area"}
          prefix={'m²'} 
          defaultValue={arrayArea} 
          numeric={true} 
          stateChangeFunction={onChangeArrayArea}
          onPress={ () => console.log('Some info on this input and what it means!')}
        />

        <CustomInputBox
          label={"Panel Rating"}
          prefix={'kW/m²'} 
          defaultValue={panelRating} 
          numeric={true} 
          stateChangeFunction={onChangePanelRating}
          onPress={ () => console.log('Some info on this input and what it means!')}
        />

        <CustomMultipleChoice
          label={'Array Type'}
          options={['Fixed - Open Rack', 'Fixed - Roof Mounted', '1-Axis tracking', '1-Axis Backtracking', '2-Axis tracking']}
          currentState={arrayType}
          stateChangeFunction={onChangeArrayType}
          onPress={() => console.log('This describes what each array type means')}
        />

        {angleInputs()}

        <CustomButton 
          text={"Submit"} 
          onPress={submitFunction}
        />
      </View>
    </ScrollView>
  );
};

export default SolarSelectionScreen;