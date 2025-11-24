export function calculateGST(total: number) {
  return (total - total / 1.1).toFixed(2);
}

