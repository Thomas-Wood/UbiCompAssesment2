import React from "react";
import { Text, View } from "react-native";
import Theme from "../Theme";
import { getObject, storeObject } from "../tools/asyncStorageHelper";

const ResultsScreen = ({navigation, route}) => {

  let [data, changeData] = React.useState(null)

  let index = route.params.index

  React.useEffect(() => {
    async function getSavedEstimates() {
      let savedData = await getObject('savedEstimates')
      changeData(savedData[index])
    }
    return getSavedEstimates()
  }, [])

  console.log('Loading page with this data: ' + data['results']['kwhGeneratedPerYear'])

  return (
    <View style={Theme.container}>
      <Text>This will have the results for an estimate stored a index {index}</Text>
    </View>
  );
};

export default ResultsScreen;