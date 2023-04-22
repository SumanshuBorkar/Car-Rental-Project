import React from 'react'
import Logo from "./images/AlfaRomeo.png"
import "./Style/Navig.css"

const Navigation = () => {
  return (
    <>
      <div className='navbar '>
        <div className="glass">
          <img src={Logo} alt="not vavailale" className='Logo' />
        </div>
        
      </div>
    </>
  )
}

export default Navigation