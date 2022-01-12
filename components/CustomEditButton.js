import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";

/**
 * 
 * @param {*} param0 Require onPress(function)
 * @returns Custom edit button
 */
const CustomEditButton = ({onPress}) => {
  return (
    <TouchableOpacity style={{...Theme.buttonBox, width: 150}} onPress={ () => onPress() }>
      <Text style={{...Theme.buttonText, fontSize: 20}}>Recalculate</Text>
    </TouchableOpacity>
  );
};

export default CustomEditButton;