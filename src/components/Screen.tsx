import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";

type Props = {
  style?: StyleProp<ViewStyle>;
};
const Screen = ({ children, style }: PropsWithChildren<Props>) => {
  return <SafeAreaView style={[$.container, style]}>{children}</SafeAreaView>;
};

export default Screen;

const $ = StyleSheet.create({
  container: {
    flex: 1,
  },
});
