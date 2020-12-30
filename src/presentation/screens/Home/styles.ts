import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary
  },
  topContentContainer: {
    paddingHorizontal: 25,
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingBottom: 45
  },
  bottomContentContainer: {
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: COLORS.secondary
  },
  title: {
    lineHeight: 40,
    marginTop: 100
  },
  categoriesContainer: {
    marginTop: 50
  },
  inputContainer: {
    marginTop: 35
  },
  flatList: {
    paddingBottom: 15
  }
})
