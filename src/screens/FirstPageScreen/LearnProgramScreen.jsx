import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import WeatherWindows from "../../components/WeatherWindows";
import { Typography } from "../../Typography";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import { useNavigation } from "@react-navigation/native";
import HeaderScreen from "../../components/HeaderScreen";

const LearnProgramScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
      <HeaderScreen title={t("learnProgram.title")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("SafetyProgram")}>
          <WeatherWindows title={t("safety.title")} />
        </TouchableOpacity>
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
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default LearnProgramScreen;
