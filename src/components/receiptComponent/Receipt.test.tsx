import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Receipt from './Receipt'
import { mockOrderCopy } from '../../../setup'
import { calculateTotalPrice } from '../../utils/priceCalculator'


describe('Price Component', () => {
  let mockOrder = mockOrderCopy();
  let total = calculateTotalPrice(mockOrder);
  
  describe('with existing order', () => {
    beforeEach(() => {
      render(<Receipt order={mockOrder} />)
    })

    it('should render title', () => {
      expect(screen.getByText('Receipt')).toBeTruthy()
    })

    it('should render price component', () => {
      expect(screen.getByText(`Cheeseburger x 1 $15`)).toBeInTheDocument();
      expect(screen.getByText(`Total: $${total}`)).toBeInTheDocument()
    })
  })

  describe('without order', () => {
    beforeEach(() => {
      render(<Receipt order={[]} />)
    })

    it('should not render title', () => {
      expect(screen.queryByText('Receipt')).not.toBeInTheDocument();
    })

    it('should not render price component', () => {
      expect(screen.queryByText(/Total/i)).not.toBeInTheDocument();
    })
  })

})

