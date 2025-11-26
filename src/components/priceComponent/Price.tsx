import { Stack } from "@mui/material"
import { calculateGST, calculateTotalPrice } from "../../utils/priceCalculator"
import type { Food } from "../../constants"


function Price({order}: {order: Food[]}) {
  const totalPrice = calculateTotalPrice(order);

  return (
    <Stack spacing ={0} direction ="column" justifyContent={'center'} alignItems={'center'} 
      sx={{ border: "2px solid #0e0f0fff" }} >
      {
      order.map((item, index) => (
        <div key={index}>
          {/* don't show items with no quantity*/}
          {item.qty > 0 && <h4>{item.name.replace(/_/g, " ") + ` x ${item.qty}  $${item.price * item.qty}`}</h4>}
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <h3>Including GST (${calculateGST(totalPrice)})</h3>
    </Stack>
  )
}

export default Price