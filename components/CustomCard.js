import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";
import { AntDesign } from '@expo/vector-icons';

/**
 * 
 * @param {*} param0 Requires onPress(function), children are optional
 * @returns 
 */
const CustomCard = ({children, onPress}) => {
  return (
    <View style={Theme.customCardContainer}>
      <View style={Theme.inputInfoIcon}>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="infocirlceo" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        {children}
      </View>
    </View>
  );
};

export default CustomCard;