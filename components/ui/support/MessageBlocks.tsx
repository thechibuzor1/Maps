import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { ThemedText } from "@/components/ThemedText";
import { DemoText } from "@/constants/Text";
import { Colors } from "@/constants/Colors";
export interface Props {
  item: DemoText;
}
const MessageBlocks = ({ item }: Props) => {
  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: item.user ? "blue" : "#D9D9D9",
            alignSelf: item.user ? "flex-end" : "flex-start",
            marginRight: item.user ? widthPercentageToDP(5) : 0,
            marginLeft: item.user ? 0 : widthPercentageToDP(5),
          },
        ]}
      >
        <ThemedText
          style={[styles.text, { color: item.user ? "#ffffff" : "#4B4B4B" }]}
        >
          {item.text}
        </ThemedText>
      </View>
      {item.user && <Text style={styles.status}>delivered</Text>}
    </>
  );
};

export default MessageBlocks;

const styles = StyleSheet.create({
  text: {
    maxWidth: widthPercentageToDP("70%"),
    fontFamily: "Lexend-Regular",
    fontWeight: "bold",
    fontSize: widthPercentageToDP("4.5%"),
    lineHeight: heightPercentageToDP(2.5),
  },

  container: {
    paddingHorizontal: widthPercentageToDP(4),
    borderRadius: widthPercentageToDP("3"),
    marginTop: heightPercentageToDP(2),
    paddingVertical: widthPercentageToDP(3),
  },
  status: {
    color: Colors.dark.border,
    alignSelf: "flex-end",
    marginRight: widthPercentageToDP(5),
    fontFamily: "Lexend-Light",
    marginTop: heightPercentageToDP(0.2),
    fontSize: widthPercentageToDP("2.7%"),
  },
});
