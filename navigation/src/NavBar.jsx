import React, { useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';
import { FaFontAwesome } from "react-icons/fa6";
export default function NavBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const se = searchParams.get('age')
  const gg = (e) => {
    setSearchParams({
      age: e.target.value
    })
  }
  const [fal,tru]=useState(false)

  return (
    <div>
      <nav>
        <h1>Logo</h1>

        <input type="search" onChange={gg} />
        <ul className={fal ? 'open' : ''}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          <li><NavLink to="/Services">Services</NavLink></li>
          <li><NavLink to='/User/minal/guy'>minal</NavLink></li>
          <li><NavLink to='/User/yes/lesgo'>yes</NavLink></li>
        </ul>
        <FaFontAwesome className='io' onClick={()=>{
          tru(!fal)
        }}/>
      </nav>
     
    </div>
  )
}
