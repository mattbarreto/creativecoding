import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimmatedLetters'
import processing1 from '../../assets/images/works/processing/artwork_001.png'
import processing2 from '../../assets/images/works/processing/artwork_002.png'
import processing3 from '../../assets/images/works/processing/artwork_003.png'
import processing4 from '../../assets/images/works/processing/artwork_004.png'
// import worksData from '../../data/works.json'

const Works = () => {

    const [letterClass] = useState('text-animate')
    
/*  const renderWorks = (works) => {

        return (

            <div className='images-container'>
                {
                    works.map((item_inWorks, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img src={prompt.cover} className='works-image' alt='portfolio'></img>
                            </div>
                        )
                    })
                }
            </div>
            )
} */

    return (

        <div className='container works-page'>

            <div className='text-zone'>

            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['G','a','l','e','r','i','a',' ','d','e',' ','t','r','a','b','a','j','o','s']}
                    idx={15}
                />
            </h1>

            <section className='container bajada'>

                <p className='descripcion'>

                    En Creative Coding aprenderemos a trabajar con pj5, Processing, JavaScript, Arduino y Phyton. 
                    <br/>
                    Estos son algunos trabajos realizados con JavaScript y Processing.
                </p>

            </section>

            <section className='gallery'>

                <div className='container processing-works '>

                <img className='processingWork' src={processing1} alt='processing 1'></img>
                <img className='processingWork' src={processing3} alt='processing 2'></img>
                <img className='processingWork' src={processing2} alt='processing 3'></img>
                <img className='processingWork' src={processing4} alt='processing 3'></img>

                </div>

            </section>

            {/* {<div>{renderWorks(worksData.works)}</div>} */}

            </div>
        </div>
    )

}

export default Works