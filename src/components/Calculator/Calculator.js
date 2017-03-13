import React from 'react'
import { View } from 'react-native'
import { Keyboard, OutputScreen } from './components'
import styles from './StyleSheet'

const Calculator = (props) => (
  <View style={styles.container}>
    <OutputScreen
      onChange={() => props.onOutputChange}
      value={props.outputValue} />
    <Keyboard
      onNumberPress={(number) => props.onNumberPress(number)}
      onOperatorPress={(op) => props.onOperatorPress(op)}
      onDotPress={() => props.onDotPress()}
      onEqualsPress={() => props.onEqualsPress()}
      onClearPress={() => props.onClearPress()} />
  </View>
)

Calculator.propTypes = {
  onOutputChange: React.PropTypes.func.isRequired,
  outputValue: React.PropTypes.string.isRequired,
  onNumberPress: React.PropTypes.func.isRequired,
  onOperatorPress: React.PropTypes.func.isRequired,
  onDotPress: React.PropTypes.func.isRequired,
  onEqualsPress: React.PropTypes.func.isRequired,
  onClearPress: React.PropTypes.func.isRequired
}

export default Calculator
