import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Screens from 'presentation/screens'
import { AppRoutes } from './AppRoutes'
import { RootStackParamsList } from './RootStackParamsList'

const Stack = createStackNavigator<RootStackParamsList>()

export const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={AppRoutes.Home}
        component={Screens.Home}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
