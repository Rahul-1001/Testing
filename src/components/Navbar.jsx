import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
           <Link to='/'><li>Home</li></Link>
          <Link to='/about'> <li>About</li></Link> 
          <Link to='/contact'>  <li>Contact</li> </Link>
          <Link to='/product'> <li>Product</li> </Link> 
           
        </ul>
        <button>Get Started</button>
        </div>
  )
}

export default Navbar