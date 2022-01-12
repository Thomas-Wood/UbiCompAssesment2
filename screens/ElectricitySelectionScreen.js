import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import CustomInputBox from "../components/CustomInputBox";
import CustomModal from "../components/CustomModal";
import Theme from "../Theme";
import { getObject, storeObject } from "../tools/asyncStorageHelper";

/**
 * 
 * @param {*} param0 Requires navigation and route
 * @returns The electricity selection screen. Has inputs for cost of import and export of electricity
 */
const ElectricitySelectionScreen = ({navigation, route}) => {

  let changeElectricityState = route.params.changeElectricityState

  let [electricRate, onChangeElectricRate] = React.useState('17.2')
  let [exportRate, onChangeExportRate] = React.useState('5')

  let [modalVisible, setModalVisible] = React.useState(false);
  let [modalContent, setModalContent] = React.useState("Placeholder Text");

  // On first load, get the existing values if any
  React.useEffect(() => {
    async function getValues() {
      let currentEstimate = await getObject('currentEstimate')
      if (currentEstimate != null) {
        (currentEstimate['electricRate'] != null) ? onChangeElectricRate(currentEstimate['electricRate']) : null;
        (currentEstimate['exportRate'] != null) ? onChangeExportRate(currentEstimate['exportRate']) : null;
      }
    }
    return getValues()
  }, [])

  // Save the values and return to the progress screen
  const submitFunction = async () => {
    let electricRatevalid = (electricRate > 0 && electricRate < 100)
    let exportRateValid = (exportRate >= 0 && exportRate < 100)

    if (electricRatevalid && exportRateValid) {
      var currentEstimate = await getObject('currentEstimate')
      if (currentEstimate == null) {
        currentEstimate = {}
      }
      currentEstimate['electricRate'] = electricRate
      currentEstimate['exportRate'] = exportRate
      await storeObject('currentEstimate', currentEstimate)

      changeElectricityState(true)
      navigation.navigate('ProgressScreen')
    } else {
      showModal("Make sure your inputs are between 0 and 100")
    }    
  }

  // Update the modal text and show it
  const showModal = (content) => {
    setModalContent(content)
    setModalVisible(!modalVisible)
  }

  return (
    <ScrollView>
      <View style={Theme.container}>

        <CustomModal
          content={modalContent}
          visible={modalVisible}
          changeVisibleFunction={setModalVisible}/>

        <Text style={Theme.heading}>Enter your current electricity details</Text>

        <CustomInputBox
          label={"Your Electricity Rate"}
          prefix={'p/KWh'} 
          defaultValue={electricRate} 
          numeric={true} 
          stateChangeFunction={onChangeElectricRate} 
          onPress={ () => showModal("This is the rate you pay for your electricity. It's used to help calculate how much money you could save. 17.2p is an average value for the UK.")}
        />

        <CustomInputBox
          label={"Your Export Rate"}
          prefix={'p/KWh'} 
          defaultValue={exportRate}
          numeric={true} 
          stateChangeFunction={onChangeExportRate} 
          onPress={ () => showModal('This is how much your electricity supplier will pay you for any electricity you export to the grid. These values vary greatly so check with your supplier. 5p per KWh is a common estimate.')}
        />

        <CustomButton 
          text={"Confirm Details"} 
          onPress={submitFunction}
        />

      </View>
    </ScrollView>
  );
};

export default ElectricitySelectionScreen;