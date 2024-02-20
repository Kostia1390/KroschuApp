import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from 'react-i18next';
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import WeatherWindows from "../../components/WeatherWindows";
import { useNavigation } from "@react-navigation/native";

const IShiftScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const shifts = [
    {
      title: t("shift.theory"),
      breaks: [`1 ${t("break.title")}: 09:00-09:20`, `2 ${t("break.title")}: 12:20-12:40`, ],
    },
    {
      title: t("shift.technical"),
      breaks: [`1 ${t("break.title")}: 10:00-10:20`, `2 ${t("break.title")}: 13:00-13:10`],
    },
    {
      title: "Pagoda",
      breaks: [`1 ${t("break.title")}: 10:05-10:25`, `2 ${t("break.title")}: 13:00-13:10`],
    },
    {
      title: "08704(5,6,7,8)",
      breaks: [`1 ${t("break.title")}: 08:40-08:50`, `2 ${t("break.title")}: 11:00-11:20`],
    }, {
      title: "087009",
      breaks: [`1 ${t("break.title")}: 09:20-09:40`, `2 ${t("break.title")}: 13:20-13:30`],
    },
    {
      title: "087027,08729",
      breaks: [`1 ${t("break.title")}: 08:30-08:40`, `2 ${t("break.title")}: 10:50-11:10`],
    },
    {
      title: "12TIGM",
      breaks: [`1 ${t("break.title")}: 08:50-09:00`, `2 ${t("break.title")}: 11:20-11:40`],
    },
    {
      title: "087002",
      breaks: [`1 ${t("break.title")}: 09:10-09:2`, `2 ${t("break.title")}: 11:40-12:00`],
    },
    {
      title: "11TIGM",
      breaks: [`1 ${t("break.title")}: 10:30-10:50`, `2 ${t("break.title")}: 13:10-13:20`],
    },
    {
      title: "087053,087063,  087041",
      breaks: [`1 ${t("break.title")}: 09:10-09:30`, `2 ${t("break.title")}: 13:00-13:10`],
    },
    {
      title: "21TIGI",
      breaks: [`1 ${t("break.title")}: 09:10-09:20`, `2 ${t("break.title")}: 12:30-12:50`],
    },
    {
      title: "22TIGI",
      breaks: [`1 ${t("break.title")}: 10:40-11:00`, `2 ${t("break.title")}: 13:10-13:20`],
    },
    {
      title: "08702(3,4,5)",
      breaks: [`1 ${t("break.title")}: 09:00-09:10`, `2 ${t("break.title")}: 11:10-11:30`],
    },
    {
      title: "087022, 20TIGP",
      breaks: [`1 ${t("break.title")}: 08:50-09:00`, `2 ${t("break.title")}: 11:30-11:50`],
    },
    {
      title: "087044",
      breaks: [`1 ${t("break.title")}: 09:00-09:20`, `2 ${t("break.title")}: 12:50-13:00`],
    },
    {
      title: "087006",
      breaks: [`1 ${t("break.title")}: 09:30-09:50`, `2 ${t("break.title")}: 12:30-12:40`],
    },
    {
      title: "087005",
      breaks: [`1 ${t("break.title")}: 10:10-10:30`, `2 ${t("break.title")}: 13:10-13:20`],
    },
    {
      title: "087003",
      breaks: [`1 ${t("break.title")}: 10:20-10:40`, `2 ${t("break.title")}: 13:00-13:10`],
    },
    {
      title: "Schneiderei I",
      breaks: [`1 ${t("break.title")}: 09:25-09:45`, `2 ${t("break.title")}: 12:25-12:35`],
    },
    {
      title: "Schneiderei II",
      breaks: [`1 ${t("break.title")}: 09:55-10:15`, `2 ${t("break.title")}: 12:55-13:05`],
    },
    {
      title: "VK",
      breaks: [`1 ${t("break.title")}: 09:40-10:00`, `2 ${t("break.title")}: 12:40-12:50`],
    },
    {
      title: "Must (F)",
      breaks: [`1 ${t("break.title")}: 09:35-09:55`, `2 ${t("break.title")}: 12:35-12:45`],
    },
  ];
  return (
    <LinearGradient
      colors={ ["#ffffff", "#fafafa"]}
      style={styles.container}
    >
         <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrowPurpleSvg width={40} height={40} />
        </TouchableOpacity>
        <Typography f24 semibold color="#563187" textAlign="center">
        {`I ${t('shift.title')}`}
        </Typography>
        <View style={{ width: 30, height: 30 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
      {shifts.map((shift, index) => (
  <View key={shift.title}>
    <Typography f36 bold color="#563187" marginTop={20} textAlign="center">{shift.title}</Typography>
    {shift.breaks.map((brk, brkIndex) => (
  <Typography
    key={`${shift.title}-${brkIndex}`} f24 semibold color="#563187"  marginTop={20} textAlign="center">
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
    borderBottomColor: '#563187', 
    borderBottomWidth: 10,
    borderRadius:40,  
    width: '100%', 
    marginTop:30
  },
});

export default IShiftScreen;
