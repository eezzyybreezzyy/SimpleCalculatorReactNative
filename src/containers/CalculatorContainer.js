import React from 'react'
import Calculator from '../components/Calculator'

class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '0',
      operation: '',
      leftOperand: ''
    }
  }

  handleOutputChange(value) {
    this.setState({value})
  }

  handleClearPress() {
    this.setState({value: '0'})
  }

  handleNumberPress(number) {
    if (this.state.value !== '0') {
      this.setState({value: this.state.value + number})
    } else {
      this.setState({value: number})
    } 
  }

  handleDotPress() {
    if (this.state.value.indexOf('.') === -1) {
      this.setState({value: this.state.value + '.'})
    }
  }

  handleOperatorPress(op) {
    if (this.state.value) {
      if (op ===  '+/-') {
        result = -1 * this.state.value
        this.setState({value: result.toString()})
      } else if (op === '%') {
        result = parseFloat(this.state.value) / 100
        this.setState({value: result.toString()})
      } else { 
        this.setState({operation: op, leftOperand: parseFloat(this.state.value), value: ''})
      }
    }
  }

  handleEqualsPress() {
    if (this.state.value && this.state.operation) {
      switch (this.state.operation) {
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
      this.setState({operation: '', leftOperand: '', value: result.toString()})
    }
  }

  render() {
    return (
        <Calculator
          onOutputChange={(value) => this.handleOutputChange(value)}
          onNumberPress={(number) => this.handleNumberPress(number)}
          onOperatorPress={(op) => this.handleOperatorPress(op)}
          onDotPress={() => this.handleDotPress()}
          onEqualsPress={() => this.handleEqualsPress()}
          onClearPress={() => this.handleClearPress()}
          outputValue={this.state.value}
        />
    )
  }
}

export default CalculatorContainer
