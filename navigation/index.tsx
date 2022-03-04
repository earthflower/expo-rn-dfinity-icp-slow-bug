/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import Colors from '../constants/Colors'
import VideoScreen from '../screens/VideoScreen'
import HomeScreen from '../screens/HomeScreen'
import {
  RootStackParamList,
} from '../types'
import LinkingConfiguration from './LinkingConfiguration'

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator(props: { colorScheme: ColorSchemeName }) {
  const colors = Colors[props.colorScheme || 'light']

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{ headerShown: true, headerShadowVisible: false, headerStyle: { backgroundColor: colors.background }, title: '', headerTintColor: colors.tint  }} // headerShown: false, presentation: 'modal' }} // 
      >
        <Stack.Screen name="Video" component={VideoScreen} />        
      </Stack.Group>      
    </Stack.Navigator>
  )
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator colorScheme={colorScheme} />
    </NavigationContainer>
  )
}
