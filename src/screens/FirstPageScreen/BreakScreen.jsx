import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import WeatherWindows from "../../components/WeatherWindows";
import { useNavigation } from "@react-navigation/native";
import HeaderScreen from "../../components/HeaderScreen";

const BreakScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <LinearGradient colors={["#ffffff", "#fafafa"]} style={styles.container}>
      <HeaderScreen title={t("break.title")} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("IShift")}>
          <WeatherWindows title={`I ${t("shift.title")}`} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("IIShift")}>
          <WeatherWindows title={`II ${t("shift.title")}`} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("IIIShift")}>
          <WeatherWindows title={`III ${t("shift.title")}`} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NShift")}>
          <WeatherWindows title={`N ${t("shift.title")}`} />
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
  // lineStyle: {
  //   borderBottomColor: '#563187',
  //   borderBottomWidth: 10,
  //   borderRadius:40,
  //   width: '100%',
  //   marginTop:60
  // },
});

export default BreakScreen;
