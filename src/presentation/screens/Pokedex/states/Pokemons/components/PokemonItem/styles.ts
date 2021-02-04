import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    height: 150,
    paddingHorizontal: 20,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    margin: 6
  },
  name: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: 10
  },
  type: {
    color: COLORS.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLORS.red,
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    })
  },
  pokemonImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 90,
    height: 90
  }
})
