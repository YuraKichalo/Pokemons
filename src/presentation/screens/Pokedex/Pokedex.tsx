import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import { PokedexViewModel } from './PokedexViewModel'
import { PokedexStackParamsList } from './PokedexStackParamsList'
import * as Screens from './screens'
import { PokedexRoutes } from './PokedexRoutes'
import { PokedexNavigationProp } from './PokedexNavigationProp'
import { PokedexRouter } from './PokedexRouter'

const Stack = createStackNavigator<PokedexStackParamsList>()

export const Pokedex = observer(() => {
  const navigation = useNavigation<PokedexNavigationProp>()
  const [router] = useState(() => new PokedexRouter(navigation))
  const [viewModel] = useState(() => new PokedexViewModel())

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      mode='modal'
    >
      <Stack.Screen name={PokedexRoutes.Pokedex}>
        {() => (
          <Screens.Pokedex
            viewModel={viewModel}
            router={router}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={PokedexRoutes.MenuModal}
        options={{
          cardStyle: {
            backgroundColor: 'transparent',
            opacity: 0.99
          }
        }}
      >
        {() => <Screens.MenuModal />}
      </Stack.Screen>
    </Stack.Navigator>
  )
})
