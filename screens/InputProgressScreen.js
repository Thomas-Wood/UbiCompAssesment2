import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInputBox from "../components/CustomInputBox";
import Theme from "../Theme";

const InputProgressScreen = ({navigation}) => {

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={Theme.container}>

      <Text>Tap a label to see more information about it</Text>

      <CustomInputBox
        label={"Panel cost"}
        prefix={'£'} 
        defaultValue={'100'} 
        numeric={true} 
        stateChangeFunction={onChangeNumber} 
        onPress={ () => console.log('Some info on this input and what it means!')}>
      </CustomInputBox>

      <CustomButton text={"Submit"} onPress={ () => console.log("Submit Button Pressed")}/>

    </View>
  );
};

export default InputProgressScreen;