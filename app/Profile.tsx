import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Colors } from "@/constants/Colors";

const Profile = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemedView>
      <ScrollView   
       showsVerticalScrollIndicator={false}>
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.profileImage}
        />

        <ThemedText
          type="subtitle"
          style={{
            marginTop: heightPercentageToDP("3%"),
            marginLeft: widthPercentageToDP(5),
          }}
        >
          First Name<Text style={{ color: "#FF0000" }}>*</Text>
        </ThemedText>
        <TextInput
          placeholder="John"
          placeholderTextColor={Colors[colorScheme ?? "light"].border}
          style={[
            styles.textInput,
            {
              borderColor: Colors[colorScheme ?? "light"].border,
              color: Colors[colorScheme ?? "light"].text,
            },
          ]}
        />
        <ThemedText
          type="subtitle"
          style={{
            marginTop: heightPercentageToDP("3%"),
            marginLeft: widthPercentageToDP(5),
          }}
        >
          Last Name<Text style={{ color: "#FF0000" }}>*</Text>
        </ThemedText>
        <TextInput
          placeholder="Jones"
          placeholderTextColor={Colors[colorScheme ?? "light"].border}
          style={[
            styles.textInput,
            {
              borderColor: Colors[colorScheme ?? "light"].border,
              color: Colors[colorScheme ?? "light"].text,
            },
          ]}
        />
        <ThemedText
          type="subtitle"
          style={{
            marginTop: heightPercentageToDP("3%"),
            marginLeft: widthPercentageToDP(5),
          }}
        >
          Email<Text style={{ color: "#FF0000" }}>*</Text>
        </ThemedText>
        <TextInput
          placeholder="example@email.com"
          placeholderTextColor={Colors[colorScheme ?? "light"].border}
          style={[
            styles.textInput,
            {
              borderColor: Colors[colorScheme ?? "light"].border,
              color: Colors[colorScheme ?? "light"].text,
            },
          ]}
        />

        <TouchableOpacity style={styles.button}>
          <ThemedText style={{ textAlign: "center" }} type="subtitle">
            Save
          </ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    marginTop: heightPercentageToDP(10),
    width: widthPercentageToDP(90),
    paddingVertical: heightPercentageToDP(1.5),
    alignItems: "center",
    alignSelf: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 9999,
  },
  textInput: {
    alignSelf: "center",
    borderRadius: widthPercentageToDP("9%"),
    borderWidth: 1,
    marginTop: 8,
    width: widthPercentageToDP("90%"),
    height: heightPercentageToDP("6%"),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(27, 32, 29, 0.10)",
    fontFamily: "Lexend-Regular",
    fontSize: widthPercentageToDP("4%"),
    padding: widthPercentageToDP("3%"),
    paddingTop: widthPercentageToDP("1%"),
    paddingBottom: widthPercentageToDP("1%"),
  },
});
