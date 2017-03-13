import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2E9298',
    borderRadius: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  operatorButton: {
    backgroundColor: '#C2793B'
  },
  buttonTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '100'
  }
})

export default styles