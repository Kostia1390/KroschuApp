import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import WeatherWindows from "../../components/WeatherWindows";
import { useNavigation } from "@react-navigation/native";

const IIShiftScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const shifts = [
    {
      title: t("shift.theory"),
      breaks: [
        `1 ${t("break.title")}: 17:10-17:20`,
        `2 ${t("break.title")}: 20:20-20:40`,
      ],
    },
    {
      title: t("shift.technical"),
      breaks: [
        `1 ${t("break.title")}: 16:50-17:00`,
        `2 ${t("break.title")}: 19:10-19:30`,
      ],
    },
    {
      title: "Pagoda",
      breaks: [
        `1 ${t("break.title")}: 16:50-17:00`,
        `2 ${t("break.title")}: 19:15-19:35`,
      ],
    },
    {
      title: "08704(5,6,7,8)",
      breaks: [
        `1 ${t("break.title")}: 16:40-16:50`,
        `2 ${t("break.title")}: 19:00-19:20`,
      ],
    },
    {
      title: "87009",
      breaks: [
        `1 ${t("break.title")}: 17:20-17:40`,
        `2 ${t("break.title")}: 21:00-21:10`,
      ],
    },
    {
      title: "087027,08729",
      breaks: [
        `1 ${t("break.title")}: 16:30-16:40`,
        `2 ${t("break.title")}: 18:50-19:10`,
      ],
    },
    {
      title: "12TIGM",
      breaks: [
        `1 ${t("break.title")}: 16:50-17:00`,
        `2 ${t("break.title")}: 19:20-19:40`,
      ],
    },
    {
      title: "087002",
      breaks: [
        `1 ${t("break.title")}: 17:00-17:10`,
        `2 ${t("break.title")}: 19:40-20:00`,
      ],
    },
    {
      title: "11TIGM",
      breaks: [
        `1 ${t("break.title")}: 18:30-18:50`,
        `2 ${t("break.title")}: 21:10-21:20`,
      ],
    },
    {
      title: "087053,087063,  087041",
      breaks: [
        `1 ${t("break.title")}: 17:10-17:30`,
        `2 ${t("break.title")}: 21:00-21:10`,
      ],
    },
    {
      title: "21TIGI",
      breaks: [
        `1 ${t("break.title")}: 17:10-17:20`,
        `2 ${t("break.title")}: 20:30-20:50`,
      ],
    },
    {
      title: "22TIGI",
      breaks: [
        `1 ${t("break.title")}: 18:40-19:00`,
        `2 ${t("break.title")}: 21:10-21:20`,
      ],
    },
    {
      title: "08702(3,4,5)",
      breaks: [
        `1 ${t("break.title")}: 17:00-17:10`,
        `2 ${t("break.title")}: 19:50-20:10`,
      ],
    },
    {
      title: "087022, 20TIGP",
      breaks: [
        `1 ${t("break.title")}: 17:00-17:10`,
        `2 ${t("break.title")}: 19:30-19:50`,
      ],
    },
    {
      title: "087044",
      breaks: [
        `1 ${t("break.title")}: 18:00-18:20`,
        `2 ${t("break.title")}: 20:50-21:00`,
      ],
    },
    {
      title: "087006",
      breaks: [
        `1 ${t("break.title")}: 17:30-17:50`,
        `2 ${t("break.title")}: 20:30-20:40`,
      ],
    },
    {
      title: "087005",
      breaks: [
        `1 ${t("break.title")}: 18:10-18:30`,
        `2 ${t("break.title")}: 21:20-21:30`,
      ],
    },
    {
      title: "087003",
      breaks: [
        `1 ${t("break.title")}: 18:20-18:40`,
        `2 ${t("break.title")}: 21:00-21:10`,
      ],
    },
    {
      title: "Schneiderei I",
      breaks: [
        `1 ${t("break.title")}: 17:25-17:45`,
        `2 ${t("break.title")}: 20:25-20:35`,
      ],
    },
    {
      title: "Schneiderei II",
      breaks: [
        `1 ${t("break.title")}: 17:55-18:15`,
        `2 ${t("break.title")}: 20:55-21:05`,
      ],
    },
    {
      title: "VK",
      breaks: [
        `1 ${t("break.title")}: 17:40-18:00`,
        `2 ${t("break.title")}: 20:40-20:50`,
      ],
    },
  ];
  return (
    <LinearGradient colors={["#ffffff", "#fafafa"]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowPurpleSvg width={40} height={40} />
        </TouchableOpacity>
        <Typography f24 semibold color="#563187" textAlign="center">
          {`II ${t("shift.title")}`}
        </Typography>
        <View style={{ width: 30, height: 30 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {shifts.map((shift, index) => (
          <View key={shift.title}>
            <Typography
              f36
              bold
              color="#563187"
              marginTop={20}
              textAlign="center"
            >
              {shift.title}
            </Typography>
            {shift.breaks.map((brk, brkIndex) => (
              <Typography
                key={`${shift.title}-${brkIndex}`}
                f24
                semibold
                color="#563187"
                marginTop={20}
                textAlign="center"
              >
                {brk}
              </Typography>
            ))}

            {index < shifts.length - 1 && <View style={styles.lineStyle} />}
          </View>
        ))}
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
  lineStyle: {
    borderBottomColor: "#563187",
    borderBottomWidth: 10,
    borderRadius: 40,
    width: "100%",
    marginTop: 30,
  },
});

export default IIShiftScreen;
