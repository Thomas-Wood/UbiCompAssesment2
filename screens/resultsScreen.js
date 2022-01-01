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

const ResultsScreen = ({navigation, route}) => {

  let [data, changeData] = React.useState(null)

  let [modalVisible, setModalVisible] = React.useState(false);
  let [modalContent, setModalContent] = React.useState("Placeholder Text");

  let index = route.params.index

  const showModal = (content) => {
    setModalContent(content)
    setModalVisible(!modalVisible)
  }

  React.useEffect(() => {
    async function getSavedEstimates() {
      let savedData = await getObject('savedEstimates')
      changeData(savedData[index])
    }
    return getSavedEstimates()
  }, [])

  const mainContent = () => {
    if (data == null) {
      return (<CustomLoadingModal
        visible={true}/>)
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
            <CustomDeleteButton onPress={() => console.log("Delete the thing!")}/>
            <CustomEditButton onPress={() => console.log("Edit the thing!")}/>
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