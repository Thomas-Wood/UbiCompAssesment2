import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";

const CustomButton = ({text, onPress}) => {
    return (
      <TouchableOpacity style={Theme.buttonBox} onPress={ () => onPress() }>
        <View>
            <Text style={Theme.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
};

export default CustomButton;