import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { BaseStatsProps } from './BaseStatsProps'
import { StatsChart } from './components/StatsChart'
import { getTypeColor } from 'presentation/utils'

export const BaseStats = ({ pokemon }: BaseStatsProps) => (
  <View style={styles.container}>
    <StatsChart
      stats={pokemon.stats}
      barColor={getTypeColor(pokemon.types[0])!}
    />
  </View>
)
