import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

const Navcomp = () => {
  return (
    <div className='Navbox'>

            <Link to="" className='navlinks'>Home</Link>{" "}
            <Link to="About" className='navlinks'>About Us</Link>{" "}
            <Link to="Products" className='navlinks'>Products</Link>{" "}
            <Link to="Contact" className='navlinks'>Contact</Link>{" "}

    </div>
    
  )
}

export default Navcomp;
