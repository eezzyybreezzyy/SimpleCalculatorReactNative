import React from 'react'
import { View } from 'react-native'
import Button from './components/Button'
import styles from './StyleSheet'

const Keyboard = (props) => (
  <View style={{ flex: props.size }}>
    <View style={props.buttonContainerStyle}>
      <Button title='AC' onPress={props.onClearPress} />
      <Button title='±' onPress={() => props.onOperatorPress('±')} />
      <Button title='%' onPress={() => props.onOperatorPress('%')} />
      <Button isOperator title='÷' onPress={() => props.onOperatorPress('÷')} />
    </View>
    <View style={props.buttonContainerStyle}>
      <Button title='7' onPress={() => props.onNumberPress('7')} />
      <Button title='8' onPress={() => props.onNumberPress('8')} />
      <Button title='9' onPress={() => props.onNumberPress('9')} />
      <Button isOperator title='×' onPress={() => props.onOperatorPress('x')} />
    </View>
    <View style={props.buttonContainerStyle}>
      <Button title='4' onPress={() => props.onNumberPress('4')} />
      <Button title='5' onPress={() => props.onNumberPress('5')} />
      <Button title='6' onPress={() => props.onNumberPress('6')} />
      <Button isOperator title='-' onPress={() => props.onOperatorPress('-')} />
    </View>
    <View style={props.buttonContainerStyle}>
      <Button title='1' onPress={() => props.onNumberPress('1')} />
      <Button title='2' onPress={() => props.onNumberPress('2')} />
      <Button title='3' onPress={() => props.onNumberPress('3')} />
      <Button isOperator title='+' onPress={() => props.onOperatorPress('+')} />
    </View>
    <View style={props.buttonContainerStyle}>
      <Button
        title='0'
        style={{ flex: 2 }}
        onPress={() => props.onNumberPress('0')}
      />
      <Button title='.' onPress={props.onDotPress} />
      <Button isOperator title='=' onPress={props.onEqualsPress} />
    </View>
  </View>
)

Keyboard.defaultProps = {
  size: 3,
  buttonContainerStyle: styles.buttonContainer
}

Keyboard.propTypes = {
  buttonContainerStyle: View.propTypes.style,
  size: React.PropTypes.number,
  onOperatorPress: React.PropTypes.func.isRequired,
  onNumberPress: React.PropTypes.func.isRequired,
  onClearPress: React.PropTypes.func.isRequired,
  onDotPress: React.PropTypes.func.isRequired,
  onEqualsPress: React.PropTypes.func.isRequired
}

export default Keyboard
