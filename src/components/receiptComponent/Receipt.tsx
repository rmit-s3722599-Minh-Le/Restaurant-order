import { Stack } from "@mui/material"
import type { Food } from "../../constants"
import Price from "../priceComponent/Price"


function Receipt({order}: {order: Food[]}) {
  return (
    <Stack data-testid="receipt-stack">
      {order && order.length > 0 && (
        <>
          <h2>--------------------------</h2>
          <h2>Receipt</h2>
          <Price order={order} />
        </>
      )}
    </Stack>
  )
}

export default Receipt