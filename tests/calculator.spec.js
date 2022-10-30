import { describe, expect, test } from 'vitest'
import Calculator from '../src/app'

describe('Testing our calculator object', () => {
	test('Addition works fine', () => {
		const number = new Calculator(2, 3)
		const result = number.add()
		expect(result).toBe(5)
	})
	test('Subtraction works fine', () => {
		const number = new Calculator(10, 3)
		const result = number.subtruct()
		expect(result).equal(7)
	})
	test('Multiplication works fine', () => {
		const number = new Calculator(10, 3)
		const result = number.multiply()
		expect(result).to.be.a('string')
	})
})
