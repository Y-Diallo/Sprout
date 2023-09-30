import { NativeWindStyleSheet } from "nativewind";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlantFinder from "./screens/PlantFinder";
import SignIn from "./screens/SignIn";
import Notifications from "./screens/Notifications";
import Landing from "./screens/Landing";
import PlantInformation from "./screens/PlantInformation";
import YourGarden from "./screens/YourGarden";
import Picture from "./screens/Picture";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export type RootStackParamList = {
  Landing: undefined;
  Notifications: undefined;
  PlantFinder: undefined;
  PlantInformation: { userId: string, inGarden: boolean };
  SignIn: undefined;
  Picture: undefined;
  YourGarden: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PlantFinder">
          <Stack.Screen 
            name = "Landing"
            component={Landing}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name = "Picture"
            component={Picture}
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

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
