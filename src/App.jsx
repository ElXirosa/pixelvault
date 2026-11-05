import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { useEffect, useState } from 'react'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import PageUnfind from './pages/404/404'

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
          <Route path='/cart' element={<Cart showSearch={false} cart={cart} setCart={setCart}/>} />
          <Route path='/checkout' element={<Checkout cart={cart}/>} />
          <Route path='/login' element={<Login cart={cart} />} />
          <Route path='/register' element={<Register cart={cart} />} />
          <Route path='*' element={<PageUnfind cart={cart}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
