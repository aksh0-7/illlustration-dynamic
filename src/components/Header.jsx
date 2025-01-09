import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'


const Header = () => {
  return (
      <header>
          <img src={logo} alt="" />
          <div>
              <i className="fa-solid fa-arrow-up fa-rotate-by" style={{color:'black', rotate: "45deg" }}></i>
              <i className="fa-solid fa-user" style={{color: 'black'}}></i>
          </div>
      </header>
  )
}

export default Header