import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInputSectionButton from "../components/CustomInputSectionButton";
import CustomLoadingModal from "../components/CustomLoadingModal";
import Theme from "../Theme";
import { getObject, storeObject } from "../tools/asyncStorageHelper";
import { getAPI } from '../tools/pvwatts';

/**
 * 
 * @param {*} param0 Requires navigation and route
 * @returns A progress screen allowing navigation to the three input sections. On submit, it saves the details and results and redirects to the results page.
 */
const InputProgressScreen = ({navigation, route}) => {

  // If the section has been completed or not
  const [locationState, changeLocationState] = React.useState(false);
  const [solarState, changeSolarState] = React.useState(false);
  const [electricityState, changeElectricityState] = React.useState(false);

  let [loading, setLoading] = React.useState(false);

  // if this is a recalculation, set sections to complete
  const isFocused = useIsFocused()
  React.useEffect(() => {
    async function setStates() {
      try {
        if (route.params.prefilled == true) {
          route.params.prefilled = false
          changeLocationState(true)
          changeSolarState(true)
          changeElectricityState(true)
        }
      } catch (error) {
        console.log("Prefilled assumed false")
      }
    }
    return setStates()
  }, [isFocused])

  

  // If all sections are complete, make the API call, save the data and redirect to the results page
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


      // Load the results page
      navigation.navigate('History', { screen: 'ResultSelection'})

      setLoading(false)
    }
  }

  return (
    <View style={Theme.container}>

      <CustomLoadingModal
        visible={loading}/>

      <Text style={{...Theme.heading, marginTop: 30}}>Enter details for each section below</Text>
      <CustomInputSectionButton
        text={'Location'} 
        onPress={ () => navigation.push('Location', {changeLocationState: changeLocationState})}
        complete={locationState}
        unavailable={false}
      />
      <CustomInputSectionButton
        text={'Electricity prices'} 
        onPress={ () => navigation.push('Electricity', {changeElectricityState: changeElectricityState})}
        complete={electricityState}
        unavailable={!locationState}
      />
      <CustomInputSectionButton
        text={'Solar Panel Details'} 
        onPress={ () => navigation.push('Solar', {changeSolarState: changeSolarState})}
        complete={solarState}
        unavailable={!electricityState}
      />

      <Text style={Theme.heading}>Powered by</Text>

      <Image style={{height: 80, width: '75%'}} source={require('../assets/NRELlogo.jpg')} />

      <View>
        <CustomButton 
          text={"Calculate"} 
          onPress={submitFunction}
          unavailable={!solarState}
        />
      </View>
    </View>
  );
};

export default InputProgressScreen;