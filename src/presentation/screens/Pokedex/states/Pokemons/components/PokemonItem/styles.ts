import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '50%'
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
  imagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.yellow,
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})
