import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Typography } from "../../Typography";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import { useNavigation } from "@react-navigation/native";
import HeaderScreen from "../../components/HeaderScreen";

const SafetyProgramScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
      <HeaderScreen title={t("safety.title")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <Typography>234</Typography>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  hourlyWeatherItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingVertical: 10,
  },
  firstItem: {
    marginTop: 10,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});

export default SafetyProgramScreen;
