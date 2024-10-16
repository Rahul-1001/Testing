import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ContactLayout from './layout/ContactLayout'
import Contactform from './components/Contactform'
import Contactinfo from './components/Contactinfo'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/product'  element={<Products/>}/>
        {/* <Route path='/contact'  element={<ContactLayout/>}>  */}
        {/* <Route path='/info'  element={<Contactinfo/>}/> */}
        {/* <Route path='/form'  element={<Contactform/>}/>      */}
        {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App