import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";
import { AntDesign } from '@expo/vector-icons';

/**
 * 
 * @param {*} param0 Require onPress(function)
 * @returns Custom edit button
 */
const CustomEditButton = ({onPress}) => {
  return (
    <TouchableOpacity style={{...Theme.buttonBox, width: 100}} onPress={ () => onPress() }>
      <AntDesign name="edit" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default CustomEditButton;