import Exponent from 'exponent'
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableHighlight } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textInput: {
    flex: 1,
    fontSize: 50,
    textAlign: 'right'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
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
  zeroButton: {
    flex: 2,
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
  buttonTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '100'
  }
})

const CalculatorButton = (props) =>
  <TouchableHighlight
    style={props.buttonStyle}
    onPress={props.onPress}
    underlayColor={props.underlayColor}>
    <Text style={props.buttonTitleStyle}>
        {props.title}
    </Text>
  </TouchableHighlight> 

CalculatorButton.defaultProps = {
  buttonStyle: styles.button,
  buttonTitleStyle: styles.buttonTitle,
  underlayColor: '#247075'
}

CalculatorButton.propTypes = {
  //buttonStyle: React.PropTypes.object,
  onPress: React.PropTypes.func.isRequired,
  underlayColor: React.PropTypes.string,
  //buttonTitleStyle: React.PropTypes.object,
  title: React.PropTypes.string.isRequired
}

class CalculatorApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '0',
      operation: '',
      leftOperand: ''
    }
  }

  onNumberPress(number) {
    if (this.state.value !== '0') {
      this.setState({value: this.state.value + number})
    } else {
      this.setState({value: number})
    } 
  }

  onDotPress() {
    if (this.state.value.indexOf('.') === -1) {
      this.setState({value: this.state.value + '.'})
    }
  }

  onOperatorPress(op) {
    if (this.state.value) {
      if (op ===  '+/-') {
        result = -1 * this.state.value
        resultString = result.toString()
        this.setState({value: resultString})
      } else if (op === '%') {
        result = parseFloat(this.state.value) / 100
        resultString = result.toString()
        this.setState({value: resultString})
      } else { 
        this.setState({operation: op, leftOperand: parseFloat(this.state.value), value: ''})
      }
    }
  }

  onEqualsPress() {
    if (this.state.value && this.state.operation) {
      switch(this.state.operation) {
        case '+':
          result = this.state.leftOperand + parseFloat(this.state.value)
          break
        case '-':
          result = this.state.leftOperand - parseFloat(this.state.value)
          break
        case 'x':
          result = this.state.leftOperand * parseFloat(this.state.value)
          break
        case ':':
          result = this.state.leftOperand / parseFloat(this.state.value)
          break
        case '%':
          result = this.state.leftOperand / 100
          break
      }
      resultString = result.toString()
      this.setState({operation: '', leftOperand: '', value: resultString})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <TextInput
            editable={false}
            style={styles.textInput}
            onChangeText={(value) => this.setState({value})}
            value={this.state.value}
          />
        </View>
        <View style={{flex: 3}}>
          <View style={styles.buttonContainer}>
            <CalculatorButton onPress={()=>this.setState({value: '0'})} title='AC'/>
            <CalculatorButton onPress={()=>this.onOperatorPress('+/-')} title='±'/>
            <CalculatorButton onPress={()=>this.onOperatorPress('%')} title='%'/>
            <CalculatorButton onPress={()=>this.onOperatorPress(':')} title='÷'/>
          </View>
          <View style={styles.buttonContainer}>
            <CalculatorButton onPress={()=>this.onNumberPress('7')} title='7'/>
            <CalculatorButton onPress={()=>this.onNumberPress('8')} title='8'/>
            <CalculatorButton onPress={()=>this.onNumberPress('9')} title='9'/>
            <CalculatorButton onPress={()=>this.onOperatorPress('x')} title='×'/>
          </View>
          <View style={styles.buttonContainer}>
            <CalculatorButton onPress={()=>this.onNumberPress('4')} title='4'/>
            <CalculatorButton onPress={()=>this.onNumberPress('5')} title='5'/>
            <CalculatorButton onPress={()=>this.onNumberPress('6')} title='6'/>
            <CalculatorButton onPress={()=>this.onOperatorPress('-')} title='-'/>
          </View>
          <View style={styles.buttonContainer}>
            <CalculatorButton onPress={()=>this.onNumberPress('1')} title='1'/>
            <CalculatorButton onPress={()=>this.onNumberPress('2')} title='2'/>
            <CalculatorButton onPress={()=>this.onNumberPress('3')} title='3'/>
            <CalculatorButton onPress={()=>this.onOperatorPress('+')} title='+'/>
          </View>
          <View style={styles.buttonContainer}>
            <CalculatorButton buttonStyle={styles.zeroButton} onPress={()=>this.onNumberPress('0')} title='0'/>
            <CalculatorButton onPress={()=>this.onDotPress()} title='.'/>
            <CalculatorButton onPress={()=>this.onEqualsPress()} title='='/>
          </View>
        </View>
      </View>
    )
  }
}

Exponent.registerRootComponent(CalculatorApp)
