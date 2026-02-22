import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Order from './Order'
import { mockOrdersCopy, mockOrderCopy } from '../../../setup'
import type { Food } from '../../constants'

describe('Order Component', () => {
  let mockSetOrder = vi.fn()

	beforeEach(() => {
		render(<Order setOrder={mockSetOrder} />)
	})

  it('should render title', () => {
    expect(screen.getByText('Pokemon Cafe')).toBeTruthy()
  })

  it('should render place-order and reset-order buttons', () => {
    expect(screen.getByRole("button", { name: /Place Order/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Reset Order/i })).toBeInTheDocument()
  })

  it('should render price component', () => {
    expect(screen.getByText(`Total: $0`)).toBeInTheDocument()
  })

  it('buttons should be disabled from no change', () => {
    expect(screen.getByRole("button", { name: /Place Order/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /Reset Order/i })).toBeDisabled();
  })

  describe('after changing order quantities', () => {
    beforeEach(() => {
      const quantityInputs = screen.getAllByLabelText('Quantity') as HTMLInputElement[];
      fireEvent.change(quantityInputs[0], { target: { value : '1'}}); // CheeseBurger qty to 1
      fireEvent.change(quantityInputs[2], { target: { value : '5'}}); // Softdrink small qty to 5
    })

    it('should enable buttons', () => {
      expect(screen.getByRole("button", { name: /Place Order/i })).toBeEnabled();
      expect(screen.getByRole("button", { name: /Reset Order/i })).toBeEnabled();
    })

    it(`Render and cheeseburger input is submitted negatively`, () => {
        const quantityInputs = screen.getAllByLabelText('Quantity') as HTMLInputElement[];
        fireEvent.change(quantityInputs[0], { target: { value : '-1'}}); 
        expect(screen.getByText('Cheeseburger x 1 $15')).toBeTruthy()
    })

    it(`Render and cheeseburger input is submitted with decimals`, () => {
        const quantityInputs = screen.getAllByLabelText('Quantity') as HTMLInputElement[];
        fireEvent.change(quantityInputs[0], { target: { value : '1.4'}}); 
        expect(screen.getByText('Cheeseburger x 1 $15')).toBeTruthy()
    })

    it('should update total price', () => {
      expect(screen.queryByText(`Total: $0`)).toBeNull();
    })

    it('should call setOrder with correct order on place-order click', () => {
      const placeOrderButton = screen.getByRole("button", { name: /Place Order/i });
      fireEvent.click(placeOrderButton);

      // const testOrder1: Food[] = [
      //       {
      //         name: "Cheeseburger",
      //         price: 15,
      //         qty: 1  
      //       },
      //       {
      //         name: "Chicken_Burger",
      //         price: 20,
      //         qty: 0   
      //       },
      //       {
      //         name: "Softdrink_Small",
      //         price: 4,
      //         qty: 5   
      //       },
      //       {
      //         name: "Softdrink_Large",
      //         price: 5,
      //         qty: 0   
      //       }
      //     ]
      let expectedOrder = mockOrdersCopy();
      expectedOrder[0][0].qty = 1; // CheeseBgr
      expectedOrder[0][1].qty = 0; // ChickenBgr
      expectedOrder[0][2].qty = 5; // Drink sml
      expectedOrder[0][3].qty = 0; // Drink lrg

      // expectedOrder = [testOrder1, ...expectedOrder]


      const setOrderFunction = mockSetOrder.mock.calls[0][0];  // Get the first function call
      
      const newState = setOrderFunction(expectedOrder);

      console.log([expectedOrder[0], ...expectedOrder])
      console.log(expectedOrder)
  
      expect(newState).toEqual([expectedOrder[0], ...expectedOrder]);

        // expect(mockSetOrder).toHaveBeenCalledWith(expectedOrder);
    })

    it('should reset order when Reset button is clicked', () => {
      const resetOrderButton = screen.getByRole("button", { name: /Reset Order/i })
      fireEvent.click(resetOrderButton);
      const qtyInputs = screen.getAllByLabelText('Quantity') as HTMLInputElement[];
      qtyInputs.forEach((input) => { expect(input.value).toBe('0') })
    })
  })
})