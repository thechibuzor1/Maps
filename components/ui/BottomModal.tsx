import { StyleSheet, useColorScheme } from "react-native";
import React, { PropsWithChildren, useCallback, useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";

type Props = PropsWithChildren<{
  snapPoints?: string[];
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  backdrop?: boolean;
}>;

export default function BottomModal({
  snapPoints,
  backdrop,
  children,
  setIsModalVisible,
}: Props) {
  const colorScheme = useColorScheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const renderBackdrop = useCallback(
    (backdropProps: any) =>
      backdrop && (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...backdropProps}
        />
      ),
    []
  );
  const snap = useMemo(() => (snapPoints ? snapPoints : ["50%"]), []);

  return (
    <BottomSheet
      index={0}
      enablePanDownToClose
      snapPoints={snap}
      ref={bottomSheetRef}
      onClose={() => setIsModalVisible(false)}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
      handleIndicatorStyle={{
        backgroundColor: Colors[colorScheme ?? "light"].text,
      }}
    >
      <BottomSheetView
        style={[
          styles.modalcontentContainer,
          {
            backgroundColor: Colors[colorScheme ?? "light"].background,
          },
        ]}
      >
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  modalcontentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
