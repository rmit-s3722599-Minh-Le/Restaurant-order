import { useState } from 'react'
import './App.css'
import Order from './components/orderComponent/Order'
import Receipts from './components/receiptComponent/Receipts'
import { type Food } from './constants'

function App() {
  const [order, setOrder] = useState<Food[]>([])

  return (
    <>
      <Order setOrder={setOrder}/>
      <Receipts order={order}/>
    </>
  )
}

export default App
