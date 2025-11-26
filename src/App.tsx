import { useState } from 'react'
import './App.css'
import Order from './components/orderComponent/Order'
import Receipt from './components/receiptComponent/Receipt'
import { type Food } from './constants'

function App() {
  const [order, setOrder] = useState<Food[]>([])

  return (
    <>
      <Order setOrder={setOrder}/>
      <Receipt order={order}/>
    </>
  )
}

export default App
