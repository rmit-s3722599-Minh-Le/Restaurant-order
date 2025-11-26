import { describe, it, expect } from 'vitest'

import { mockOrderCopy } from '../../setup'
import { calculateGST, calculateTotalPrice } from './priceCalculator'


describe('Price Calculator', () => {
	let mockOrder = mockOrderCopy();

	// add chesesebuger x1 ($15), softdrink small x2 ($4 each)
	let cheesbgr = mockOrder[0];
	let chickenbgr = mockOrder[1];
	let softdrinksml = mockOrder[2];
	let softdrinklrg = mockOrder[3];
	cheesbgr.qty = 1;
	chickenbgr.qty = 2;
	softdrinksml.qty = 2;
	softdrinklrg.qty = 4

	const expectedTotal = cheesbgr.price*cheesbgr.qty + softdrinksml.price*softdrinksml.qty + 
	chickenbgr.price*chickenbgr.qty + softdrinklrg.price*softdrinklrg.qty;

	it('should correctly calculate total cost', () => {
		let total = calculateTotalPrice(mockOrder);
		expect(total).toBe(expectedTotal);
	})
	
	it('should correctly calculate GST', () => {
		let expectedGST = (expectedTotal - expectedTotal / 1.1).toFixed(2);
		let GST = calculateGST(expectedTotal);
		expect(GST).toBe(expectedGST);
  })
})

