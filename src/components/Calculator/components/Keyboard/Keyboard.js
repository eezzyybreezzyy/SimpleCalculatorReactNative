import React from 'react'
import { View } from 'react-native'
import Button from './components/Button'
import styles from './StyleSheet'

const Keyboard = (props) => (
    <View style={{flex: props.size}}>
        <View style={props.buttonContainerStyle}>
            <Button onPress={() => props.onClearPress()} title='AC'/>
            <Button onPress={() => props.onOperatorPress('+/-')} title='±'/>
            <Button onPress={() => props.onOperatorPress('%')} title='%'/>
            <Button onPress={() => props.onOperatorPress(':')} title='÷'/>
        </View>
        <View style={props.buttonContainerStyle}>
            <Button onPress={() => props.onNumberPress('7')} title='7'/>
            <Button onPress={() => props.onNumberPress('8')} title='8'/>
            <Button onPress={() => props.onNumberPress('9')} title='9'/>
            <Button onPress={() => props.onOperatorPress('x')} title='×'/>
        </View>
        <View style={props.buttonContainerStyle}>
            <Button onPress={() => props.onNumberPress('4')} title='4'/>
            <Button onPress={() => props.onNumberPress('5')} title='5'/>
            <Button onPress={() => props.onNumberPress('6')} title='6'/>
            <Button onPress={() => props.onOperatorPress('-')} title='-'/>
        </View>
        <View style={props.buttonContainerStyle}>
            <Button onPress={() => props.onNumberPress('1')} title='1'/>
            <Button onPress={() => props.onNumberPress('2')} title='2'/>
            <Button onPress={() => props.onNumberPress('3')} title='3'/>
            <Button onPress={() => props.onOperatorPress('+')} title='+'/>
        </View>
        <View style={props.buttonContainerStyle}>
            <Button style={{flex: 2}} onPress={() => props.onNumberPress('0')} title='0'/>
            <Button onPress={props.onDotPress} title='.'/>
            <Button onPress={props.onEqualsPress} title='='/>
        </View>
    </View>
)

Keyboard.defaultProps = {
    size: 3,
    buttonContainerStyle: styles.buttonContainer
}

Keyboard.propTypes = {
   // buttonContainerStyle: React.PropTypes.object.isRequired,
    size: React.PropTypes.number.isRequired,
    onOperatorPress: React.PropTypes.func.isRequired,
    onNumberPress: React.PropTypes.func.isRequired,
    onClearPress: React.PropTypes.func.isRequired,
    onDotPress: React.PropTypes.func.isRequired,
    onEqualsPress: React.PropTypes.func.isRequired
}

export default Keyboard