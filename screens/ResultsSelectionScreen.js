import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import CustomList from "../components/CustomList";
import Theme from "../Theme";
import { getObject } from "../tools/asyncStorageHelper";

/**
 * 
 * @param {*} param0 This screen requires the navigation object
 * @returns A screen containing a list of historical estimates and ther results
 */
const ResultsSelectionScreen = ({navigation}) => {

  let [data, changeData] = React.useState(null)

  const isFocused = useIsFocused()

  // Update the list on first load and when the screen is navigated to
  React.useEffect(() => {
    async function getSavedEstimates() {
      let savedData = await getObject('savedEstimates')
      changeData(savedData)
    }
    return getSavedEstimates()
  }, [isFocused])

  // Load the list of a message when it's empty / loading
  const loadList = () => {
    if (data == null || data.length == 0) {
      return <Text style={Theme.heading}>No estimates to show</Text>
    } else {
      return <CustomList data={data} onPress={ (index) => navigation.push('ResultsScreen', {index: index})}/>
    }
  }

  return (
    <View style={Theme.container}>
      <Text style={{...Theme.heading, paddingTop: 15}}>History</Text>
      {loadList()}
    </View>
  );
};

export default ResultsSelectionScreen;