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
    this.setState({ value })
  }

  handleClearPress() {
    this.setState({ value: '0' })
  }

  handleNumberPress(number) {
    if (this.state.value !== '0') {
      this.setState({ value: this.state.value + number })
    } else {
      this.setState({ value: number })
    }
  }

  handleDotPress() {
    if (this.state.value.indexOf('.') === -1) {
      this.setState({ value: this.state.value + '.' })
    }
  }

  handleOperatorPress(op) {
    if (this.state.value) {
      let { operation, leftOperand } = this.state
      let value = ''
      switch (op) {
        case '±':
          value += -this.state.value
          break
        case '%':
          value += this.state.value / 100
          break
        default:
          operation = op
          leftOperand = this.state.value
          break
      }
      this.setState({ operation, leftOperand, value })
    }
  }

  handleEqualsPress() {
    if (this.state.value && this.state.operation) {
      const { leftOperand: l, value: r } = this.state
      let result = 0
      switch (this.state.operation) {
        case '+':
          result = +l + +r
          break
        case '-':
          result = l - r
          break
        case 'x':
          result = l * r
          break
        case '÷':
          result = l / r
          break
      }
      result = +result.toFixed(10)
      this.setState({
        operation: '',
        leftOperand: '',
        value: result.toString()
      })
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
        outputValue={this.state.value} />
    )
  }
}

export default CalculatorContainer
