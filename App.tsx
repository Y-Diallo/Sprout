import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from "./pages/landingPage";
import SignInPage from "./pages/SignInPage";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen 
          name = "Landing"
          component={LandingPage}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="SignIn" component={SignInPage}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
