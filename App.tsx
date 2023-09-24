import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from "./screens/Landing";
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
          name = "Landing"
          component={Landing}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="SignIn" component={SignIn}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
