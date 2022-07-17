import './index.scss'
import AnimatedLetters from '../AnimmatedLetters'
import emailjs from '@emailjs/browser'


const Contacto = () => {

    function sendEmail (e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_gf4y548',
        'template_l0aylti',
        e.target,
        'fcZ8-APr8j5Q7Zsd1',
    )
    .then(
        () => {
            alert('Mensaje enviado correctamente!')
            window.location.reload(false)
        },
        () => alert('No se ha podido enviar tu mensaje')
    )
    }

return (

    <div className='container contacto-page' >

        <div className='text-zone'>

            <h1>
                <AnimatedLetters
                    strArray={['C', 'o','n','t','a','c','t','o']}
                    idx={15}
                />
            </h1>

            <p>
            Si estás interesad@ en esta edición de Creative Coding, pongamonos en contacto.
            <br/>
            <br/>
            En caso de que tengas dificultades con el formulario, podes escribir a hola@matiasbarreto.ar
            <br/>
            </p>

            <div className='contact-form'>
                
                <form onSubmit={sendEmail}>
                    <ul>
                        
                        <li className='half'>
                            <input type='text' name='name' placeholder='Nombre' required />
                        </li>
                        
                        <li className='half'>
                            <input type='email' name='email' placeholder='e-mail' required />
                        </li>

                        <li>
                            <input placeholder='Asunto' type='text' name='subject' required />
                        </li>

                        <li>
                            <textarea placeholder='Mensaje' name='message' required></textarea>
                        </li>

                        <li>
                            <input type='submit' className='flat-button' value='ENVIAR'/>
                        </li>

                    </ul>
                
                </form>

            </div>
            
            
        </div>

    </div>
)

}

export default Contacto