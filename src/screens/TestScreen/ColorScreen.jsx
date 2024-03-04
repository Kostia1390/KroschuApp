import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Text,
} from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import { useNavigation } from "@react-navigation/native";
import InfoSvg from "../../../assets/icons/info.svg";
import ColorModal from "../../components/ColorModal";
import HeaderScreen from "../../components/HeaderScreen";

const colors = [
  { id: 1, name: "sw (schwarz)", translation: "чорний" },
  { id: 2, name: "ws (weiß)", translation: "білий" },
  { id: 3, name: "gr (grau)", translation: "сірий" },
  { id: 4, name: "ge (gelb)", translation: "жовтий" },
  { id: 5, name: "gn (grün)", translation: "зелений" },
  { id: 6, name: "vi (violett)", translation: "фіолетовий" },
  { id: 7, name: "nt (natur)", translation: "природній" },
  { id: 8, name: "rt (rot)", translation: "червоний" },
  { id: 9, name: "rs/ro (rosa)", translation: "рожевий" },
  { id: 10, name: "or (orange)", translation: "оранжевий" },
  { id: 11, name: "bl (blau)", translation: "синій" },
  { id: 12, name: "br (braun)", translation: "прозорий" },
  { id: 13, name: "tr (transparent)", translation: "прозорий" },
  { id: 13, name: "tq (türkis)", translation: "бірюзовий" },
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const ColorScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [colorModal, setColorModal] = useState(false);

  const checkAnswer = () => {
    if (
      userInput.trim().toLowerCase() === currentColor.translation.toLowerCase()
    ) {
      setResult("Правильно!");
    } else {
      setResult("Невірно. Спробуй ще раз.");
    }
  };

  const nextColor = () => {
    setCurrentColor(getRandomColor());
    setUserInput("");
    setResult("");
  };

  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
      <HeaderScreen title={t("color.title")} />
      <View style={styles.settingsWrapper}>
        <TouchableOpacity
          onPress={() => setColorModal(true)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <InfoSvg width={40} height={40} />
          <Typography f20 medium color={"#fff"} style={{ marginLeft: 20 }}>
            Підсказка по кольорам
          </Typography>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 100 }}
      >
        <Typography
          f24
          semibold
          color="#563187"
          textAlign="center"
          style={{ marginBottom: 20 }}
        >
          Який це колір "{currentColor.name}" ?
        </Typography>
        <TextInput
          style={styles.input}
          onChangeText={setUserInput}
          value={userInput}
          placeholder="Введіть текст"
          autoCapitalize="none"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 40,
          }}
        >
          <TouchableOpacity onPress={checkAnswer} style={styles.button}>
            <Typography f22 normal color={"#fff"}>
              Перевірити
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity onPress={nextColor} style={styles.button}>
            <Typography f22 normal color={"#fff"}>
              Наступний колір
            </Typography>
          </TouchableOpacity>
        </View>
        {result ? (
          <Typography
            style={[
              styles.result,
              result === "Правильно!"
                ? styles.resultSuccess
                : styles.resultError,
            ]}
          >
            {result}
          </Typography>
        ) : null}
      </ScrollView>
      <ColorModal visible={colorModal} onClose={() => setColorModal(false)} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  settingsWrapper: {
    backgroundColor: "#563187",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: "#563187",
    padding: 10,
    borderRadius: 10,
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    borderColor: "#563187",
  },
  result: { textAlign: "center", marginTop: 20 },
  resultSuccess: {
    color: "green",
  },
  resultError: {
    color: "red",
  },
});

export default ColorScreen;
