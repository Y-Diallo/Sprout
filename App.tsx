import { NativeWindStyleSheet } from "nativewind";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
<<<<<<< HEAD
import Landing from "./screens/Landing";
=======

>>>>>>> b30cca05e7a0e0a4a00cc95c80bb09c77d8b5f32
import PlantFinder from "./screens/PlantFinder";
import SignIn from "./screens/SignIn";
import Notifications from "./screens/Notifications";
import Landing from "./screens/Landing";
import PlantInformation from "./screens/PlantInformation";
import YourGarden from "./screens/YourGarden";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export type RootStackParamList = {
  Landing: undefined;
  Notifications: undefined;
  PlantFinder: undefined;
  PlantInformation: { userId: string, inGarden: boolean };
  SignIn: undefined;
  YourGarden: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen 
          name = "PlantFinder"
          component={PlantFinder}
          options={{
            headerShown: false
          }}
        />
=======
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
          <Stack.Screen 
            name = "Notifications"
            component={Notifications}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = "PlantFinder"
            component={PlantFinder}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = "PlantInformation"
            component={PlantInformation}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = "SignIn"
            component={SignIn}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = "YourGarden"
            component={YourGarden}
            options={{
              headerShown: false
            }}
          />
>>>>>>> b30cca05e7a0e0a4a00cc95c80bb09c77d8b5f32

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
