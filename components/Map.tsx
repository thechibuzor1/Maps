import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import * as Location from "expo-location";
import CustomMarker from "./ui/CustomMarker";
import BottomModal from "./ui/BottomModal";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { getDistance } from "geolib";
import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export interface location {
  latitude: number;
  longitude: number;
}

const Map = () => {
  const [myLocation, setMyLocation] = useState<location | null>();
  const [randomLocations, setRandomLocations] = useState<location[]>([]);

  const [destination, setDestination] = useState<location | null>();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const colorScheme = useColorScheme();
  const [region, setRegion] = useState<any>(null);
  const mapRef = useRef<MapView>(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const { coords } = await Location.getCurrentPositionAsync({});
        setMyLocation(coords);

        setRandomLocations(generateRandomPointsNearLocation(coords));

        const region = {
          latitude:coords.latitude,
          longitude:coords.longitude ,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        if (mapRef.current) {
          mapRef.current.animateToRegion(region, 1000);
        }
      } else {
        console.warn("Permission not granted.");
      }
    } catch (err) {
      console.error("Error getting location:", err);
    }
  };

   
  //function to generate random locations near the user's postion
  const generateRandomPointsNearLocation = (
    location: location,
    count = 7,
    range = 0.05
  ) => {
    if (!location?.latitude || !location?.longitude) {
      console.error("Invalid location provided");
      return [];
    }

    const randomPoints = [];
    const { latitude, longitude } = location;

    for (let i = 0; i < count; i++) {
      const randomLatOffset = (Math.random() - 0.5) * range; // Random offset for latitude
      const randomLngOffset = (Math.random() - 0.5) * range; // Random offset for longitude

      randomPoints.push({
        latitude: latitude + randomLatOffset,
        longitude: longitude + randomLngOffset,
      });
    }

    return randomPoints;
  };

  const getDistanceFromSourceToDestination = () => {
    return (
      getDistance(
        { latitude: myLocation!!.latitude, longitude: myLocation!!.longitude },
        { latitude: destination!!.latitude, longitude: destination!!.longitude }
      ) / 1000
    ); /* Convert to kilometer */
  };

  useEffect(() => {
    getLocation()
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        loadingEnabled
        userInterfaceStyle={colorScheme == "dark" ? "dark" : "light"}
        moveOnMarkerPress
        ref={mapRef}
        region={region}
        onRegionChangeComplete={setRegion}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsBuildings
        showsScale
        showsMyLocationButton
        showsCompass
        showsPointsOfInterest
        showsTraffic
        showsIndoorLevelPicker
      >
        {myLocation?.latitude && myLocation?.longitude && (
          <Marker
            pinColor="blue"
            coordinate={{
              longitude: myLocation?.longitude,
              latitude: myLocation?.latitude,
            }}
            title="My Location"
            description="I am here"
          />
        )}

        {randomLocations?.map((marker, index) => (
          <Marker
            onPress={() => {
              setDestination(marker);
              setIsModalVisible(true);
            }}
            title={`Random Location ${index}`}
            key={index}
            coordinate={marker}
          />
        ))}

        {myLocation && destination && (
          <Polyline
            coordinates={[myLocation, destination]}
            strokeColor="#000"
            strokeWidth={2}
          />
        )}
      </MapView>

      {myLocation && destination && isModalVisible && (
        <BottomModal snapPoints={["30%"]} setIsModalVisible={setIsModalVisible}>
          <ThemedView style={{ alignItems: "center" }}>
            <ThemedText type="subtitle">Get To Your Destination</ThemedText>

            <View style={{ marginTop: 30, flexDirection: "row" }}>
              <Ionicons name="map-outline" size={22} color={"blue"} />
              <ThemedText style={{ marginLeft: 4 }} type="defaultSemiBold">
                Random location is {getDistanceFromSourceToDestination()}km
                away.
              </ThemedText>
            </View>

            <TouchableOpacity style={styles.button}>
             <ThemedText style={{textAlign:"center"}} type="subtitle">Start Journey</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </BottomModal>
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  button: {
    backgroundColor:"blue",
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
    paddingVertical: heightPercentageToDP(1.5),
   alignItems:"center",
    alignSelf: "center",
  },
});
