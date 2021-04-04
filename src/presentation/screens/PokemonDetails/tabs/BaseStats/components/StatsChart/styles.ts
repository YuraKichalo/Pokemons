import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  titlesContainer: {
    marginRight: 25
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.darkGray
  },
  valuesContainer: {
    flex: 1
  },
  value: {
    marginRight: 15,
    fontWeight: 'bold'
  },
  valueIndicatorContainer: {
    backgroundColor: COLORS.gray,
    flex: 1,
    borderRadius: 10
  },
  valueIndicator: {
    height: 4,
    borderRadius: 10
  }
})
