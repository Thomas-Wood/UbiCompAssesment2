import React from "react";
import { Text, View, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInputSectionButton from "../components/CustomInputSectionButton";
import CustomLoadingModal from "../components/CustomLoadingModal";
import CustomModal from "../components/CustomModal";
import Theme from "../Theme";
import { getObject, storeObject } from "../tools/asyncStorageHelper";
import { getAPI } from '../tools/pvwatts';

const InputProgressScreen = ({navigation, route}) => {

  const [locationState, changeLocationState] = React.useState(false);
  const [solarState, changeSolarState] = React.useState(false);
  const [electricityState, changeElectricityState] = React.useState(false);

  let [modalVisible, setModalVisible] = React.useState(false);
  let [modalContent, setModalContent] = React.useState("Placeholder Text");

  let [loading, setLoading] = React.useState(false);

  const submitFunction = async () => {
    if (locationState == true && solarState == true && electricityState == true) {
      setLoading(true)

      let currentEstimate = await getObject('currentEstimate')
      
      let results = await getAPI(currentEstimate)

      // Store new results and inputs
      let detailsToSave = {
        'estimate': currentEstimate,
        'results': results
      }

      var savedEstimates = await getObject('savedEstimates')
      if (savedEstimates == null) {
        savedEstimates = []
      }
      savedEstimates.push(detailsToSave)
      await storeObject('savedEstimates', savedEstimates)

      let index = savedEstimates.length -1

      // Wipe the 'currentEstimate' storage
      await storeObject('currentEstimate', {})

      changeLocationState(false)
      changeSolarState(false)
      changeElectricityState(false)


      // Load the results page with the new index
      navigation.navigate('Saved estimates', { screen: 'ResultsScreen', params: { index: index }})

      setLoading(false)
    } else {
      showModal("Please complete each section first.")
    }
  }

  const showModal = (content) => {
    setModalContent(content)
    setModalVisible(!modalVisible)
  }

  return (
    <View style={Theme.container}>

      <CustomModal
        content={modalContent}
        visible={modalVisible}
        changeVisibleFunction={setModalVisible}/>

      <CustomLoadingModal
        visible={loading}/>

      <Text style={Theme.heading}>Powered by</Text>

      <Image style={{height: 80, width: '75%'}} source={require('../assets/NRELlogo.jpg')} />


      <Text style={Theme.heading}>Complete each section and press submit to get an estimate on solar power generation for a location.</Text>
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
      <View style={{paddingTop: 50}}>
        <CustomButton 
          text={"Submit"} 
          onPress={submitFunction}
        />
      </View>
    </View>
  );
};

export default InputProgressScreen;