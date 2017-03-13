import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './StyleSheet'

const Button = (props) => (
  <TouchableHighlight
    style={[styles.button, props.style]}
    onPress={props.onPress}
    underlayColor={props.underlayColor}>
    <Text style={props.titleStyle}>
        {props.title}
    </Text>
  </TouchableHighlight>
) 

Button.defaultProps = {
  titleStyle: styles.buttonTitle,
  underlayColor: '#247075'
}

Button.propTypes = {
  //style: React.PropTypes.object,
  //titleStyle: React.PropTypes.object,
  onPress: React.PropTypes.func.isRequired,
  underlayColor: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
}

export default Button