import { View, Text, StatusBar } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { fetchPolygonData, handleRecommendations } from "../backend/api";
import Navbar from '../components/Navbar/Navbar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'PlantFinder'>;

type LocationObjectCoords = {
  latitude: number;
  longitude: number;
};

const PlantFinder = ({navigation}:Props) => {
  const [location, setLocation] = useState<LocationObjectCoords | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [soilData, setSoilData] = useState<any>(null);
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
      
        const ans = await fetchPolygonData(location?.latitude, location?.longitude);
        console.log("Weather data:", ans.weather);
        console.log("Soil data:", ans.soil);

        try {
          setWeatherData(ans.weather);
          setSoilData(ans.soil);
          const combinedData = {
            location: location,
            weatherData: weatherData,
            soilData: soilData,
          };
          const aiResult = await handleRecommendations(combinedData);
          console.log(aiResult)
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
        
    })();
  }, []);

  return (
    <>
      <View className="py-20 px-9">
        <Text className="font-bold text-3xl">Plant Finder</Text>
        <Text>
          {location
            ? `Latitude: ${location.latitude}\nLongitude: ${location.longitude}`
            : "Fetching location..."}
        </Text>
        <Text>
          {weatherData
            ? `Weather Data: ${weatherData.weather[0].main}`
            : "Fetching weather data..."}
        </Text>
        <Text>
          {soilData
            ? `Soil Temperature: ${soilData.t0} °K`
            : "Fetching soil temperature data..."}
        </Text>
        <StatusBar hidden={true} />
      </View>
      <Navbar navigation={navigation}/>
    </>
  );  
};

export default PlantFinder;
