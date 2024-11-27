import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import MessageBlocks from "@/components/ui/support/MessageBlocks";
import { ThemedView } from "@/components/ThemedView";
import ButtomField from "@/components/ui/support/ButtomField";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { demoTexts } from "@/constants/Text";
import { DemoText } from "../constants/Text";

interface Props {
  item: DemoText;
  index: number;
}

const Support = () => {
  const flatListRef = useRef(null);
  const renderItem = ({ item, index }: Props) => {
    return <MessageBlocks item={item} key={index} />;
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <FlatList
        ListFooterComponent={() => <View style={styles.space} />}
        style={styles.body}
        ref={flatListRef}
        data={demoTexts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <ButtomField />
    </ThemedView>
  );
};

export default Support;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  space: {
    height: heightPercentageToDP(2),
  },
});
