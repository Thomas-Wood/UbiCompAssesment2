import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import Theme from "../Theme";

/**
 * 
 * @param {*} param0 Requires label(string), defaultValue(string/number), prefix(string), numeric(bool), stateChangeFunction(function), onpress(function)
 * @returns A custom input box
 */
const CustomInputBox = ({label, defaultValue, prefix, numeric, stateChangeFunction, onPress}) => {

  let keyboardType = 'default'
  if (numeric == true) {
    keyboardType = 'numeric'
  }

  return (
    <View style={Theme.inputBox}>
      <Text style={Theme.inputLabelText}>{label}</Text>
      <View style={Theme.inputInfoIcon}>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="infocirlceo" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={Theme.row}>
        <Text style={Theme.inputPrefixText}>{prefix}</Text>
        <TextInput
          style={Theme.inputText}
          onChangeText={stateChangeFunction}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default CustomInputBox;