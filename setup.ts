import "@testing-library/jest-dom/vitest"
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import type { Food } from './src/constants'

const testOrder: Food[] = [
  {
    name: "Cheeseburger",
    price: 15,
    qty: 1  
  },
  {
    name: "Chicken_Burger",
    price: 20,
    qty: 0   
  },
  {
    name: "Softdrink_Small",
    price: 4,
    qty: 3   
  },
  {
    name: "Softdrink_Large",
    price: 5,
    qty: 1   
  }
]


export function mockOrderCopy(): Food[] {
  return testOrder.map(item => ({ ...item }))
}

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})