import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "../Typography";
import { useTranslation } from "react-i18next";
import CloseSvg from "../../assets/icons/close.svg";
import ColorInfo1 from "../../assets/icons/colorInfo1.png";
import ColorInfo2 from "../../assets/icons/colorInfo2.png";

const ColorModal = ({ visible, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <StatusBar backgroundColor="rgba(0,0,0,0.8)" barStyle="light-content" />
        <View style={styles.modalView}>
          <View style={styles.header}>
            <View style={{ flex: 1 }} />
            <Typography
              f20
              semibold
              style={{ textAlign: "center", color: "#563187" }}
            >
              {t("color.title")}
            </Typography>
            <TouchableOpacity
              style={{ flex: 1, alignItems: "flex-end" }}
              onPress={onClose}
            >
              <CloseSvg />
            </TouchableOpacity>
          </View>
          <Image
            source={ColorInfo1}
            style={{ width: 400, height: 200 }}
            resizeMode="stretch"
          />
          <Image
            source={ColorInfo2}
            style={{ width: 420, height: 200 }}
            resizeMode="stretch"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});
export default ColorModal;
