import { useState } from 'react'
import { initOrder } from '../../constants'
import {
  Button,
  TextField,
  Stack,
} from "@mui/material";


function Order() {
  const [order, setOrder] = useState(initOrder)
  
  return (
  <>
      <h1>Order</h1>
      <div>
        <Stack spacing={2}>
            {
              initOrder.map((item, index) => (
                <>
                <Stack
                  direction="row"
                  spacing={3}
                  alignItems="center"
                  key={index}
                >
                <h3 style={{ width: 200 }}>{(item.name).replace(/_/g, " ") + ` ($${item.price})`}</h3>
                <TextField
                  type="number"
                  label="Quantity"
                  value={order[index].qty}
                  onChange={(e) => {
                    const newOrder = [...order];
                    newOrder[index].qty = parseInt(e.target.value, 10);
                    setOrder(newOrder);
                  }}
                  slotProps=  {{
                    htmlInput: { min: 0 }
                  }}
                /> 
                </Stack>         
                </>
              ))
            }

          <Button
            variant="contained"
          >
            Place Order
          </Button>
        </Stack>      
      </div>
  </>

  )
}

export default Order