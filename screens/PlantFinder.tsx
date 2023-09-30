import * as Location from "expo-location";
import { useEffect, useState } from "react";
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { fetchPolygonData, handleRecommendations } from "../backend/api";


const PlantFinder = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Plant Finder</Text>
        <Text style={styles.headerSubtitle}>Here are your recommendations</Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1553025299-0d3f63d5d49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
            }}
            style={styles.cardImage}
            alt="Plant 1"
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1445510491599-c391e8046a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
            }}
            style={styles.cardImage}
            alt="Plant 2"
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1651012491603-4eb1d6d26b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80',
            }}
            style={styles.cardImage}
            alt="Plant 3"
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1614254549554-b2a9aea7a446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
            }}
            style={styles.cardImage}
            alt="Plant 4"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
    paddingHorizontal: 16, // Add horizontal padding for better spacing
  },
  header: {
    marginVertical: 20,
    alignSelf: 'flex-start', // Align header to the left
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left', // Align header text to the left
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: 'left', // Align subtitle text to the left
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Arrange images in 2x2 formation
  },
  card: {
    width: '48%', // Adjust card width to fit two images in a row
    aspectRatio: 9 / 12, // 9:16 aspect ratio (portrait orientation)
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '100%', // Set the image height to 100% of the card
    borderRadius: 10,
  },
});

type LocationObjectCoords = {
  latitude: number;
  longitude: number;
};

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

export default PlantFinder;