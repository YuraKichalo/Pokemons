import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 70,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3
  },
  title: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
