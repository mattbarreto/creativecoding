import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimmatedLetters'
import Loader from 'react-loaders'


const Recursos = () => {


const [letterClass] = useState('text-animate')

    return (
    
    <>

    <div className='container recursos-page' >

        
        <div className='text-zone'>

            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['R','e','c','u','r','s','o','s']}
                    idx={15}
                />
            </h1>

            <section className='libros'>

            <h2>
                Repositorio Creative Coding 2022 en GitHub
            </h2>

            <p>
                Trabajo practico Clase 1 y 2 en GitHub.
            </p>


            <h2>
                Libros Recomendados
            </h2>

            <p>
            Programa o serás programado: Diez mandamientos para la era digital, Douglas Rushkoff
            <br/>
            El entorno digital: Breve manual para entender cómo vivimos, aprendemos, trabajamos y pasamos el tiempo libre hoy, Eugenia Mitchelstein, Pablo J. Boczkowski
            <br/>
            Coding Art: The Four Steps to Creative Programming with the Processing Language, Yu Zhang & Mathias Funk
            <br/>
            Creating Procedural Artworks with Processing: A Holistic Guide, Penny de Byl
            <br/>
            Generative Design, Benedikt Gross
            <br/>
            Pensar en sistemas. Un manual de iniciación, Donella Meadows
            <br/>
            Participation (Documents of Contemporary Art), Claire Bishop (ed.)
            <br/>
            Networks (Documents of Contemporary Art), Edited by Lars Bang Larsen
            <br/>
            Una historia de las imágenes: De la caverna a la pantalla del ordenador, Dave Hickey & Martin Gayford
            </p>

            </section>

            <section className='videos'>

            <h2>
                Videos Recomendados
            </h2>
            
            <p>
            CS50's Introduction to Computer Science and the art of programming (Curso gratuito de la Universidad de Harvard).
            <br/>
            The coding traing

            </p>

            </section>

            <section className='software'>

                <h2>
                    Software Recomendado
                </h2>

                <p>
                    VS Code
                    <br/>
                    Processing
                    <br/>
                    Arduino
                    <br/>
                </p>
            
            </section>
            
            <section className='repositorios'>

                <h2>
                    Repositorios
                </h2>

                <p>
                    Canvas sketch, by Matt DesLauriers on GitHub
                </p>

            </section>
            
        </div>

    </div>
    
    <Loader type="square-spin" />

    </>
)
}

export default Recursos