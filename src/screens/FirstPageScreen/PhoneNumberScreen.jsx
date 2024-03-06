import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import { useNavigation } from "@react-navigation/native";
import HeaderScreen from "../../components/HeaderScreen";
import data from "../../components/data";

import CustomInput from "../../components/CustomInput";

const PhoneNumberScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const lowerCaseQuery = query.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.id.toString().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  };

  return (
    <LinearGradient colors={["#ffffff", "#fafafa"]} style={styles.container}>
      <HeaderScreen title={t("phoneNumber.title")} />
      <CustomInput placeholder="Пошук..." onSearch={handleSearch} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        {filteredData.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <Typography style={[styles.text, styles.id]}>
              {"тел: " + item.id}
            </Typography>
            <Typography f24 medium>
              {item.name}
            </Typography>
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
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  listItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#563187",
    alignItems: "center",
    justifyContent: "space-between",
  },
  id: {
    fontWeight: "700",
  },
});

export default PhoneNumberScreen;
