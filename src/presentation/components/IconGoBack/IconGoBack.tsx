import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../Icon'

export const IconGoBack = (props: TouchableOpacityProps) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      {...props}
      onPress={navigation.goBack}
    >
      <Icon
        size={30}
        name='arrow-back'
      />
    </TouchableOpacity>
  )
}
