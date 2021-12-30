import React from "react";
import { Text, View } from "react-native";
import Theme from "../Theme";

const ResultsScreen = ({navigation, route}) => {

  let index = route.params.index

  return (
    <View style={Theme.container}>
      <Text>This will have the results for an estimate stored a index {index}</Text>
    </View>
  );
};

export default ResultsScreen;