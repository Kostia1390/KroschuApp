import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from 'react-i18next';
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import WeatherWindows from "../../components/WeatherWindows";
import { useNavigation } from "@react-navigation/native";

const NShiftScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();


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
        {`N ${t('shift.title')}`}
        </Typography>
        <View style={{ width: 30, height: 30 }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >

       <Typography f36 semibold color="#563187" marginTop={180} textAlign="center">1 Перерва:   12:20-12:40</Typography>
       <Typography f36 semibold color="#563187" marginTop={20} textAlign="center">2 Перерва:   15:20-15:30</Typography>




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

export default NShiftScreen;
