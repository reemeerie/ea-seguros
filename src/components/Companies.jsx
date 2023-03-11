import React from 'react'
import '../styles/Companies.css'

const Companies = () => {
  return (
    <>
    <div id='companies'></div>
    <div className="companies">
            <div className="companiesContainer">
                <h2 className="companiesTitle">Compañías</h2>
                <p className='companiesDesc'>La calidad es un compromiso y se consigue manteniendo una mejora constante en nuestro sistema de trabajo para asi poder ofrecer un servicio superior a nuestros clientes. La calidad de nuestro trabajo es nuestra tarjeta de presentacion, por ello trabajamos con las mejores marcas, con las que mantenemos una estrecha relacion, actualizandonos mediante cursos de formacion con el fin de poder ofertar los mejores y mas modernos avances.</p>
                <div className="imagesCompaniesContainer">
                    <img src="/img/allianz.png" alt="" className="company"/>
                    <img src="/img/mercantil.jpg" alt="" className="company"/>
                    <img src="/img/meridio2.png" alt="" className="company"/>
                    <img src="/img/sura.png" alt="" className="company"/>
                    <img src="/img/asociart2.png" alt="" className="company"/>
                    <img src="/img/la2.jpg" alt="" className="company"/>
                    <img src="/img/smg2.png" alt="" className="company"/>
                    <img src="/img/experta.png" alt="" className="company"/>
                </div>
            </div>
    </div>
    </>
  )
}

export default Companies