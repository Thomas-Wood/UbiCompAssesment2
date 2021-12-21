import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import Theme from "../Theme";

const CustomInputSectionButton = ({text, onPress, complete}) => {

  let tick = null
  if (complete == true) {
    tick = (
      <View style={Theme.sectionTickIcon}>
        <AntDesign name="checkcircle" size={24} color="white" />
      </View>
    )
  }

  return (
    <TouchableOpacity style={Theme.sectionButton} onPress={ () => onPress() }>
      <Text style={Theme.buttonText}>{text}</Text>
        {tick}
    </TouchableOpacity>
  );
};

export default CustomInputSectionButton;