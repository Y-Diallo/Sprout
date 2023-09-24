import { View, Text, StatusBar } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

type LocationObjectCoords = {
  latitude: number;
  longitude: number;
};

const Landing = () => {
  const [location, setLocation] = useState<LocationObjectCoords | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      console.log(
        "Latitude: " +
          loc.coords.latitude +
          " Longitude: " +
          loc.coords.longitude
      );
    })();
  }, []);

  return (
    <View className="py-20 px-9">
      <Text className="font-bold text-3xl">Plant Finder</Text>
      <Text>
        {location
          ? `Latitude: ${location.latitude}\nLongitude: ${location.longitude}`
          : "Fetching location..."}
      </Text>
      <StatusBar hidden={true} />
    </View>
  );
};

export default Landing;
