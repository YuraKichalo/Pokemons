import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  description: {
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    }),
    lineHeight: 25
  },
  heightAndWeightContainer: {
    marginVertical: 25,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  measureType: {
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 10
  },
  measureValue: {
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: 'sans-serif-medium'
      }
    })
  },
  heightContainer: {
    marginRight: 100
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
