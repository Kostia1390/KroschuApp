import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../Typography";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import BackArrowPurpleSvg from "../../assets/icons/backArrowPurple.svg";

const HeaderScreen = ({ title }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrowPurpleSvg width={40} height={40} />
      </TouchableOpacity>
      <Typography f24 semibold color="#563187" textAlign="center">
        {title}
      </Typography>
      <View style={{ width: 30, height: 30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HeaderScreen;
