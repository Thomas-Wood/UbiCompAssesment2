import React from "react";
import { Text, View } from "react-native";
import Theme from "../Theme";

const LocationSelectionScreen = ({navigation}) => {
  return (
    <View style={Theme.container}>
      <Text>Please select your location</Text>

      {/* <CustomInputBox
        label={"Panel cost"}
        prefix={'£'} 
        defaultValue={'100'} 
        numeric={true} 
        stateChangeFunction={onChangeNumber} 
        onPress={ () => console.log('Some info on this input and what it means!')}
      /> */}

    </View>
  );
};

export default LocationSelectionScreen;