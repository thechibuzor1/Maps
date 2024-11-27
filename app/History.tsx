import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface record {
  id: number;
  distance: number;
  time: number;
}

const History = () => {
  const records = [
    {
      id: 1,
      distance: 5,
      time: 40,
    },
    { id: 2, distance: 13, time: 80 },
    { id: 3, distance: 53, time: 60 },
    { id: 4, distance: 73, time: 150 },
    { id: 5, distance: 33, time: 90 },
  ];

  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: widthPercentageToDP(2),
          paddingTop: heightPercentageToDP(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText type="default">Today</ThemedText>

        {records.map((item: record) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              padding: widthPercentageToDP(4),
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/maps.png")}
              style={styles.map}
            />
            <View style={{ marginLeft: 8 }}>
              <ThemedText
                style={{ fontSize: widthPercentageToDP(5), width: "90%" }}
                type="defaultSemiBold"
              >
                Trip from point to random location
              </ThemedText>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 4,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="map-outline"
                  size={widthPercentageToDP(5)}
                  color={"blue"}
                />
                <ThemedText
                  style={{ marginLeft: 4, fontSize: widthPercentageToDP(4) }}
                  type="defaultSemiBold"
                >
                  <Text style={{ color: Colors.dark.border }}>Distance:</Text>{" "}
                  {item.distance}km
                </ThemedText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 4,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="time-outline"
                  size={widthPercentageToDP(5)}
                  color={"blue"}
                />
                <ThemedText
                  style={{ marginLeft: 4, fontSize: widthPercentageToDP(4) }}
                  type="defaultSemiBold"
                >
                  <Text style={{ color: Colors.dark.border }}>Duration:</Text>{" "}
                  {item.distance}mins
                </ThemedText>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default History;

const styles = StyleSheet.create({
  map: {
    height: heightPercentageToDP(10),
    width: heightPercentageToDP(10),
    borderRadius: widthPercentageToDP(2),
  },
});
