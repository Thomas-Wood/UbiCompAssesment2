import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";

/**
 * 
 * @param {*} param0 Requires text(string) and onPress(function)
 * @returns A custom button
 */
const CustomButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={Theme.buttonBox} onPress={ () => onPress() }>
      <Text style={Theme.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;