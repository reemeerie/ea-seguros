import React, { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)

  return (
    <>
        <nav className='navbar'>
            <div className='navContainer'>
                <a href='#home' className='logo'><img src="/img/logoea.png" alt="" /></a>
                <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                    <i className={clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="#about" className='nav-links' onClick={() => setClicked(false)}>Sobre nosotros</a></li>
                    <li><a href="#services" className='nav-links' onClick={() => setClicked(false)}>Servicios</a></li>
                    <li><a href="#companies" className='nav-links' onClick={() => setClicked(false)}>Compañías</a></li>
                    <li><a href="#contact" className='nav-links' onClick={() => setClicked(false)}>Contacto</a></li>
                </ul>
            </div>
        </nav>
    </> 
  )
}

export default Navbar