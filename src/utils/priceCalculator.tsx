import type { Food } from "../constants";

export function calculateGST(total: number) {
  return (total - total / 1.1).toFixed(2);
}

export function calculateTotalPrice(order: Food[]) {
  return order.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
}
