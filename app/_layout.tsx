import "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const DrawerLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <StatusBar style={colorScheme === "light" ? "dark" : "light"} />

          <Drawer>
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: "Map",
                headerTitle: "Map",
                drawerIcon: ({ size, color }) => (
                  <Ionicons name="map-outline" size={size} color={color} />
                ),
              }}
            />

            <Drawer.Screen
              name="Profile"
              options={{
                drawerLabel: "Profile",
                headerTitle: "Profile",
                drawerIcon: ({ size, color }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
              }}
            />

            <Drawer.Screen
              name="History"
              options={{
                drawerLabel: "History",
                headerTitle: "History",
                drawerIcon: ({ size, color }) => (
                  <Ionicons name="time-outline" size={size} color={color} />
                ),
              }}
            />

            <Drawer.Screen
              name="Support"
              options={{
                drawerLabel: "Support",
                headerTitle: "Support",
                drawerIcon: ({ size, color }) => (
                  <Ionicons
                    name="help-circle-outline"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
          </Drawer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default DrawerLayout;
