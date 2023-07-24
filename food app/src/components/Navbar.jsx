import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
           <div className="navbar">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link> 
          <li>Cart</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar