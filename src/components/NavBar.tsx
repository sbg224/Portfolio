import { Link as ScrollLink } from "react-scroll";
// import { ShowModeContext } from "../context/ShowModeContext";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./NavBar.module.css";

// type myType = {
// 	showNav: boolean;
// }

function NavBar() {
  // const { showNav, setShowNav } = useContext(ShowModeContext);



  // Fonction pour gérer l'affichage de la navigation
  // const handleShow = () => {
  //   setShowNav(!showNav); // Inverser la valeur de showNav
  // };

  return (
    <div>
      <nav className={style.navHeader}>
        <ScrollLink to="home" smooth={true} duration={500}>
          <h1 className={style.PortfolioLogo}>&copy; BAH Mohamed</h1>
        </ScrollLink>
        <div className={style.buttons}>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={style.buttonLink}
          >
            <i className="fas fa-house" title="Accueil" />
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={style.buttonLink}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className={style.buttonLink}
          >
            skills
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={style.buttonLink}
          >
            Contact
          </ScrollLink>
        </div>

        <ul className={style.ulNav}>
          <li className={style.liNav}>
            <a
              href="https://www.instagram.com/sam_bah11/profilecard/?igsh=bmw1dm45bDZmYW4y"
              rel="noopener noreferrer"
              className={style.iconinstagram}
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://github.com/sbg224"
              rel="noopener noreferrer"
              className={style.iconGitHub}
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-bah-aa38a1232/?utm"
              rel="noopener noreferrer"
              className={style.iconlinkedin}
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
