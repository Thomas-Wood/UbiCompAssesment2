import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";
import { AntDesign } from '@expo/vector-icons';

/**
 * 
 * @param {*} param0 Require onPress(function)
 * @returns A custom delete button
 */
const CustomDeleteButton = ({onPress}) => {
  return (
    <TouchableOpacity style={{...Theme.buttonBox, width: 100}} onPress={ () => onPress() }>
      <AntDesign name="delete" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default CustomDeleteButton;