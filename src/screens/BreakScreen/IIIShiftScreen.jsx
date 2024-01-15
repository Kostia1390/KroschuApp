import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from 'react-i18next';
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import WeatherWindows from "../../components/WeatherWindows";
import { useNavigation } from "@react-navigation/native";

const IIIShiftScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const shifts = [
    {
      title: "Технічний відділ, MUST01, Склад, QS-WE",
      breaks: ["1 Перерва: 01:10-01:20", "2 Перерва: 03:10-03:30"],
    },
    {
      title: "Pagoda",
      breaks: ["1 Перерва: 01:10-01:20", "2 Перерва: 03:15-03:35"],
    },
    {
      title: "08704(5,6,7,8)",
      breaks: ["1 Перерва: 00:40-00:50", "2 Перерва: 03:00-03:20"],
    }, {
      title: "87009",
      breaks: ["1 Перерва: 01:20-01:40", "2 Перерва: 05:00-05:10"],
    },
    {
      title: "087027,08729",
      breaks: ["1 Перерва: 00:30-00:40", "2 Перерва: 02:50-03:10"],
    },
    {
      title: "12TIGM",
      breaks: ["1 Перерва: 00:50-01:00", "2 Перерва: 03:20-03:40"],
    },
    {
      title: "087002",
      breaks: ["1 Перерва: 01:00-01:10", "2 Перерва: 03:40-04:00"],
    },
    {
      title: "11TIGM",
      breaks: ["1 Перерва: 02:30-02:50", "2 Перерва: 03:40-04:00"],
    },
    {
      title: "087053,087063,  087041",
      breaks: ["1 Перерва: 01:10-01:30", "2 Перерва: 05:00-05:10"],
    },
    {
      title: "21TIGI",
      breaks: ["1 Перерва: 01:10-01:20", "2 Перерва: 04:30-04:50"],
    },
    {
      title: "22TIGI",
      breaks: ["1 Перерва: 02:40-03:00", "2 Перерва: 05:10-05:20"],
    },
    {
      title: "08702(3,4,5)",
      breaks: ["1 Перерва: 01:00-01:10", "2 Перерва: 03:50-04:10"],
    },
    {
      title: "087022, 20TIGP",
      breaks: ["1 Перерва: 00:50-01:00", "2 Перерва: 03:30-03:50"],
    },
    {
      title: "087044",
      breaks: ["1 Перерва: 02:00-02:20", "2 Перерва: 04:50-05:00"],
    },
    {
      title: "087006",
      breaks: ["1 Перерва: 01:30-01:50", "2 Перерва: 04:30-04:40"],
    },
    {
      title: "087005",
      breaks: ["1 Перерва: 02:10-02:30", "2 Перерва: 05:10-05:20"],
    },
    {
      title: "087003",
      breaks: ["1 Перерва: 02:20-02:40", "2 Перерва: 05:00-05:10"],
    },
    {
      title: "Schneiderei I",
      breaks: ["1 Перерва: 01:25-01:45", "2 Перерва: 04:25-04:35"],
    },
    {
      title: "Schneiderei II",
      breaks: ["1 Перерва: 01:55-02:15", "2 Перерва: 04:55-05:05"],
    },
    {
      title: "VK",
      breaks: ["1 Перерва: 01:40-02:00", "2 Перерва: 04:40-04:50"],
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
        {`III ${t('shift.title')}`}
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

export default IIIShiftScreen;
