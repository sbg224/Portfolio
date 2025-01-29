import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import ButtonNav from './ButtonNav';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './Header.module.css'
import Arrow from "../assets/Group 157.svg"

gsap.registerPlugin(ScrollTrigger);

function Header(){
  const [showNav, setShowNav] = useState(false);
  const introText = useRef<HTMLParagraphElement>(null)
  const Bienvenue = useRef<HTMLParagraphElement>(null)
  const myButtonH = useNavigate()
  const myButtonP = useNavigate()
  const myButtonA = useNavigate()

  const handleShow= () =>{
    setShowNav(!showNav)
  };

  useGSAP(() => {
    gsap.from(introText.current, {
      y: "180%",
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      delay: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: introText.current,
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
        toggleActions: "play, reverse, restart",
        // markers: true,
      }
    });
    if (Bienvenue.current) {
      const letters = Bienvenue.current.children;
      // Animation des lettres
      const tl = gsap.timeline({ yoyo: true });
      tl.from(letters, {
        y: "20vh",
        rotate: "180deg",
        opacity: 0,
        stagger: 0.1,
        duration: .5,
        ease: "power2.out",
      })
      .to(letters, {
        x: "40%",
        duration: 0.6,
        ease: "power1.inOut",
      })
      .to(letters, {
        x: "0",
        duration: 0.6,
        ease: "power1.inOut",
      });
      // ScrollTrigger pour les lettres
      // ScrollTrigger.create({
      //   trigger: letters,
      //   start: "top 80%",
      //   end: "bottom 10%",
      //   scrub: true,
      //   toggleActions: "play reverse restart",
      // });
    }
  }, []);

  return(
    <div className={style.headerG}>
      <nav className={style.navHeader}>
        <Link to={'/'}><h1 className={style.PortfolioLogo}>&copy; BAH Mohamed</h1></Link>
        <div className={`${style.buttons} ${showNav ? style.burgerMenue : ''}`}>
          <ButtonNav handleChange={myButtonH} path= '/' name="Home" color="#9492DC"/>
          <ButtonNav handleChange={myButtonP} path="/Skils" name="My skils" color="#FCD489" />
          <ButtonNav handleChange={myButtonA} path="/about" name="About" color="#88EE9E"/>
        </div>
        <ul className={style.ulNav} >
          <li className={style.liNav} >
            <a href="https://www.instagram.com/sam_bah11/profilecard/?igsh=bmw1dm45bDZmYW4y"  rel="noopener noreferrer" className={style.iconinstagram} ><i className="fab fa-instagram"/></a>
            <a href="https://github.com/sbg224" rel="noopener noreferrer" className={style.iconGitHub}><i className="fab fa-github" /></a>                      
            <a href="https://www.linkedin.com/in/mohamed-bah-aa38a1232/?utm"  rel="noopener noreferrer" className={style.iconlinkedin}><i className="fab fa-linkedin-in"/></a>
          </li>
        </ul>
      </nav>
      <p className={style.Bienvenue} ref={Bienvenue}>
        <div>W</div>
        <div>e</div>
        <div>l</div>
        <div>c</div>
        <div>o</div>
        <div>m</div>
        <div>e</div>
        <div>!</div>
      </p>
      <img src={Arrow} alt="Arrière plan" className={style.Arrow}/>
      <p className={style.presHeader}>
      “Hello, I’m Mohamed BAH, a Full-Stack Developer.
      I’m 22 years old and based in Toulouse.”
      </p>
      <p className={style.intro} ref={introText}>
        Développeur web en formation, passionné par la création de solutions modernes et adaptatives.
        À la recherche d’une alternance pour développer et appliquer mes compétences dans des environnements collaboratifs et dynamiques.
      </p>
      <button type='button' onClick={handleShow} className={style.buttonBurger}> 
      {showNav ?  <FaTimes /> : <FaBars />} 
      </button>
    </div>
  )
}

export default Header;


