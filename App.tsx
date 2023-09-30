import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from "./screens/Landing";
import PlantFinder from "./screens/PlantFinder";
import SignIn from "./screens/SignIn";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen 
          name = "PlantFinder"
          component={PlantFinder}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="SignIn" component={SignIn}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
