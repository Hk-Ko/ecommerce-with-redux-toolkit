import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Products from './components/Products'
import Fav from './components/Fav'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/fav' element={<Fav/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App