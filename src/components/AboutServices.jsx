import "../styles/AboutServices.css"

import React from 'react'

const AboutServices = () => {
  return (
    <>
        <div id="about"></div>
        <div className="container">
            <div className="aboutContainer">
                <h2 className="aboutTitle">Sobre nosotros</h2>
                <p className="aboutDesc">Somos una importante compañia de seguros que busca dar lo mejor para cada uno de sus clientes. Ofrecemos atencíon telefónica casi las 24 horas del día y aseguramos cosas de todos los tipos, ya sean automotores, embarcaciones, casas, edificios, ART, etc. Para descuentos y/o paquetes, rellenar el formulario del apartado de contacto para ser atendido lo antes posible.</p>
            </div>
        </div>
        <div id="services"></div>
        <div className="services">
            <div className="servicesContainer">
                <h2 className="servicesTitle">Servicios</h2>
                <div className="imagesContainer">
                    <img src="/img/portatiles.jpg" alt="" className="service"/>
                    <img src="/img/embarcaciones.jpg" alt="" className="service"/>
                    <img src="/img/combfamiliar.jpg" alt="" className="service"/>
                    <img src="/img/automotores.jpg" alt="" className="service"/>
                    <img src="/img/industria.jpg" alt="" className="service"/>
                    <img src="/img/integralconsorcios.jpg" alt="" className="service"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutServices