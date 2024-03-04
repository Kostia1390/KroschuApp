import React, { useRef } from "react";
import { StyleSheet, Animated, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import HeaderScreen from "../../components/HeaderScreen";
import {
  PinchGestureHandler,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import BusPolyova from "../../../assets/Bus/busPolyova.png";

const OfficePolyovaScreen = () => {
  const { t } = useTranslation();
  const scale = useRef(new Animated.Value(1)).current;
  const lastScale = useRef(1);

  const onPinchEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
    useNativeDriver: true,
  });

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const newScale = lastScale.current * event.nativeEvent.scale;
      if (newScale < 1) {
        scale.setValue(1);
        lastScale.current = 1;
      } else {
        lastScale.current = newScale;
        scale.setValue(newScale);
      }
    }
  };

  const AnimatedImage = Animated.createAnimatedComponent(Image);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
        <HeaderScreen title={t("bus.busOfficePolyova")} />
        <PinchGestureHandler
          onGestureEvent={onPinchEvent}
          onHandlerStateChange={onPinchStateChange}
        >
          <Animated.View
            style={{
              transform: [{ scale: scale }],
            }}
          >
            <AnimatedImage
              source={BusPolyova}
              style={{ width: 400, height: "100%", resizeMode: "contain" }}
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
    alignItems: "center",
    paddingTop: 50,
  },
});

export default OfficePolyovaScreen;
