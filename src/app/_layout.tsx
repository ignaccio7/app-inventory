import { SplashScreen, Stack } from "expo-router";

import {
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { useEffect } from "react";


SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  })

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded || error) {
    return null
  }

  return <Stack
    screenOptions={{
      headerShown: false
    }}
  />;
}
