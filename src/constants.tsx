export interface Food {
  name: string,
  price: number,
  qty: number
}

export const initOrder: Food[] = [
  {
    name: "Cheeseburger",
    price: 15,
    qty: 0  
  },
  {
    name: "Chicken_Burger",
    price: 20,
    qty: 0   
  },
  {
    name: "Softdrink_Small",
    price: 4,
    qty: 0   
  },
  {
    name: "Softdrink_Large",
    price: 5,
    qty: 0   
  }
]
