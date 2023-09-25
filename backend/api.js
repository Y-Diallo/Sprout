const apiKey = ""
// Fetch weather data based on latitude and longitude
// Function to create a polygon and fetch its soil and weather data
async function fetchPolygonData(latitude, longitude) {
  try {
    // Create a Polygon
    const createPolygonUrl = `https://api.agromonitoring.com/agro/1.0/polygons?appid=${apiKey}&duplicated=true`;
    const createPolygonRequestBody = {
      name: "UserPoly",
      geo_json: {
        type: "Polygon",
        coordinates: [
          [
            [longitude, latitude], 
            [longitude+10, latitude+10]
          ],
        ],
      },
    };

    const createPolygonResponse = await fetch(createPolygonUrl)

    if (!createPolygonResponse.ok) {
      throw new Error(`Error creating polygon: ${createPolygonResponse.status}`);
    }

    const createdPolygonData = await createPolygonResponse.json();
    console.log(createdPolygonData);
    
    // Ensure that the response is an array and access the first element
    if (Array.isArray(createdPolygonData) && createdPolygonData.length > 0) {
      const polygonId = createdPolygonData[0].id;
      // Step 2: Fetch Weather Data for the Polygon
      const weatherUrl = `https://api.agromonitoring.com/agro/1.0/weather?polyid=${polygonId}&appid=${apiKey}`;
      const soilUrl = `https://api.agromonitoring.com/agro/1.0/soil?polyid=${polygonId}&appid=${apiKey}`;

      const weatherResponse = await fetch(weatherUrl);
      const soilResponse = await fetch(soilUrl);

      if (!weatherResponse.ok) {
        throw new Error(`Error fetching weather data: ${weatherResponse.status}`);
      }

      if (!soilResponse.ok) {
        throw Error(`Error fetching soil data: ${soilResponse.status}`);
      }

      const weatherData = await weatherResponse.json();
      const soilData = await soilResponse.json();

      // Combine the weather and soil data as needed
      const combinedData = {
        weather: weatherData,
        soil: soilData,
      };
      return combinedData;
    } else {
      throw new Error("No polygon data found.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  fetchPolygonData,
};