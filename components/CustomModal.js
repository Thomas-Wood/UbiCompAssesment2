import React from "react";
import { Pressable, Text, View, Modal } from "react-native";
import Theme from "../Theme";

const CustomModal = ({content, visible, changeVisibleFunction}) => {
  return (
    <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            changeVisibleFunction(!modalVisible);
          }}
        >
        <View style={Theme.modalContainerOuter}>
            <View style={Theme.modalContainerInner}>
                <Text style={Theme.modalText}>{content}</Text>
                <Pressable
                style={{...Theme.buttonBox, width: '90%'}}
                onPress={() => changeVisibleFunction(!visible)}
                >
                <Text style={Theme.buttonText}>Close</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
  );
};

export default CustomModal;