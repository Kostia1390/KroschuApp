import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import { useNavigation } from "@react-navigation/native";
import WeatherWindows from "../../components/WeatherWindows";
import HeaderScreen from "../../components/HeaderScreen";

const BusScheduleScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
      <HeaderScreen title={t("busSchedule.title")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("OfficePolyova")}>
          <WeatherWindows title={`${t("bus.busOffice")}`} />
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
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BusScheduleScreen;
