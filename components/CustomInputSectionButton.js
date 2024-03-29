import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import Theme from "../Theme";

/**
 * 
 * @param {*} param0 Requires text(string), onPress(function), complete(bool)
 * @returns A button with a tick to indicate if the section is completed or not
 */
const CustomInputSectionButton = ({text, onPress, complete, unavailable}) => {

  let tick = null
  if (complete == true) {
    tick = (
      <View style={Theme.sectionTickIcon}>
        <AntDesign name="checkcircle" size={24} color="white" />
      </View>
    )
  }

  if (unavailable == true) {
    return (
      <View style={{...Theme.sectionButton, backgroundColor: Theme.colours.unavailableButton}}>
        <Text style={Theme.buttonText}>{text}</Text>
        {tick}
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={Theme.sectionButton} onPress={ () => onPress() }>
        <Text style={Theme.buttonText}>{text}</Text>
        {tick}
      </TouchableOpacity>
    );
  }
};

export default CustomInputSectionButton;