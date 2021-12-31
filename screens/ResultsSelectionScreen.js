import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import CustomList from "../components/CustomList";
import Theme from "../Theme";
import { getObject } from "../tools/asyncStorageHelper";

const ResultsSelectionScreen = ({navigation}) => {

  let [data, changeData] = React.useState(null)

  const isFocused = useIsFocused()

  React.useEffect(() => {
    async function getSavedEstimates() {
      let savedData = await getObject('savedEstimates')
      changeData(savedData)
    }
    return getSavedEstimates()
  }, [isFocused])

  const loadList = () => {
    if (data == null) {
      return <Text style={Theme.heading}>Loading</Text>
    } else if (data == []) {
      return <Text style={Theme.heading}>No estimates have been saved yet</Text>
    } else {
      return <CustomList data={data} onPress={ (index) => navigation.push('ResultsScreen', {index: index})}/>
    }
  }

  return (
    <View style={Theme.container}>
      <Text style={{...Theme.heading, paddingTop: 15}}>Saved Estimates</Text>
      {loadList()}
    </View>
  );
};

export default ResultsSelectionScreen;