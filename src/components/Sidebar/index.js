import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoC from '../../assets/images/logos/logo.gif'
/* import LogoSubtitle from '../../assets/images/sub.jpg' */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTerminal, faFolderTree, faFolderOpen, faEnvelopeOpenText, faCubes} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faVimeo,} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to = '/'>
            <img src={LogoC} alt = 'logo'/>
            {/* <img className = 'sub-logo' src={LogoSubtitle} alt = 'sub'/> */}
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faTerminal} color = '#DC143C' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className = 'syllabus-link' to='/syllabus'>
                <FontAwesomeIcon icon={faCubes} color = '#DC143C' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className = 'about-link' to='/recursos'>
                <FontAwesomeIcon icon={faFolderTree} color = '#DC143C' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className = 'works-link' to='/works'>
                <FontAwesomeIcon icon={faFolderOpen} color = '#DC143C' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className= 'contact-link' to='/contacto'>
                <FontAwesomeIcon icon={faEnvelopeOpenText} color = '#DC143C' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target = '_blank' 
                rel='noreferrer' 
                href='http://www.linkedin.com/in/matiasbarreto'>
                <FontAwesomeIcon icon={faLinkedin} color = '#DC143C'/>
                </a>

                <a 
                target = '_blank' 
                rel='noreferrer' 
                href='https://github.com/creativecoding2022'>
                <FontAwesomeIcon icon={faGithub} color = '#DC143C'/>
                </a>

                <a 
                target = '_blank' 
                rel='noreferrer' 
                href='https://vimeo.com/devenirfantasma'>
                <FontAwesomeIcon icon={faVimeo} color = '#DC143C'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar