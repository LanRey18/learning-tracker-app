import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import '../global.css';
import React from "react";
import { LearningProvider } from './context/LearningProvider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return (
    <LearningProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(learn)" options={{ headerShown: false }} />
      </Stack>
    </LearningProvider>
  );
}
