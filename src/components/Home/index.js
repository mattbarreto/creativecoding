import { useState } from "react"
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimmatedLetters"
import Spline from "@splinetool/react-spline"
import './index.scss'
import './responsive.scss'

const Home = () => {

    const [letterClass] = useState('text-animate')
    const creativeCodingArray = ['C', 'r', 'e', 'a', 't', 'i', 'v', 'e', ' ','C','o','d','i','n','g']

    return (
        <div className="container welcome">
            
            <div className="text-zone">

                <h1>Bienvenide a</h1>
                <br/>
                <h2>
                <AnimatedLetters letterClass={letterClass}
                strArray={creativeCodingArray}
                idx={15}
                />
                </h2>
                <h3>
                Introducción a la Programación Creativa,
                <br/>
                2da. Edición 2022
                <br/>
                <br/>
                prof. Matías Barreto
                </h3>
                <br/>
                <Link to='/contacto' className="flat-button">INSCRIBIRME</Link>

            </div>

        <div className = 'spline'>

                <Spline scene="https://prod.spline.design/FHnJ3sz9i5HjWeX7/scene.splinecode"/>

        </div>

        <div className="container intro">

            <section class="section--intro">
            <p class="description__intro">
            <h3>En pocas palabras:</h3>
            <br />
            En Creative Coding vas a aprender programación orientada al desarrollo creativo.
            <br />
            Cada encuentro estará enfocado a la realización de un trabajo que podrás subir a tu porfolio.
            <br />
            Durante los dos primeros encuentros de Creative Coding 2022 trabajaremos sobre nociones de HTML, CSS y JavaScript para dar forma al sitio personal en el que cada tallerista exhibirá su galeria de trabajos.
            <br />
            <br />
            Destinatarios: Abierto al público interesado, artistas, programadores autodidactas, investigadores, creativxs, etc.
            <br />
            <br />
            Duración: 8 encuentros de 3 horas divididos en 2 módulos.
            <br />
            <br />
            Lugar: Espacio R3set, Roseti 312, CABA.
            <br />
            <br />
            Fecha de Inicio: sabado 8 de Octubre.
            <br />
            <br />
            Valor: 2 pagos de 7000 ARG o 1 pago de 12000 ARG. 
            </p>
            </section>

            <section class="section--contact">
        
            <div class="border"></div>

                <div class="contact__column">

                        <p class="contact__text">
                        Este sitio fue construido por Matias Barreto.
                        <br/>
                        <br/>
                        2022, Buenos Aires, Argentina.
                        <br/>
                        </p>
                
                </div>
                
            </section>

        </div>

        </div>
    )

}

export default Home