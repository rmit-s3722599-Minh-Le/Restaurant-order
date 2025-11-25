import { useState } from 'react'
import { initOrder } from '../../constants'
import {
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { calculateTotalPrice } from '../../utils/priceCalculator';
import Price from '../priceComponent/Price';

interface OrderProps {
  setOrder: (order: typeof initOrder) => void;
}

function Order({setOrder}: OrderProps) {
  const [currentorder, setCurrentOrder] = useState(createInitOrder());

  function createInitOrder() {
    return initOrder.map(item => ({ ...item }));  
  }
  
  function addOrder(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(currentorder);
    setCurrentOrder(createInitOrder());
    setOrder(currentorder);
  }

  
  return (
    <>
      <h1>Pokemon Cafe</h1>
      <div>
        <Stack spacing={2}>
          {
            initOrder.map((item, index) => (
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
                value={Number(currentorder[index].qty).toString()}
                onChange={(e) => {
                  const val = e.target.value
                  const newOrder = [...currentorder];
                  val === "" ? newOrder[index].qty = 0 : newOrder[index].qty = parseInt(e.target.value, 10);
                  setCurrentOrder(newOrder);
                }}
                slotProps=  {{
                  htmlInput: { min: 0 }
                }}
              /> 
              </Stack>         
            ))
          }
          {/* Confirmation */}
          <Price order={currentorder} />
          <Button
            variant="contained"
            disabled={calculateTotalPrice(currentorder) == 0}
            onClick={(e) => { addOrder(e)}}
          >
            Place Order
          </Button>
          <Button
            variant="outlined"
            disabled={calculateTotalPrice(currentorder) == 0}
            onClick={() => { setCurrentOrder(createInitOrder()) }}
          >
            Reset Order
          </Button>
        </Stack>      
      </div>
    </>
  )
}

export default Order