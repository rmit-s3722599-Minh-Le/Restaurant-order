import { useState } from 'react'
import './App.css'
import Order from './components/orderComponent/Order'
import Receipts from './components/receiptComponent/Receipts'

function App() {

  return (
    <>
      <Order />
      <Receipts />
    </>
  )
}

export default App
