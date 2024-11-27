import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

const ButtomField = () => {

  return (
    <KeyboardAvoidingView behavior="height">
      <View style={styles.container}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Ask me anything ..."
        />
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
           <Ionicons name="send-outline" size={widthPercentageToDP(6)} color={"white"}/>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

export default ButtomField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: heightPercentageToDP(2),
    backgroundColor: "#fff",
  },
  btn: {
    alignSelf: "flex-end",
    backgroundColor: "blue",
    padding: widthPercentageToDP("3"),
    borderRadius: widthPercentageToDP("3"),
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#F1EFEF",
    flex: 1,
    marginRight: widthPercentageToDP(3),
    padding: widthPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(4),
    fontFamily: "Lexend-Regular",
    fontSize: widthPercentageToDP("4.5%"),
    borderRadius: widthPercentageToDP("3"),
  },
});
