import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import Theme from "../Theme";

const CustomMultipleChoice = ({label, options, currentState, stateChangeFunction, onPress}) => {

  const generateOptions = () => {
    let renderedOptions = []
    for (let i=0; i<options.length; i++) {
      let selectedIcon = null
      if (i == currentState) {
        selectedIcon = (
          <View style={Theme.multipleChoiceTickIcon}>
            <AntDesign name="checkcircle" size={24} color="white" />
          </View>
        )
      }
      renderedOptions.push(
        <TouchableOpacity onPress={() => {stateChangeFunction(i)}} key={i}>
          <View style={Theme.multipleChoiceRow}>
            <Text style={Theme.multipleChoiceText}>{options[i]}</Text>
            {selectedIcon}
          </View>
        </TouchableOpacity>
      )
    }
    return renderedOptions
  }

  return (
    <View style={Theme.multipleChoiceInputBox}>
      <View style={{alignItems:'center'}}>
        <Text style={Theme.inputLabelText}>{label}</Text>
      </View>
      <View style={Theme.inputInfoIcon}>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="infocirlceo" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {generateOptions()}
    </View>
  );
};

export default CustomMultipleChoice;