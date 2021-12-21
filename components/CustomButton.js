import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";

const CustomButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={Theme.buttonBox} onPress={ () => onPress() }>
      <Text style={Theme.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;