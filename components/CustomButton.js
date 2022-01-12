import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";

/**
 * 
 * @param {*} param0 Requires text(string) and onPress(function)
 * @returns A custom button
 */
const CustomButton = ({text, onPress, unavailable}) => {
  if (unavailable == true) {
    return (
      <View style={{...Theme.buttonBox, backgroundColor: Theme.colours.unavailableButton}}>
        <Text style={Theme.buttonText}>{text}</Text>
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={Theme.buttonBox} onPress={ () => onPress() }>
        <Text style={Theme.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;