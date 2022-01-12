import React from "react";
import { Text, View } from "react-native";
import CustomCard from "../components/CustomCard";
import Theme from "../Theme";
import { getObject, storeObject } from "../tools/asyncStorageHelper";
import CustomModal from "../components/CustomModal";
import CustomLoadingModal from "../components/CustomLoadingModal";
import CustomEditButton from "../components/CustomEditButton";
import CustomDeleteButton from "../components/CustomDeleteButton";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import CustomLineChart from "../components/CustomLineChart";
import moment from "moment";

/**
 * 
 * @param {*} param0 Require navigation and route. route.params.index should also be provided.
 * @returns  results screen shows the results of an estimate and provides edit and delete buttons.
 */
const ResultsScreen = ({navigation, route}) => {

  let [data, changeData] = React.useState(null)

  let [modalVisible, setModalVisible] = React.useState(false);
  let [modalContent, setModalContent] = React.useState("Placeholder Text");

  let index = route.params.index

  // Change the modal text and show it
  const showModal = (content) => {
    setModalContent(content)
    setModalVisible(!modalVisible)
  }

  // On first load, get the data
  React.useEffect(() => {
    async function getSavedEstimates() {
      let savedData = await getObject('savedEstimates')
      changeData(savedData[index])
      if (data != null) {
        navigation.setOptions({ title: moment(data['results']['dateTime']).format('Do MMMM YYYY, h:mm a') })
      }
    }
    return getSavedEstimates()
  }, [])

  // Once data has loaded
  React.useEffect(() => {
    async function updateTitle() {
      if (data != null) {
        navigation.setOptions({ title: moment(data['results']['dateTime']).format('Do MMMM YYYY, h:mm a') })
      }
    }
    return updateTitle()
  }, [data])

  // Remove the result from storage and go back to the results list page
  const deleteResult = async () => {
    let savedData = await getObject('savedEstimates')
    savedData.splice(index, 1)
    await storeObject('savedEstimates', savedData)
    navigation.goBack()
  }

  // Take the user back to the edit page to tweak their inputs
  const editResult = async () => {
    // Update currentEstimate with the current selected one
    await storeObject('currentEstimate', data['estimate'])

    // Go to the edit page to change the values
    navigation.navigate('Calculate Estimate', {screen: 'ProgressScreen', params: {prefilled: true}})
  }

  // If loading, show the loading modal, otherwise load the main page content
  const mainContent = () => {
    if (data == null) {
      return (<CustomLoadingModal visible={true}/>)
    } else {
      return (
        <View>

          <CustomModal
          content={modalContent}
          visible={modalVisible}
          changeVisibleFunction={setModalVisible}
          />

          <CustomCard onPress={
            () => showModal("The lower value is how much you would be paid by your provider "+
            "if you exported all the electricity you produced. The high value is how much you "+
            "would save if you used all the electricity you generated.")
            }>
            <Text style={Theme.resultsText}>Annual Benefit</Text>
            <Text style={Theme.resultsText}>£{(parseFloat(data['results']['minBenefit'])/100).toFixed(0)} - £{(parseFloat(data['results']['maxBenefit'])/100).toFixed(0)}</Text>
          </CustomCard>

          <CustomCard onPress={
            () => showModal("This is the total amount of energy you could generate in a year")
            }>
            <Text style={Theme.resultsText}>Annual Generation</Text>
            <Text style={Theme.resultsText}>{(parseFloat(data['results']['kwhGeneratedPerYear'])).toFixed(0)} KWh</Text>
          </CustomCard>

          <View style={{height: '35%', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{transform: [{ rotate: "-90deg" }]}}>KWh</Text>
            <CustomLineChart data={data['results']['monthlyAC']}/>
          </View>

          <View style={{height: '20%'}}>
            <MapView
              style={{height: '100%', width: '100%'}}
              initialRegion={{
                latitude: data['estimate']['latitude'],
                longitude: data['estimate']['longitude'],
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
              }}>
                <Marker coordinate={{latitude: data['estimate']['latitude'], longitude: data['estimate']['longitude']}}/>
            </MapView>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <CustomDeleteButton onPress={deleteResult}/>
            <CustomEditButton onPress={editResult}/>
          </View>

        </View>
      )
    }
  }

  return (
    <View style={Theme.container}>
      {mainContent()}
    </View>
  );
};

export default ResultsScreen;