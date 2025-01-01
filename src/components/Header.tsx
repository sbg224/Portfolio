import { useNavigate } from 'react-router-dom'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import ButtonNav from './ButtonNav';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './Header.module.css'

function Header(){
  const [showNav, setShowNav] = useState(false)

  const myButtonH = useNavigate()
  const myButtonP = useNavigate()
  const myButtonA = useNavigate()

  const handleShow= () =>{
    setShowNav(!showNav)
  }

    return(
        <div className={style.headerG}>
            <nav className={style.navHeader}>
                <Link to={'/'}><h1 className={style.PortfolioLogo}>Portfolio</h1></Link>
                <ul className={style.ulNav} >
                    <li className={style.liNav} >
                      <a href="https://www.instagram.com/sam_bah11/profilecard/?igsh=bmw1dm45bDZmYW4y"  rel="noopener noreferrer" className={style.iconinstagram} ><i className="fab fa-instagram"/></a>
                      <a href="https://github.com/sbg224" rel="noopener noreferrer" className={style.iconGitHub}><i className="fab fa-github" /></a>                      
                      <a href="https://www.linkedin.com/in/mohamed-bah-aa38a1232/?utm"  rel="noopener noreferrer" className={style.iconlinkedin}><i className="fab fa-linkedin-in"/></a>
                    </li>
                </ul>
            </nav>
            <p className={style.intro}>
            Développeur web en formation, passionné par la création de solutions modernes et adaptatives. À la recherche d’une alternance pour développer et appliquer mes compétences dans des environnements collaboratifs et dynamiques.
            </p>
            <div className={`${style.buttons} ${showNav ? style.burgerMenue : ''}`}>
              <ButtonNav handleChange={myButtonH} path= '/' name="Home" color="#9492DC"/>
              <ButtonNav handleChange={myButtonP} path="/Skils" name="My skils" color="#FCD489" />
              <ButtonNav handleChange={myButtonA} path="/about" name="About" color="#88EE9E"/>
            </div>
            <button type='button' onClick={handleShow} className={style.buttonBurger}> 
            {showNav ?  <FaTimes /> : <FaBars />} 
            </button>
        </div>
    )
}

export default Header


