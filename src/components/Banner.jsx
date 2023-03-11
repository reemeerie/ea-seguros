import React from 'react'
import '../styles/Banner.css'

const Banner = () => {
  return (
    <>
    <div id='home'></div>
    <div className='parallaxContainer'>
        <div className='parallax'>
            <img className='mobile' src="/img/mobile7.jpg" alt=""/>
            <img className="banner" src="/img/banner5.jpg" alt="" />
            <div className='blackScreen'></div>
            <div className='presentation'>
                <h2>Esther Albarracin</h2>
                <p>Asesora de seguros</p>
            </div> 
        </div>
    </div>
    </>
    
  )
}

export default Banner