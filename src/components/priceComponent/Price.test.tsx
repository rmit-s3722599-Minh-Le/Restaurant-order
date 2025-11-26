import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Price from './Price'
import { mockOrderCopy } from '../../../setup'
import { calculateTotalPrice } from '../../utils/priceCalculator'

describe('Price Component', () => {
  let mockOrder = mockOrderCopy()
  let total = calculateTotalPrice(mockOrder);
	beforeEach(() => {
		render(<Price order={mockOrder} />)
	})

  it('should render food items', () => {
    expect(screen.getByText('Cheeseburger x 1 $15')).toBeTruthy()
    expect(screen.getByText('Chicken Burger x 0 $0')).toBeTruthy()
    expect(screen.getByText('Softdrink Small x 3 $12')).toBeTruthy()
    expect(screen.getByText('Softdrink Large x 1 $5')).toBeTruthy()
  })

  it('should render total cost from items', () => {
    expect(screen.getByText(`Total: $${total}`)).toBeTruthy()
  })

  it('should render GST from total cost', () => {
    let GST = (total - total / 1.1).toFixed(2)
    expect(screen.getByText(`Including GST ($${GST})`)).toBeTruthy()
  })
  
})