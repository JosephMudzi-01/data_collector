import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// amplify code
import {generateClient} from 'aws-amplify/api'
// import {createFarmersStopOrder} from '../graphql/mutations'
// import {listFarmersStopOrders} from '../graphql/queries'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';
Amplify.configure(amplifyconfig);


import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
// import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const client = generateClient();



function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // async function fetchFarmers() {
  //   try {
  //     const farmersData = await client.graphql({
  //       query: listFarmersStopOrders
  //     });
  //     // @ts-ignore
  //     const todos = farmersData?.data.listFarmersStopOrders.items;
  //     console.log("haha: ", todos)
  //     // setTodos(todos);
  //   } catch (err) {
  //     console.log('error fetching todos');
  //   }
  // }


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

export default withAuthenticator(RootLayout);