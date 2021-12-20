import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Theme from "../Theme";

const InputProgressScreen = ({navigation}) => {
    return (
      <View style={Theme.container}>
        <Text>This screen will have the progress sections for inputs</Text>
        <CustomButton text={"Button Text"} onPress={ () => console.log("Button Pressed")}/>
      </View>
    );
};

export default InputProgressScreen;