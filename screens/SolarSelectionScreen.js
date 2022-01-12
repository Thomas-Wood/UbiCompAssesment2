import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import CustomMultipleChoice from "../components/CustomMultipleChoice";
import CustomInputBox from "../components/CustomInputBox"
import Theme from "../Theme";
import { getObject, storeObject } from "../tools/asyncStorageHelper";
import CustomModal from "../components/CustomModal";

// Descriptions are based of the API's descriptions found here: https://pvwatts.nrel.gov/

/**
 * 
 * @param {*} param0 - Navigation and route should be provided to this screen
 * @returns The screen containing the inputs for details on a solar panel. On submit, the infomation is stored in currentEstimate in async storage, the state is updated and the screen returns to the progress screen.
 */
const SolarSelectionScreen = ({navigation, route}) => {

  let changeSolarState = route.params.changeSolarState

  let [moduleType, onChangeModuleType] = React.useState(0)
  let [arrayArea, onChangeArrayArea] = React.useState('4')
  let [panelRating, onChangePanelRating] = React.useState('1')
  let [arrayType, onChangeArrayType] = React.useState(1)
  let [tilt, onChangeTilt] = React.useState('30')
  let [azimuth, onChangeAzimuth] = React.useState('180')

  let [modalVisible, setModalVisible] = React.useState(false);
  let [modalContent, setModalContent] = React.useState("Placeholder Text");

  // On first load, if data has already been submited then load that, otherwise use the default values.
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

  // Called by the confirm details button. This saves the info and redirects back to the progress screen
  const submitFunction = async () => {
    let arrayAreaValid = (arrayArea > 0.1 && arrayArea < 9999.99)
    let panelRatingValid = (panelRating > 0.1 && panelRating < 10)
    let tiltValid = (tilt >= 0 && tilt <= 90)
    let azimuthValid = (azimuth >= 0 && azimuth <= 359)

    let errorMessage = 'Make sure that your\n\n'

    if (!arrayAreaValid) {
      errorMessage += "Array area is between\n0.1 and 10,000\n\n"
    }
    if (!panelRatingValid) {
      errorMessage += "Panel rating is between\n0.1 and 10\n\n"
    }
    if (!tiltValid) {
      errorMessage += "Tilt is between\n0 and 90\n\n"
    }
    if (!azimuthValid) {
      errorMessage += "Angle from north is between\n0 and 359\n\n"
    }

    if (arrayAreaValid && panelRatingValid && tiltValid && azimuthValid) {
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
    } else {
      showModal(errorMessage)
    }
  }

  // Update the modal text and show it
  const showModal = (content) => {
    setModalContent(content)
    setModalVisible(!modalVisible)
  }

  // Show the angle input boxes if appropriate (e.g. angles not needed if panel selected is self tracking)
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
            onPress={ () => showModal('This is the angle from horizontal such that horizontal (flat roof) is 0 and vertical (wall mounted) is 90.')}
          />

          <CustomInputBox
            label={"Angle from north"}
            prefix={'deg'} 
            defaultValue={azimuth} 
            numeric={true} 
            stateChangeFunction={onChangeAzimuth} 
            onPress={ () => showModal("This is the Azimuth, or the angle clockwise from true North. An azimuth angle of 180° is for a south-facing array, and an azimuth angle of zero degrees is for a north-facing array.")}
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

        <CustomModal
          content={modalContent}
          visible={modalVisible}
          changeVisibleFunction={setModalVisible}/>

        <Text style={Theme.heading}>These details help determin how much power your panels could produce</Text>

        <CustomMultipleChoice
          label={'Module Type'}
          options={['Standard', 'Premium', 'Thin Film']}
          currentState={moduleType}
          stateChangeFunction={onChangeModuleType}
          onPress={() => showModal("The module type describes the photovoltaic modules in the array. If you do not have information about the modules in the system, use the default Standard module type.")}
        />

        <CustomInputBox
          label={"Array Area"}
          prefix={'m²'} 
          defaultValue={arrayArea} 
          numeric={true} 
          stateChangeFunction={onChangeArrayArea}
          onPress={ () => showModal("This is the total area of the solar panels in meters squared.")}
        />

        <CustomInputBox
          label={"Panel Rating"}
          prefix={'kW/m²'} 
          defaultValue={panelRating} 
          numeric={true} 
          stateChangeFunction={onChangePanelRating}
          onPress={ () => showModal("This is how much energy a 1m² panel can produce in standard test conditions. 1KW is a common estimate.")}
        />

        <CustomMultipleChoice
          label={'Array Type'}
          options={['Fixed - Open Rack', 'Fixed - Roof Mounted', '1-Axis Tracking (Roll)', '1-Axis Tracking (Pitch)', '2-Axis Tracking']}
          currentState={arrayType}
          stateChangeFunction={onChangeArrayType}
          onPress={() => showModal("The array type describes whether the photovoltic modules in the array are fixed, or whether they move to track the movement of the sun across the sky with one or two axes of rotation.")}
        />

        {angleInputs()}

        <CustomButton 
          text={"Confirm Details"} 
          onPress={submitFunction}
        />
      </View>
    </ScrollView>
  );
};

export default SolarSelectionScreen;