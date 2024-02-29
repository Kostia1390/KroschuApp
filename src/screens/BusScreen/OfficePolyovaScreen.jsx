import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image,
} from "react-native";
import { Typography } from "../../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import BackArrowPurpleSvg from "../../../assets/icons/backArrowPurple.svg";
import { useNavigation } from "@react-navigation/native";
import BusPolyova from "../../../assets/Bus/busPolyova.png";
import {
  PinchGestureHandler,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const OfficePolyovaScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const onPinchEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
    useNativeDriver: true,
  });
  const onPanEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX, translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
    }
  };

  const onPanStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      translateX.flattenOffset();
      translateY.flattenOffset();
    }
  };

  const AnimatedImage = Animated.createAnimatedComponent(Image);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowPurpleSvg width={40} height={40} />
          </TouchableOpacity>
          <Typography f24 semibold color="#563187" textAlign="center">
            {t("bus.busOfficePolyova")}
          </Typography>
          <View style={{ width: 30, height: 30 }} />
        </View>

        <PinchGestureHandler
          onGestureEvent={onPinchEvent}
          onHandlerStateChange={onPinchStateChange}
        >
          <Animated.View
            style={{
              transform: [
                { scale: scale },
                { translateX: translateX },
                { translateY: translateY },
              ],
            }}
          >
            <AnimatedImage
              source={BusPolyova}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
                bottom: 40,
              }}
            />
          </Animated.View>
        </PinchGestureHandler>
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default OfficePolyovaScreen;
