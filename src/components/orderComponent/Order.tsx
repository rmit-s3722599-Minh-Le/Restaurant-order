import { useState } from 'react'
import { initOrder } from '../../constants'
import { Button, TextField, Stack } from "@mui/material";
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
  
  function addOrder() {
    console.log(currentorder);
    setCurrentOrder(createInitOrder());
    setOrder(currentorder);
  }

  function handleQtyChange(index: number, val: string) {
    const updateOrder = [...currentorder];
    updateOrder[index] = {
      ...updateOrder[index],
      qty: val === "" ? 0 : Math.abs(parseInt(val, 10)),
    };
    setCurrentOrder(updateOrder);
  };

  
  return (
    <>
      <h1>Pokemon Cafe</h1>
      <div>
        <Stack spacing={2}>
          {
            // Mapping of items with inputs
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
                    handleQtyChange(index, e.target.value)
                  }}
                  slotProps={{
                    htmlInput: { min: 0 }
                  }}
                /> 
              </Stack>         
            ))
          }
          {/* Dynamic item order calculation */}
          <Price order={currentorder} />
          {/* Buttons */}
          <Button
            variant="contained"
            disabled={calculateTotalPrice(currentorder) == 0}
            onClick={() => { addOrder() }}
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