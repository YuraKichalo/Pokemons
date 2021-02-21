import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { Item } from './components/Item'
import { ChildrenSpacing } from 'presentation/components'
import { Strings, COLORS } from 'presentation/assets'

export const MenuModal = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.background}
      />
      <View style={styles.card}>
        <View
          style={styles.thump}
        />
        <ChildrenSpacing spacing={15}>
          <Item
            iconName='heart'
            iconColor={COLORS.red}
            title={Strings.pokedex.menuModal.favouritePokemons}
          />
        </ChildrenSpacing>
      </View>
    </View>
  )
}
