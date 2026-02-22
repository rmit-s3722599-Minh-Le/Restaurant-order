import { Button, Stack } from "@mui/material"
import type { Food } from "../../constants"
import Price from "../priceComponent/Price"
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Receipt({order}: {order: Food[][]}) {
  const [currentPage, setCurrentPage] = useState(0);
  // console.log (order)
  return (
    <Stack data-testid="receipt-stack">
      {/* only show after order submitted*/}
      {order && order.length > 0 && (
        <>
          <h2>--------------------------</h2>
          <h2>Receipt {order.length - currentPage}</h2>
          <Price order={order[currentPage]} />
        </>
      )}
     {/* previous, current */}
     <Stack direction="row" spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center", 
        marginTop: "20px",
        }}>
      <Button
        startIcon={<ArrowBackIosIcon />}
          variant="contained"
          disabled={currentPage === 0}
          onClick={() => {setCurrentPage(currentPage - 1)}}
        >
          Previous
        </Button>
        <Button
          endIcon={<NavigateNextIcon />}
          variant="outlined"
          disabled={currentPage === order.length - 1 || order.length == 0}
          onClick={() => {setCurrentPage(currentPage + 1)}}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  )
}

export default Receipt