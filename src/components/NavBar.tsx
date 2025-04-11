import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../context/ThemeContext"; // Utilisation du contexte global
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./NavBar.module.css";

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme(); // Récupération du contexte global

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
            Skills
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
      <div>
        <button
          type="button"
          className={style.themeButton}
          onClick={toggleTheme} // Utilisation de toggleTheme pour changer le thème
        >
          {isDarkMode ? (
            <i className="fas fa-sun" title="Passer au mode clair" />
          ) : (
            <i className="fas fa-moon" title="Passer au mode sombre" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
