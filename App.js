import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Root from './navigators/Root';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);

  const startLoading = async () => {
    setReady(true)
  }

  useEffect(() => {
    startLoading()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <StatusBar style='dark'/>
      <Root></Root>
    </NavigationContainer>
  );
}

