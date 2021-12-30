import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";

const ResultsSelectionScreen = ({navigation}) => {
  return (
    <View style={Theme.container}>
      <Text>This will have a list of saved estimates</Text>
      <CustomButton
        text='test button'
        onPress={() => navigation.push('ResultsScreen', {index: 0})}/>
    </View>
  );
};

export default ResultsSelectionScreen;