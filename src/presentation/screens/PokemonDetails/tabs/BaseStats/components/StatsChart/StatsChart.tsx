import React from 'react'
import { View } from 'react-native'
import { StatsChartProps } from './StatsChartProps'
import { styles } from './styles'
import { Body, ChildrenSpacing, Row } from 'presentation/components'
import { capitalize } from 'presentation/utils'

const MAX_VALUE = 115

export const StatsChart = (props: StatsChartProps) => (
  <View {...props}>
    <Row centered>
      <View style={styles.titlesContainer}>
        <ChildrenSpacing spacing={15}>
          {props.stats.map((stat, index) => (
            <Body
              key={`title-${index}`}
              style={styles.title}
            >
              {capitalize(stat.statName)}
            </Body>
          ))}
        </ChildrenSpacing>
      </View>

      <View style={styles.valuesContainer}>
        <ChildrenSpacing spacing={15}>
          {props.stats.map((stat, index) => (
            <Row centered>
              <Body
                key={`value-${index}`}
                style={styles.value}
              >
                {stat.statValue}
              </Body>
              <Row
                centered
                style={styles.valueIndicatorContainer}
              >
                <View style={[styles.valueIndicator, { backgroundColor: props.barColor, flex: stat.statValue }]} />
                <View style={{ flex: MAX_VALUE - stat.statValue }} />
              </Row>
            </Row>
          ))}
        </ChildrenSpacing>
      </View>
    </Row>
  </View>
)
