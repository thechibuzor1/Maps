import { SafeAreaView, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedSafeAreaView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[{ backgroundColor }, { paddingTop: insets.top, flex: 1 }, style]}
      {...otherProps}
    />
  );
}
