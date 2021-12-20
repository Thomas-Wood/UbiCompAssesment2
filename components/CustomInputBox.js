import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";

const CustomInputBox = ({label, defaultValue, prefix, numeric, stateChangeFunction, onPress}) => {

  let keyboardType = 'default'
  if (numeric == true) {
    keyboardType = 'numeric'
  }

  return (
    <TouchableOpacity style={Theme.inputBox} onPress={ () => onPress() }>
      <Text style={Theme.inputLabelText}>{label}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={Theme.inputPrefixText}>{prefix}</Text>
        <TextInput
          style={Theme.inputText}
          onChangeText={stateChangeFunction}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomInputBox;