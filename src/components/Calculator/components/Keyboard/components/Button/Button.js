import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './StyleSheet'

const buttonUnderlayColor = '#247075'
const operatorButtonUnderlayColor = '#A65E21'

const Button = (props) => {
  let style = props.style
  let underlayColor = props.underlayColor

  if (props.isOperator) {
    style = styles.operatorButton
    underlayColor = operatorButtonUnderlayColor
  }

  return (
    <TouchableHighlight
      style={[styles.button, style]}
      onPress={props.onPress}
      underlayColor={underlayColor}>
      <Text style={props.titleStyle}>
        {props.title}
      </Text>
    </TouchableHighlight>
  )
}

Button.defaultProps = {
  isOperator: false,
  titleStyle: styles.buttonTitle,
  underlayColor: buttonUnderlayColor
}

Button.propTypes = {
  isOperator: React.PropTypes.bool,
  style: TouchableHighlight.propTypes.style,
  titleStyle: Text.propTypes.style,
  onPress: React.PropTypes.func.isRequired,
  underlayColor: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
}

export default Button
