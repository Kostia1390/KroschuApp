import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import { useNavigation } from "@react-navigation/native";
import HeaderScreen from "../../components/HeaderScreen";

const OfficeInfoScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <LinearGradient colors={["#ffffff", "#fafafa"]} style={styles.container}>
      <HeaderScreen title={t("officeInfo.title")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <Typography>123</Typography>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  dailyForecast: {
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    paddingBottom: 10,
  },
  lastDailyForecast: {
    borderBottomWidth: 0,
  },
});

export default OfficeInfoScreen;
