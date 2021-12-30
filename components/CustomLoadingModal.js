import React from "react";
import { Pressable, Text, View, Modal, Image } from "react-native";
import Theme from "../Theme";

const CustomLoadingModal = ({visible}) => {
  return (
    <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
        >
        <View style={Theme.modalContainerOuter}>
            <View style={Theme.modalContainerInner}>
              <Text style={Theme.modalText}>Loading</Text>
              <Image source={require('../assets/sunLoading.gif')} />
            </View>
        </View>
    </Modal>
  );
};

export default CustomLoadingModal;