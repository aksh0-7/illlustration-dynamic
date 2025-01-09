import React from 'react'
import './Header.css'


const Header = () => {
  return (
      <header>
          <img src="./src/assets/logo.png" alt="" />
          <div>
              <i className="fa-solid fa-arrow-up fa-rotate-by" style={{color:'black', rotate: "45deg" }}></i>
              <i className="fa-solid fa-user" style={{color: 'black'}}></i>
          </div>
      </header>
  )
}

export default Header