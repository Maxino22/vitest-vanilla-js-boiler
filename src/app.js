class Calculator {
	constructor(number1, number2) {
		this.number1 = number1
		this.number2 = number2
	}
	add() {
		return this.number1 + this.number2
	}
	subtruct() {
		return this.number1 - this.number2
	}

	multiply() {
		return String(this.number1 * this.number2)
	}
}

export default Calculator
