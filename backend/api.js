import OpenAI from "openai";

//fill in these keys 
const apiKeyAgro = ""
const apiKeyGPT = ""

const ai = new OpenAI({
  apiKey: apiKeyGPT,
  dangerouslyAllowBrowser: true
});

// Fetch weather data based on latitude and longitude
// Function to create a polygon and fetch its soil and weather data
export async function fetchPolygonData(latitude, longitude) {
  try {
    // Create a Polygon
    const createPolygonUrl = `https://api.agromonitoring.com/agro/1.0/polygons?appid=${apiKeyAgro}&duplicated=true`;
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
      const weatherUrl = `https://api.agromonitoring.com/agro/1.0/weather?polyid=${polygonId}&appid=${apiKeyAgro}`;
      const soilUrl = `https://api.agromonitoring.com/agro/1.0/soil?polyid=${polygonId}&appid=${apiKeyAgro}`;

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
// Function to interact with chatGPT to get plant recommendations
export const handleRecommendations = async (userData) => {
  try {
    const finalData = JSON.stringify(userData)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${apiKeyGPT}`);
    //console.log(`Based on the data: ${finalData}, recommend me 4 plant types for my garden. Include an overview, planting guide, time to grow, maximum height, and daily water needs`)
    /*var raw = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful botanist who gives plant recommendations to users based on their location data"
        },
        {
          "role": "user",
          "content": `Based on the data: ${finalData}, recommend me 4 plant types for my garden. Include an overview, planting guide, time to grow, maximum height, and daily water needs`
        }
      ],
      "max_tokens": 48,
      "temperature": 0
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));*/
  } catch (err) {
    console.error('Error making API request:');
    console.error(err.response?.data ?? err.toJSON?.() ?? err)
  }
};
