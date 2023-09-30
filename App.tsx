import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Landing from "./screens/Landing";
import SignIn from "./screens/SignIn";
import Navbar from "./components/Navbar/Navbar";

NativeWindStyleSheet.setOutput({
  default: "native",
});

type RootStackParamList = {
  Landing: undefined;
  SignIn: undefined;
  SignUp: undefined;
  PlantInformation: { userId: string, inGarden: boolean };
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
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
      <Navbar navigation={undefined}/>
    </>
  );
}
